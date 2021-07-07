import { openPic } from "./index.js";

class Card {
    constructor(cardsList, cardSelector) {
        this._name = cardsList.name;
        this._link = cardsList.link;
        this._cardSelector = cardSelector;
        this._openPic = openPic;
    }

    _getTemplate() {
        const card = document.querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)
 
        return card;
    }

    _like(likeBtn) {
        likeBtn.classList.toggle('element__like_active');
    }

    _delete(deleteBtn) {
        deleteBtn.closest('.element').remove();
    }

    _setEvtListeners() {
        const likeBtn = this._element.querySelector('.element__like');
        const deleteBtn = this._element.querySelector('.element__delete');
        const cardImage = this._element.querySelector('.element__image');

        likeBtn.addEventListener('click', () => {
            this._like(likeBtn);
        });
   
        deleteBtn.addEventListener('click', () => {
            this._delete(deleteBtn);
        });
  
        cardImage.addEventListener('click', () => {
           this._openPic (this._name, this._link)
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEvtListeners();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__name').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
    
        return this._element;
    }
}
export { Card };