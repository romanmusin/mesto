import Popup from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image-pic');
        this._popupImageText = document.querySelector('.popup__image-text');
    }

    openPopup( item ) {
        this._popupImage.setAttribute('src', item.link);
        this._popupImage.setAttribute('alt', item.name);
        this._popupImageText.textContent = item.name;

        super.openPopup();
    }
}