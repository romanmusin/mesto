let popup = document.querySelector('.popup');
let popupCard = document.querySelector('.popup-card');

let openPopupBtn = document.querySelector('.profile__edit-button');
let plusButton = document.querySelector('.profile__plus');

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

function openPopupCard() {
    popupCard.classList.add('popup-card_visible');
}

function closePopup() {
    popup.classList.remove('popup_visible');
}



function edit (evt) {
    evt.preventDefault();
    profName.textContent = popupName.value;
    profText.textContent = popupText.value;
    closePopup();
}

openPopupBtn.addEventListener('click', openPopup);
plusButton.addEventListener('click', openPopupCard);

closePopupBtn.addEventListener('click', closePopup);
popupCard.querySelector('.popup__close-button').addEventListener('click', closePopupCard);

popupForm.addEventListener('submit', edit);

/////////////////

const elements = document.querySelector('.elements');
const elTemplate = document.querySelector('.elements__template').content;
const userTitle = document.querySelector('.popup__input_type_card');
const userLink = document.querySelector('.popup__input_type_link');

function insertCards() {
    
    const cardItem = elTemplate.cloneNode(true);
    elements.prepend(cardItem);

    elements.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });

    elements.querySelectorAll('.element__delete').forEach(item => {
        item.addEventListener('click', function(evt) {
            evt.target.closest('.element').remove();
        })
    });
    
    elements.querySelectorAll('.element__image').forEach(item => {
        item.addEventListener('click', function(evt) {
            document.querySelector('.popup-img__pic').src = evt.target.closest('.element__image').src;
            document.querySelector('.popup-img__text').textContent = evt.target.closest('.element__image').alt;
            popupImg.classList.add('popup-img_visible');
        })
    });
};



initialCards.forEach(function(item) {
    
    elTemplate.querySelector('.element__name').textContent = item.name;
    elTemplate.querySelector('.element__image').src = item.link;
    elTemplate.querySelector('.element__image').alt = item.name;
    
    insertCards(item.name, item.link);
    
});

function closePopupCard() {
    popupCard.classList.remove('popup-card_visible');
}

function newCard(evt) {
    evt.preventDefault();
    elTemplate.querySelector('.element__name').textContent = userTitle.value;
    elTemplate.querySelector('.element__image').src = userLink.value;
    elTemplate.querySelector('.element__image').alt = userTitle.value;
    insertCards(userTitle.value, userLink.value);
    elements.append();
    closePopupCard(evt);
};

document.querySelector('.popup-card').querySelector('form').addEventListener('submit', newCard);

const Card = document.querySelectorAll('article');

let closePicBtn = document.querySelector('.popup-img__close');
let popupImg = document.querySelector('.popup-img');


function closePic() {
    popupImg.classList.remove('popup-img_visible');
};


document.querySelector('.popup-img__close').addEventListener('click', closePic);
