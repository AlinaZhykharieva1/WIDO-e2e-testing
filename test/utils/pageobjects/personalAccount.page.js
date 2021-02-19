class PersonalAccountPage {
  get greeting() {
    return $('h3.text-align-left');
  }

  async validateUserLoginIsCompleted(expectedGreeting) {
    await expect(await this.greeting).toHaveText(expectedGreeting);
  }
}

export default new PersonalAccountPage();
