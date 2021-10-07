export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _getResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

    getUInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
          }).then(this._getResponse);
    }

    getCardsInfo() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._getResponse);
    }

    postAddCard({ name, link }) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
              name: name,
              link: link,
            }),
          }).then(this._getResponse);
    }

    setUserInfo({ profName, profText }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
              name: profName,
              about: profText,
            }),
        }).then(this._getResponse);;
    }

    editAvatar({ avatar }) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
              avatar: avatar,
            }),
          }).then(this._getResponse);;
    }

    cardDelete(cardId) {
        return fetch(`${this._url}/cads/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
          }).then(this._getResponse);
    }

    putLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers,
          }).then(this._getResponse);
    }

    deleteLike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._getResponse);
    }
}