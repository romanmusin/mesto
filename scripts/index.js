import { Card } from "./Card.js";
import { conf, FormValidator } from "./FormValidator.js";

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCard = document.querySelector('.popup_add-card');
const openPopupBtn = document.querySelector('.profile__edit-button');
const plusButton = document.querySelector('.profile__plus');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupName = document.querySelector('.popup__input_type_name');
const popupText = document.querySelector('.popup__input_type_text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const formEditProfile = document.querySelector('form[name="edit_form"]');
const formAddCard = document.querySelector('form[name="add-card_form"]');
const Esc = 'Escape';
const cardSaveButton = popupCard.querySelector('.popup__save');
const popupCardValidation = new FormValidator(conf, formAddCard);
const popupProfileValidation = new FormValidator(conf, formEditProfile);
popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();

function submitEditProfileForm (evt) {
    evt.preventDefault();
    profName.textContent = popupName.value;
    profText.textContent = popupText.value;
    closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', submitEditProfileForm);

const elements = document.querySelector('.elements');
const userTitle = document.querySelector('.popup__input_type_card');
const userLink = document.querySelector('.popup__input_type_link');
const popupImage = document.querySelector('.popup__image-pic');
const popupImageText = document.querySelector('.popup__image-text');

function createCards(obj) {
    const newCard = new Card(obj, '.elements__template');
    const cardItem = newCard.generateCard();

    return cardItem;

};

initialCards.forEach((obj) => {
    elements.prepend(createCards(obj));
});

export function openPic(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageText.textContent = name;
    openPopup(popupImg);
}

function newCard(evt) {
    evt.preventDefault();
    const cards = {
        name: userTitle.value,
        link: userLink.value
    };
    elements.prepend(createCards(cards));
    closeAddCardForm(evt);
    cardSaveButton.setAttribute('disabled', 'disabled');
    cardSaveButton.classList.add('popup__save_disabled');
};

const cardForm = document.querySelector('.popup_add-card').querySelector('form');

cardForm.addEventListener('submit', newCard);

const closePicBtn = document.querySelector('.popup__image-close');

const popupImg = document.querySelector('.popup_image');

function openPopup(item) {
    item.classList.add('popup_visible')
    document.addEventListener('keydown', closeByEsc)
}

function closePopup(item) {
    item.classList.remove('popup_visible')
    document.removeEventListener('keydown', closeByEsc)
}

function closeAddCardForm() {
    closePopup(popupCard);
    cardForm.reset();
}

openPopupBtn.addEventListener('click', function() {
    popupName.value = profName.textContent;
    popupText.value = profText.textContent;
    openPopup(popupEditProfile)
});

closePopupBtn.addEventListener('click', function() {
    closePopup(popupEditProfile)
});

plusButton.addEventListener('click', function() {
    openPopup(popupCard);
});

const closeCardBtn = popupCard.querySelector('.popup__close-button');

closeCardBtn.addEventListener('click', closeAddCardForm);

closePicBtn.addEventListener('click', function() {
    closePopup(popupImg);
});

const closeByEsc = (evt) => {
    const popup = document.querySelector('.popup_visible')
    if (evt.key === Esc) {
      closePopup(popup);
    }
};

function closeByOverlay(evt) {
    const popup = document.querySelector('.popup_visible')
    if (evt.target.classList.contains('popup_visible')) {
      closePopup(popup);
    }
  }

  popupEditProfile.addEventListener('mousedown', closeByOverlay);
  popupImg.addEventListener('mousedown', closeByOverlay);
  popupCard.addEventListener('mousedown', closeByOverlay);