const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupOverlay = document.querySelector('.popup__overlay');

function openPopup() {
    popup.classList.add('popup_visible');
}

function closePopup() {
    popup.classList.remove('popup_visible');
}

openPopupBtn.addEventListener('click', function() {
    openPopup();
});

closePopupBtn.addEventListener('click', function() {
    closePopup();
});

popupOverlay.addEventListener('click', function() {
    closePopup();
});

let popupName = document.querySelector('.popup__input-name').value = document.querySelector('.profile__name').textContent;
let popupText = document.querySelector('.popup__input-text').value = document.querySelector('.profile__text').textContent;
const saveBtn = document.querySelector('.popup__save');


function edit() {
    popupName = document.querySelector('.popup__input-name').value;

    document.querySelector('.profile__name').textContent = popupName;
    
    popupText = document.querySelector('.popup__input-text').value;
    
    document.querySelector('.profile__text').textContent = popupText;
}
 
 
saveBtn.addEventListener('click', function () {
    edit();
    closePopup();
});


let like = document.querySelectorAll('.element__text-container_like');

like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__text-container_like-active');
    console.log(like.classList);
});



