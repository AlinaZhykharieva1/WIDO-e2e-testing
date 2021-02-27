import Element from './base.element';

export default class Button extends Element {
  constructor(selector) {
    super(selector);
  }

  async buttonClick() {
    return (await this.element).click();
  }
}
