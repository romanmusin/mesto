
/*Здравствуйте. В прошлый раз в консоли у меня не было никаких ошибок, в этот раз тоже нет, если будут,
    прикрепите пожалуйста скрин.
    Также в макете нет информации по адаптивности страницы между 1280px и 320px. В задании в практике
    об этом тоже ничего не сказано, пожтому садаптировал интуитивно.*/

    
const popupEditProfile = document.querySelector('.popup');
const popupCard = document.querySelector('.popup_add-card');
const openPopupBtn = document.querySelector('.profile__edit-button');
const plusButton = document.querySelector('.profile__plus');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupName = document.querySelector('.popup__input_type_name');
const popupText = document.querySelector('.popup__input_type_text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const formEditProfile = document.querySelector('form[name="edit_form"]');

function submitEditProfileForm (evt) {
    evt.preventDefault();
    profName.textContent = popupName.value;
    profText.textContent = popupText.value;
    closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', submitEditProfileForm);

/////////////////

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements__template').content;
const userTitle = document.querySelector('.popup__input_type_card');
const userLink = document.querySelector('.popup__input_type_link');
const popupImage = document.querySelector('.popup__image-pic');
const popupImageText = document.querySelector('.popup__image-text');

function createCards(title, image) {
    
    const cardItem = cardTemplate.cloneNode(true);

    cardItem.querySelector('.element__name').textContent = title;
    cardItem.querySelector('.element__image').src = image;
    cardItem.querySelector('.element__image').alt = title;

    cardItem.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardItem.querySelector('.element__delete').addEventListener('click', function(evt) {
            evt.target.closest('.element').remove();
        });
    
    cardItem.querySelector('.element__image').addEventListener('click', function(evt) {
            popupImage.src = evt.target.closest('.element__image').src;
            popupImage.alt = evt.target.closest('.element__image').alt;
            popupImageText.textContent = evt.target.closest('.element__image').alt;
            openPopup(popupImg);
        });

    return(cardItem);
};


initialCards.forEach(function(item) {
    
    elements.prepend(createCards(item.name, item.link));
});

function newCard(evt) {
    evt.preventDefault();
    
    elements.prepend(createCards(userTitle.value, userLink.value));
    closeAddCardForm(evt);
};

const cardForm = document.querySelector('.popup_add-card').querySelector('form');
cardForm.addEventListener('submit', newCard);

const closePicBtn = document.querySelector('.popup__image-close');

const popupImg = document.querySelector('.popup_image');

function openPopup(item) {
    item.classList.add('popup_visible')
}

function closePopup(item) {
    item.classList.remove('popup_visible')
}

function closeAddCardForm() {
    closePopup(popupCard);
    cardForm.reset();
}

openPopupBtn.addEventListener('click', function() {
    popupName.value = profName.textContent;
    popupText.value = profText.textContent;
    openPopup(popupEditProfile)
});

closePopupBtn.addEventListener('click', function() {
    closePopup(popupEditProfile)
});

plusButton.addEventListener('click', function() {
    openPopup(popupCard);
});

const closeCardBtn = popupCard.querySelector('.popup__close-button');
closeCardBtn.addEventListener('click', closeAddCardForm);

closePicBtn.addEventListener('click', function() {
    closePopup(popupImg);
});