class InvoicePage {
  get firstName() {
    return $('.clearfix > .go-left');
  }

  get address() {
    return $(':nth-child(4) > .go-left');
  }

  get phone() {
    return $(':nth-child(5) > .go-left');
  }

  get payment() {
    return $('center > .btn-primary');
  }

  get dropDownSelect() {
    return $('#gateway_chosen > .chosen-single');
  }

  get paymentDropDownByCreditCard() {
    return $('[data-option-array-index="3"]');
  }

  get buttonPay() {
    return $('.creditcardform > :nth-child(3) > .btn');
  }

  get alertMessage() {
    return $('.alert');
  }

  async performPayByCreditCard() {
    await (await this.payment).click();
    await (await this.dropDownSelect).click();
    await (await this.paymentDropDownByCreditCard).click();
  }

  async clickPay() {
    await (await this.buttonPay).click();
  }
}

export default new InvoicePage();
