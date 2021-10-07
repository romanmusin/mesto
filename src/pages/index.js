import '../pages/index.css';

import { initialCards } from '../utils/initialCards';
import { Card } from "../components/Card.js";
import { conf, FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";


const popupCard = document.querySelector('.popup_add-card');
const openPopupBtn = document.querySelector('.profile__edit-button');
const plusButton = document.querySelector('.profile__plus');
const formEditProfile = document.querySelector('form[name="edit_form"]');
const formAddCard = document.querySelector('form[name="add-card_form"]');
const formEditAvatar = document.querySelector('form[name="edit-avatar_form"]');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const popupCardValidation = new FormValidator(conf, formAddCard);
const popupProfileValidation = new FormValidator(conf, formEditProfile);
const popupAvatarValidation = new FormValidator(conf, formEditAvatar);
const elements = document.querySelector('.elements');
const avatarBtn = document.querySelector('.profile__avatar-container');
popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();
popupAvatarValidation.enableValidation();

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-28',
    headers: {
      authorization: '75402bac-517a-4bd7-81a8-9a28f9725978',
      'Content-Type': 'application/json'
    }
});

let userDataInfo;
let cardSection;

Promise.all([api.getUInfo(), api.getCardsInfo()])
    .then(([userData, initialCards]) => {
        userDataInfo = userData;
        userInfo.setUserInfo(userData.name, userData.about);
        userInfo.setUserAvatar(userData.avatar)
        cardSection = new Section({
            items : initialCards, 
            renderer : (cardItem) => {
                const addElement = renderCards(cardItem);
                cardSection.addItem(addElement);
            }
        }, elements);
        cardSection.renderItems();

    })
    .catch((err) => {
        console.log(err);
    });

const popupDelete = new PopupWithSubmit('.popup_delete-card');
popupDelete.setEventListeners();

const popupShowImg = new PopupWithImage('.popup_image');
popupShowImg.setEventListeners();

function renderCards(item) {
    const newCard = new Card(item, { myId: userDataInfo._id,
        handleCardClick: () => {
            popupShowImg.openPopup(item);
        },
        handleDeleteCard: () => {
            popupDelete.openPopup()
            popupDelete.setFormSubmit(() => {
                api.cardDelete(item._id)
                .then(() => {
                    newCard.cardElementDelete()
                    popupDelete.closePopup()
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        },
        handleAddLike: () => {
            api.putLike(item._id)
            .then((data) => {
                newCard.showLikesAmount(data.likes)
                newCard.addLike()
            })
            .catch((err) => {
                console.log(err)
            })
        },
        handleDeletelike: () => {
            api.deleteLike(item._id)
            .then((data) => {
              newCard.showLikesAmount(data.likes)
              newCard.addLike()
            })
            .catch((err) => {
              console.log(err)
            })
        }},
    '.elements__template')
    return newCard.generateCard();    
}

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userJobSelector: '.profile__text',
    userAvatarSelector: '.profile__avatar'
});

const openedEditForm = new PopupWithForm('.popup_edit-profile', {
	handleFormSubmit: (data) => {
        openedEditForm.setLoading(true);
        api.setUserInfo(data.name, data.job)
        .then(() => {
            userInfo.setUserInfo(data.name, data.job);
            openedEditForm.closePopup();
        })
        .catch((err) => {
            console.log((err));
        })
        .finally(() => {
            openedEditForm.setLoading(false);
        })
    }  
});
openedEditForm.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_add-card', {
    handleFormSubmit: ({ name, link }) => {
        popupAddCard.setLoading(true)
        api.postAddCard({ name, link })
        .then((data) => {
            const postCard = renderCards(data);
            cardSection.addItem(postCard);
            popupAddCard.closePopup();
        })
        .catch((err) => {
            console.log((err))
        })
        .finally(() => {
            popupAddCard.setLoading(false)
        })
    }
});
popupAddCard.setEventListeners();

const popupAvatar = new PopupWithForm(".popup_edit-avatar", {
    handleFormSubmit: (data) => {
  popupAvatar.setLoading(true)
      api.editAvatar(data.avatar)
      .then(() => {
        userInfo.setAvatar(data.avatar)
        popupAvatar.closePopup()
      })
      .catch((err) => {
        console.log((err))
      })
      .finally(() => {
        popupAvatar.setLoading(false)
      })
    },
});
popupAvatar.setEventListeners();

openPopupBtn.addEventListener('click', () => {
    popupProfileValidation.resetValidation();
	openedEditForm.setIinputValues(userInfo.getUserInfo());
	openedEditForm.openPopup();
});

plusButton.addEventListener('click', () => {
    popupCardValidation.resetValidation();
    popupAddCard.openPopup();
});

avatarBtn.addEventListener('click', () => {
    popupAvatarValidation.resetValidation();
    popupAvatar.openPopup();
});