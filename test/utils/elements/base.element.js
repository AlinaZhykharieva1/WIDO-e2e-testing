export default class Element {
  constructor(selector) {
    this.selector = $(selector);
  }

  get element() {
    return this.selector;
  }

  async elementClick() {
    return (await this.element).click();
  }

  async waitForElementDisplayed() {
    return (await this.element).waitForDisplayed({ timeout: 3000 });
  }
}


