import Popup from './Popup.js';

export class PopupWithForm extends Popup {
    constructor( popupSelector, { handleFormSubmit  }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('form');
        this._handleFormSubmit = handleFormSubmit;
        this._popupInputs = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._popupInputs.forEach(input => {
        this._formValues[input.name] = input.value;
        });
        return this._formValues;        
    }

    setIinputValues(values) {
        this._popupInputs.forEach(input => {
            if (input.name in values) {
              input.value = values[input.name];
            }
        })
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
        })
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }

    setLoading(isLoading) {
        if (isLoading) {
            this._form.querySelector('.popup__save').textContent =
              "Сохранение...";
        } else {
            this._form.querySelector('.popup__save').textContent = "Сохранить";
        }
    }
}