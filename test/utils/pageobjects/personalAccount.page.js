import Page from './page';

class PersonalAccountPage extends Page {
  get greeting() {
    return $('h3.text-align-left');
  }

  get headerLogo() {
    return $('div.header-logo > a');
  }

  async validateUserLoginIsCompleted(expectedGreeting) {
    await expect(await this.greeting).toHaveText(expectedGreeting);
  }

  async goToHomePage() {
    await (await this.headerLogo).click();
  }
}

module.exports = new PersonalAccountPage();
