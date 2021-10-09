export class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userName = document.querySelector(`${userNameSelector}`);
    this._userJob = document.querySelector(`${userJobSelector}`);
    this._avatar = document.querySelector(`${userAvatarSelector}`);
  }

  getUserInfo() {
    return { name: this._userName.textContent, job: this._userJob.textContent };
  }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }

  setUserAvatar(link) {
    this._avatar.setAttribute("src", link);
  }
}
