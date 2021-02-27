import Element from '../elements/base.element';
import DropDown from '../elements/drop.down';
import Button from '../elements/button';

class InvoicePage {
  get firstName() {
    return new Element('.clearfix > .go-left');
  }

  get address() {
    return new Element(':nth-child(4) > .go-left');
  }

  get phone() {
    return new Element(':nth-child(5) > .go-left');
  }

  get payment() {
    return new Button('center > .btn-primary');
  }

  get dropDownSelect() {
    return new Element('#gateway_chosen > .chosen-single');
  }

  get paymentDropDownByCreditCard() {
    return new DropDown('[data-option-array-index="3"]');
  }

  get buttonPay() {
    return new Button('.creditcardform > :nth-child(3) > .btn');
  }

  get alertMessage() {
    return new Element('.alert');
  }

  async performPayByCreditCard() {
    await this.payment.buttonClick();
    await this.dropDownSelect.elementClick();
    await this.paymentDropDownByCreditCard.dropDownItemClick();
  }

  async clickPay() {
    await this.buttonPay.buttonClick();
  }
}

export default new InvoicePage();
