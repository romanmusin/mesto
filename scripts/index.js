let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close-button');

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

let popupName = document.querySelector('.popup__input-name').value = document.querySelector('.profile__name').textContent;
let popupText = document.querySelector('.popup__input-text').value = document.querySelector('.profile__text').textContent;
let saveBtn = document.querySelector('.popup__save');


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

let like = document.querySelectorAll('.element__text-container_like').forEach(item => {
    item.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__text-container_like-active');
    })
  });



