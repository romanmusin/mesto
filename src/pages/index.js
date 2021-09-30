import '../pages/index.css';

import { initialCards } from '../components/initialCards';
import { Card } from "../components/Card.js";
import { conf, FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";


const popupCard = document.querySelector('.popup_add-card');
const openPopupBtn = document.querySelector('.profile__edit-button');
const plusButton = document.querySelector('.profile__plus');
const formEditProfile = document.querySelector('form[name="edit_form"]');
const formAddCard = document.querySelector('form[name="add-card_form"]');
const popupCardValidation = new FormValidator(conf, formAddCard);
const popupProfileValidation = new FormValidator(conf, formEditProfile);
const elements = document.querySelector('.elements');
popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();

const popupShowImg = new PopupWithImage('.popup_image');
popupShowImg.setEventListeners();

function openPic(...args) {
    popupShowImg.openPopup(...args);
}

function renderCards(cardElement) {
    const newCard = new Card(cardElement, openPic, '.elements__template')
    return newCard.generateCard(cardElement);
}

const cardsList = new Section({ items : initialCards, renderer : renderCards }, elements);

cardsList.renderItems();

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userJobSelector: '.profile__text'
});

const openedEditForm = new PopupWithForm({
    formSelector: formEditProfile,
	popupSelector: '.popup_edit-profile',
	handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    openedEditForm.closePopup();}
    
});

openedEditForm.setEventListeners();

openPopupBtn.addEventListener('click', () => {
	openedEditForm.setIinputValues(userInfo.getUserInfo());
	openedEditForm.openPopup()
});



function submitAdd() {
    const cardElement = this._getInputValues();
    cardsList.addItem(cardElement);
    popupAddCard.closePopup();
    console.log(cardElement)
}

const popupAddCard = new PopupWithForm({
    formSelector: formAddCard,
    popupSelector: '.popup_add-card',
    handleFormSubmit: submitAdd
});
popupAddCard.setEventListeners();

plusButton.addEventListener('click', () => {
    popupAddCard.openPopup()
});