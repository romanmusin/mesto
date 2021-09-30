export class Card {
    constructor(data, handleCardClick, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        const cardTemplate = document
		.querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        this._cardTemplate = cardTemplate;
    }

    _getElement() {
        this._elementImage = this._cardTemplate.querySelector('.element__image');
        this._elementName = this._cardTemplate.querySelector('.element__name');
        this._elementDeleteButton = this._cardTemplate.querySelector('.element__delete');
        this._elementLikeButton = this._cardTemplate.querySelector('.element__like');
    }
    
    _setElement() {
        this._elementImage.setAttribute('src', this._link);
        this._elementImage.setAttribute('alt', this._name);
        this._elementName.textContent = this._name;
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        this._elementDeleteButton.addEventListener('click', () => this._cardTemplate.remove());
        this._elementLikeButton.addEventListener('click', () => this._elementLikeButton.classList.toggle('element__like_active'));
    }

    generateCard() {
        this._getTemplate();
        this._getElement();
        this._setElement();
        this._setEventListeners();
    
        return this._cardTemplate;
    } 
}