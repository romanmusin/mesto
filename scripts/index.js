const popupEditProfile = document.querySelector('.popup');
const popupCard = document.querySelector('.popup_add-card');
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
const elImage = elTemplate.querySelector('.element__image');
const elName = elTemplate.querySelector('.element__name');
const popupImage = document.querySelector('.popup__image-pic');
const popupImageText = document.querySelector('.popup__image-text');

function createCards(title, image) {
    

    elName.textContent = title;
    elImage.src = image;
    elImage.alt = title;

    const cardItem = elTemplate.cloneNode(true);

    cardItem.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardItem.querySelector('.element__delete').addEventListener('click', function(evt) {
            evt.target.closest('.element').remove();
        });
    
    cardItem.querySelector('.element__image').addEventListener('click', function(evt) {
            popupImage.src = evt.target.closest('.element__image').src;
            popupImageText.textContent = evt.target.closest('.element__image').alt;
            popupImg.classList.add('popup_image_visible');
        });
    return(cardItem);
};

initialCards.forEach(function(item) {
    elName.textContent = item.name;
    elImage.src = item.link;
    elImage.alt = item.name;
    elements.prepend(createCards(item.name, item.link));
});

function closePopupCard() {
    popupCard.classList.remove('popup_add-card_visible');
    document.querySelector('.popup_add-card').querySelector('form').reset();
}

function newCard(evt) {
    evt.preventDefault();
    elName.textContent = userTitle.value;
    elImage.src = userLink.value;
    elImage.alt = userTitle.value;
    elements.prepend(createCards(userTitle.value, userLink.value));
    closePopupCard(evt);
};

const cardForm = document.querySelector('.popup_add-card').querySelector('form');
cardForm.addEventListener('submit', newCard);

const closePicBtn = document.querySelector('.popup__image-close');

const popupImg = document.querySelector('.popup_image');

function closePic() {
    popupImg.classList.remove('popup_image_visible');
};

closePicBtn.addEventListener('click', closePic);
