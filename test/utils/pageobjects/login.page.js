import Page from './page';

class LoginPage extends Page {
  get inputLogin() {
    return $(':nth-child(1) > .pure-material-textfield-outlined');
  }

  get inputPassword() {
    return $(':nth-child(2) > .pure-material-textfield-outlined');
  }

  get buttonLogIn() {
    return $('button.loginbtn');
  }

  async loginUser(login, password) {
    await (await this.inputLogin).addValue(login);
    await (await this.inputPassword).addValue(password);
    await (await this.buttonLogIn).click();
  }
}

module.exports = new LoginPage();
