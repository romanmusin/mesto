let conf = [
    {formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: '.popup__save_disabled',
    inputErrorClass: '.popup__input_invalid',
    errorClass: '.error_valid'}
]

const showError = (formElement, inputElement, errorMessage, conf) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(conf.inputErrorClass);
    errorElement.classList.remove(conf.errorClass);
    errorElement.textContent = errorMessage;
};
  
const hideInputError = (formElement, inputElement, conf) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(conf.inputErrorClass);
    errorElement.classList.add(conf.errorClass)
    errorElement.textContent = '';
  };

const isValid = (formElement, inputElement, conf) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, conf);
    } else {
      hideError(formElement, inputElement, conf);
    }
};

const setEventListener = (formElement, conf) => {
    let inputList = Array.from(formElement.querySelectorAll(conf.inputSelector))
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
    const buttonElement = formElement.querySelector('.popup__save');
    if (inputInvalid(inputList)) {
        buttonElement.classList.add(conf.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(conf.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

function enableValidation(conf) {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
      setEventListener(formElement, conf)
    })
    
}
  
enableValidation(conf);


/*function showError(formElement, errorMessage, inputElement, conf) {
    const span = formElement.querySelector(`#${inputElement.id}-error`);
    span.classList.remove(conf.errorClass);
    inputElement.classList.add(conf.inputErrorClass);
    span.textContent = errorMessage;
}*/

/*function handleFormInput(event, conf) {
    const inputElement = event.target;
    const formElement = event.currentTarget;

    showError(formElement, errorMessage, inputElement, conf);
    toggleSubmitButtonState(formElement, form, conf);

}*/

/*function setSubmitButtonActiveState(formElement, conf) {
    const button = formElement.querySelector(conf.submitButtonSelector.value);
      
    button.classList.remove(conf.inactiveButtonClass);
    button.removeAttribute('disabled');
}

function setSubmitButtonInactiveState(formElement, conf) {
    const button = formElement.querySelector(conf.submitButtonSelector);
  
    button.classList.add(conf.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
}  */