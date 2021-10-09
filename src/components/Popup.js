export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        !(
          evt.target === this._popupElement ||
          evt.target.classList.contains("popup__close-button")
        )
      ) {
        return;
      }
      this.closePopup();
    });

    /*this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
              this.closePopup();
            }
        });*/
  }
}
