import Page from './page';
import logger from '@wdio/logger';

const log = logger('myLogg');

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
    log.info(`to input added ${login}`);
    await (await this.inputPassword).addValue(password);
    log.info(`to input added ${password}`);
    await (await this.buttonLogIn).click();
  }
}

export default new LoginPage();
