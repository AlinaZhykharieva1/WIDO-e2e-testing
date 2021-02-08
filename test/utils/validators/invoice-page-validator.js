import InvoicePage from '../pageobjects/invoice.page';

class InvoicePageValidator {
  async comparingDetailsOfBooking(name, address, phone) {
    await expect(await InvoicePage.firstName).toHaveText(name);
    await expect(await InvoicePage.address).toHaveText(address);
    await expect(await InvoicePage.phone).toHaveText(phone);
  }
}

export default new InvoicePageValidator();
