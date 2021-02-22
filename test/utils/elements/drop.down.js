import Element from './base.element';

export default class DropDown extends Element {
  constructor(selector) {
    super(selector);
  }

  async dropDownItemClick() {
    return (await this.element).click();
  }
}
