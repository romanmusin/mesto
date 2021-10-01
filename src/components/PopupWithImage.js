import Popup from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image-pic');
        this._popupImageText = document.querySelector('.popup__image-text');
    }

    openPopup( name, link ) {
        this._popupImage.setAttribute('src', link);
        this._popupImage.setAttribute('alt', name);
        this._popupImageText.textContent = name;

        super.openPopup();
    }
}