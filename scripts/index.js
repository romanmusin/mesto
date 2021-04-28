let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.profile__edit-button');

let closePopupBtn = document.querySelector('.popup__close-button');

let popupName = document.querySelector('.popup__input_type_name');

let popupText = document.querySelector('.popup__input_type_text');

let profName = document.querySelector('.profile__name');

let profText = document.querySelector('.profile__text');

let popupForm = document.querySelector('form');

function openPopup() {
    popupName.value = profName.textContent;
    popupText.value = profText.textContent;
    popup.classList.add('popup_visible');
}

function closePopup() {
    popup.classList.remove('popup_visible');
}

function edit() {
    profName.textContent = popupName.value;
    profText.textContent = popupText.value;
    closePopup();
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);
 
popupForm.addEventListener('submit', edit);

//let like = document.querySelectorAll('.element__like').forEach(item => {
//    item.addEventListener('click', function (evt) {
//        evt.target.classList.toggle('element__like-active');
//    })
//  });