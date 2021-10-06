export class Card {
    constructor(item, {myId, handleCardClick, handleDeleteCard, handleAddLike, handleDeleteLike}, cardSelector) {
        this._name = item.name;
        this._link = item.link;
        this._myId = myId;
        this._id = item.id;
        this._like = item.likes;
        this._cardSelector = cardSelector;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleDeliteCard = handleDeleteCard;
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        const cardTemplate = document
		.querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        this._cardTemplate = cardTemplate;
    }

    _getElement() {
        this._elementImage = this._cardTemplate.querySelector('.element__image');
        this._elementName = this._cardTemplate.querySelector('.element__name');
        this._elementDeleteButton = this._cardTemplate.querySelector('.element__delete');
        this._elementLikeButton = this._cardTemplate.querySelector('.element__like');
        this._elementLike = this._cardTemplate.querySelector('.element__like');
        this._elementDelete = this._cardTemplate.querySelector('.element__delete');
        this._elementLikeCounter = this._cardTemplate.querySelector('.element__like-amount');
        this._element.id = this._id;
    }
    
    _setElement() {
        this._elementImage.setAttribute('src', this._link);
        this._elementImage.setAttribute('alt', this._name);
        this._elementName.textContent = this._name;
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        this._elementDeleteButton.addEventListener('click', () => this._handleDeleteCard(this._element));
        this._elementLikeButton.addEventListener('click', () => this._setLike());
    }

    generateCard() {
        this._getTemplate();
        this._getElement();
        this._setElement();
        this._elementLikeCounter.textContent = this._item.likes.length;
        if (this._item.likes.find((like) => like._id === this._myId)) {
            this._elementLike.classList.add('element__like_active');
        };

        if (this._item.owner._id === this._myId) {
            this._element.querySelector('.element__delete').classList.add('element__delete_active')
          } else {
            this._element.querySelector('.element__delete').classList.remove('element__delete_active')
        };
        
        this._showDeleteBtn();
        this._setEventListeners();
    
        return this._element;
    }

    cardElementDelete() {
        this._element.remove();
        this._element = null;
    }

    showLikesAmount(arr) {
        this._elementLikeCounter.textContent = arr.length;
    }

    addLike() {
        this._elementLike.classList.toggle('element__like_active');
    }

    _setLike() {
        const like = this._element.querySelector(".element__like");
        !like.classList.contains("element__like_active")
          ? this._handleAddlike()
          : this._handleDeletelike();
    }
}