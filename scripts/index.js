const popupEditProfile = document.querySelector('.popup');

const popupCard = document.querySelector('.popup__add-card');

const openPopupBtn = document.querySelector('.profile__edit-button');

const plusButton = document.querySelector('.profile__plus');

const closePopupBtn = document.querySelector('.popup__close-button');

const popupName = document.querySelector('.popup__input_type_name');

const popupText = document.querySelector('.popup__input_type_text');

const profName = document.querySelector('.profile__name');

const profText = document.querySelector('.profile__text');

const popupForm = document.querySelector('form');

function openPopup() {
    popupName.value = profName.textContent;
    popupText.value = profText.textContent;
    popupEditProfile.classList.add('popup_visible');
}

function openPopupCard() {
    popupCard.classList.add('popup_add-card_visible');
    
}

function closePopup() {
    popupEditProfile.classList.remove('popup_visible');
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

function createCards(name, link) {
    const cardItem = elTemplate.cloneNode(true);

    elTemplate.querySelector('.element__name').textContent = name;
    elTemplate.querySelector('.element__image').src = link;
    elTemplate.querySelector('.element__image').alt = name;

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
            document.querySelector('.popup__image-pic').src = evt.target.closest('.element__image').src;
            document.querySelector('.popup__image-text').textContent = evt.target.closest('.element__image').alt;
            popupImg.classList.add('popup__image_visible');
        })
    });
    
};

initialCards.forEach(function(item) {
    elTemplate.querySelector('.element__name').textContent = item.name;
    elTemplate.querySelector('.element__image').src = item.link;
    elTemplate.querySelector('.element__image').alt = item.name;
    createCards(item.name, item.link);
});

function closePopupCard() {
    popupCard.classList.remove('popup_add-card_visible');
    document.querySelector('.popup_add-card').querySelector('form').reset();
}

function newCard(evt) {
    evt.preventDefault();
    elTemplate.querySelector('.element__name').textContent = userTitle.value;
    elTemplate.querySelector('.element__image').src = userLink.value;
    elTemplate.querySelector('.element__image').alt = userTitle.value;
    createCards(userTitle.value, userLink.value);
    elements.append();
    closePopupCard(evt);
};

document.querySelector('.popup_add-card').querySelector('form').addEventListener('submit', newCard);

const closePicBtn = document.querySelector('.popup__image-close');

const popupImg = document.querySelector('.popup__image');

function closePic() {
    popupImg.classList.remove('popup__image_visible');
};

document.querySelector('.popup__image-close').addEventListener('click', closePic);
