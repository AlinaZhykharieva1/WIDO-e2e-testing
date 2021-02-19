import InvoicePage from '../pageobjects/invoice.page';

class InvoicePageValidator {
  async comparingDetailsOfBooking(detailsOfBooking) {
    await expect(await InvoicePage.firstName).toHaveText(detailsOfBooking.name);
    await expect(await InvoicePage.address).toHaveText(detailsOfBooking.address);
    await expect(await InvoicePage.phone).toHaveText(detailsOfBooking.phone);
  }
}

export default new InvoicePageValidator();
