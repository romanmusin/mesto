import Popup from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupButton = this._popupElement.querySelector('.popup__save');
        this._form = this._popupElement.querySelector('form');
    }

    setFormSubmit(handle) {
        this._handleSubmit = handle;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit()
        });
        
        
    }
}