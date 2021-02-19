class DetailTourPage {
  get amountOfAdults() {
    return $('#selectedAdults');
  }

  get buttonMaximumAmountOfDays() {
    return $(':nth-child(1) > :nth-child(6) > .btn ');
  }

  get inputFirstName() {
    return $('[name = \'firstname\']');
  }

  get inputPhone() {
    return $('[name =\'phone\']');
  }

  get inputEmail() {
    return $('.form-group > [name =\'email\']');
  }

  get inputAddress() {
    return $('[name =\'address\']');
  }

  get buttonSubmit() {
    return $(' .col> #ClickMyButton');
  }

  get getCookiesButton() {
    return $('.cc-btn');
  }

  // async validateAmountOfAdults(expectedAmountOfAdults) {
  //   await expect(await this.amountOfAdults).toHaveValue(expectedAmountOfAdults);
  // }

  async choseMaximumAmountOfDays() {
    await (await this.getCookiesButton).click();
    await (await this.buttonMaximumAmountOfDays).click();
  }

  async fillFormForCompleteBookingTour(bookingInfo) {
    await (await this.inputFirstName).waitForDisplayed({ timeout: 3000 });
    await (await this.inputFirstName).addValue(bookingInfo.name);
    await (await this.inputEmail).addValue(bookingInfo.email);
    await (await this.inputPhone).addValue(bookingInfo.phone);
    await (await this.inputAddress).addValue(bookingInfo.address);
    await (await this.buttonSubmit).click();
  }
}

export default new DetailTourPage();
