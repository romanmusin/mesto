let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close-button');
let popupName = document.querySelector('.popup__input_name');
let popupText = document.querySelector('.popup__input_text');
let profName = document.querySelector('.profile__name');
let profText = document.querySelector('.profile__text');
let saveBtn = document.querySelector('.popup__save');

function openPopup() {
    popupName.value = profName.textContent;
    popupText.value = profText.textContent;
    popup.classList.add('popup_visible');
    console.log(popupText.value);
}

function closePopup() {
    profName.textContent = popupName.value;
    profText.textContent = popupText.value;
    popup.classList.remove('popup_visible');
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);
 
saveBtn.addEventListener('click', closePopup);

//let like = document.querySelectorAll('.element__like').forEach(item => {
//    item.addEventListener('click', function (evt) {
//        evt.target.classList.toggle('element__like-active');
//    })
//  });