import Popup from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ formSelector, popupSelector, handleFormSubmit  }) {
        super(popupSelector);
        this._formSelector = formSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._popupInput = this._formSelector.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._popupInput.forEach(input => {
        this._formValues[input.name] = input.value; 
        });
    
        return this._formValues;
        
    }

    setIinputValues(values) {
        this._popupInput.forEach(input => {
            if (input.name in values) {
              input.value = values[input.name];
            }
        })
        console.log(values);
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
            this._formSelector.reset();
        })
    }

    closePopup() {
        
        this._formSelector.reset();
        super.closePopup();
    }
}