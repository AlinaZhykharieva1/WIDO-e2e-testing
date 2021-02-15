import Page from './page';

class PersonalAccountPage extends Page {
  get greeting() {
    return $('h3.text-align-left');
  }

  async validateUserLoginIsCompleted(expectedGreeting) {
    await expect(await this.greeting).toHaveText(expectedGreeting);
  }
}

module.exports = new PersonalAccountPage();
