export class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _getResponse(response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
    }

    getUInfo() {
        return fetch(this.baseUrl + 'users/me', {
            headers: this.headers
        }).then(this._getResponse);
    }

    getCardsInfo() {
        return fetch(this.baseUrl + 'cards', {
            headers: this.headers
          }).then(this._getResponse);
    }

    postAddCard({ card_name, card_image_link }) {
        return fetch(`${this.baseUrl}cards`, {
          method: 'POST',
          body: JSON.stringify({
            name: card_name,
            link: card_image_link
          }),
          headers: this.headers
        }).then(this._getResponse);
    }

    editUInfo({ name, job }) {
        return fetch(this.baseUrl + 'users/me', { 
            method: 'PATCH',
            body: JSON.stringify({
              name: name,
              about: job
            }),
            headers: this.headers
        })
        .then(this._getResponse);
    }

    editAvatar({ avatar_link }) {
        return fetch(this.baseUrl + 'users/me/avatar', { 
            method: 'PATCH',
            body: JSON.stringify({
              avatar: avatar_link
            }),
            headers: this.headers
        })
        .then(this._getResponse);
    }

    cardDelete(id) {
        return fetch(`${this.baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this._getResponse);
    }

    putLike(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(this._getResponse);
    }

    deleteLike(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this._getResponse);
    }
}