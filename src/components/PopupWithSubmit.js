import Popup from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupButton = this._popupElement.querySelector('.popup__save')
    }

    setFormSubmit(handle) {
        this._handleSubmit = handle;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupButton.addEventListener('click', () => {
            this._setFormSubmit()
        });
        
        
    }
}