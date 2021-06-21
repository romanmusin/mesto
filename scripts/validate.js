const conf = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'input-error_valid'
}

const showError = (inputElement, formElement, errorMessage, conf) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(conf.inputErrorClass);
    errorElement.classList.remove(conf.errorClass);
    errorElement.textContent = errorMessage;
};
  
const hideError = (formElement, inputElement, conf) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(conf.inputErrorClass);
    errorElement.classList.add(conf.errorClass)
    errorElement.textContent = '';
  };

const isValid = (formElement, inputElement, conf) => {
    if (!inputElement.validity.valid) {
      showError(inputElement, formElement, inputElement.validationMessage, conf);
    } else {
      hideError(formElement, inputElement, conf);
    }
};

const setEventListener = (formElement, conf) => {
    const inputList = Array.from(formElement.querySelectorAll(conf.inputSelector))
    const buttonElement = formElement.querySelector(conf.submitButtonSelector);

    toggleSubmitButtonState(inputList, formElement, conf);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, conf);
        toggleSubmitButtonState(inputList, formElement, conf);
      })
    })
}

const inputInvalid = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
};

function toggleSubmitButtonState(inputList, formElement, conf) {
    const buttonElement = formElement.querySelector(conf.submitButtonSelector);
    if (inputInvalid(inputList)) {
        buttonElement.classList.add(conf.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(conf.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

function enableValidation(conf) {
    const formList = Array.from(document.querySelectorAll(conf.formSelector));

    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
      setEventListener(formElement, conf)
    })
    
}
  
enableValidation(conf);