import Element from './base.element';

export default class Link extends Element {
  constructor(selector) {
    super(selector);
  }

  async linkClick() {
    return (await this.element).click();
  }
}
