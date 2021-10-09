export class Card {
  constructor(
    item,
    {
      myId,
      handleCardClick,
      handleDeleteCard,
      handleAddLike,
      handleDeleteLike,
    },
    cardSelector
  ) {
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._myId = myId;
    this._id = item.id;
    this._likes = item.likes;
    this._owner = item.owner;
    this._cardSelector = cardSelector;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._cardTemplate = cardTemplate;
  }

  _getElement() {
    this._elementImage = this._cardTemplate.querySelector(".element__image");
    this._elementName = this._cardTemplate.querySelector(".element__name");
    this._elementLike = this._cardTemplate.querySelector(".element__like");
    this._elementDelete = this._cardTemplate.querySelector(".element__delete");
    this._elementLikeCounter = this._cardTemplate.querySelector(
      ".element__like-amount"
    );
    this._cardTemplate.id = this._id;
  }

  _setElement() {
    this._elementImage.setAttribute("src", this._link);
    this._elementImage.setAttribute("alt", this._name);
    this._elementName.textContent = this._name;
  }

  _setEventListeners() {
    this._elementImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
    this._elementDelete.addEventListener("click", () =>
      this._handleDeleteCard(this._cardTemplate)
    );
    this._elementLike.addEventListener("click", () => this._setLike(this));
  }

  generateCard() {
    this._getTemplate();
    this._getElement();
    this._setElement();
    this._elementLikeCounter.textContent = this._likes.length;
    if (this._likes.find((like) => like._id === this._myId)) {
      this._elementLike.classList.add("element__like_active");
    }

    if (this._item.owner._id === this._myId) {
      this._cardTemplate
        .querySelector(".element__delete")
        .classList.add("element__delete_active");
    } else {
      this._cardTemplate
        .querySelector(".element__delete")
        .classList.remove("element__delete_active");
    }
    this._setEventListeners();

    return this._cardTemplate;
  }

  deleteCardElement() {
    this._cardTemplate.remove();
  }

  showLikesAmount(arr) {
    this._elementLikeCounter.textContent = arr.length;
  }

  toggleLike() {
    this._elementLike.classList.toggle("element__like_active");
  }

  _setLike() {
    const like = this._elementLike;
    !like.classList.contains("element__like_active")
      ? this._handleAddLike()
      : this._handleDeleteLike();
  }
}
