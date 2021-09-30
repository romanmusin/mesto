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

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('click', (evt) => {
            if (!(evt.target === this._popupElement || evt.target.classList.contains('popup__image-close'))) {
                return;
              };
            this.closePopup();
        });
    }
}