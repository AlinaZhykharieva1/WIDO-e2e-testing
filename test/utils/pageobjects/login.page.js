import Input from '../elements/input';
import Button from '../elements/button';

class LoginPage {
  get inputLogin() {
    return new Input(':nth-child(1) > .pure-material-textfield-outlined > input');
  }

  get inputPassword() {
    return new Input(':nth-child(2) > .pure-material-textfield-outlined > input');
  }

  get buttonLogIn() {
    return new Button('button.loginbtn');
  }

  async loginUser(login, password) {
    await this.inputLogin.addValue(login);
    await this.inputPassword.addValue(password);
    await this.buttonLogIn.buttonClick();
  }
}

export default new LoginPage();
