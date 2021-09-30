const conf = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'input-error_valid'
}

class FormValidator {
    constructor(conf, formValidate) {
        this._formSelector = conf.formSelector;
        this._inputSelector = conf.inputSelector;
        this._submitButtonSelector = conf.submitButtonSelector;
        this._inactiveButtonClass = conf.inactiveButtonClass;
        this._inputErrorClass = conf.inputErrorClass;
        this._errorClass = conf.errorClass;
        this._formValidate = formValidate;
        this._inputList = Array.from(this._formValidate.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formValidate.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._formValidate.addEventListener('submit', function(evt) {
            evt.preventDefault()
        });
        this._setEventListener();
    }

    _setEventListener() {
        this._toggleSubmitButtonState();
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
              this._checkValidity(input);
              this._toggleSubmitButtonState();
            })
        })
    }

    _showError(input, errorMessage) {
        const errorElement = this._formValidate.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = errorMessage;
    }

    _hideError(input) {
        const errorElement = this._formValidate.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = '';
    }

    _checkValidity(input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }

    _inputInvalid() {
        return this._inputList.some((inputList) => {
            return !inputList.validity.valid;
          })
    }

    _toggleSubmitButtonState() {
        if (this._inputInvalid()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }
}

export { conf, FormValidator };