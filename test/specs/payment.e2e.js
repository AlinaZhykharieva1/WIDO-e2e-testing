import HomePage from '../utils/pageobjects/home.page';
import LoginPage from '../utils/pageobjects/login.page';
import PersonalAccountPage from '../utils/pageobjects/personal.account.page';
import DetailTourPage from '../utils/pageobjects/detail.tour.page';
import InvoicePage from '../utils/pageobjects/invoice.page';
import Header from '../utils/pageobjects/pageComponents/header';
import InvoicePageValidator from '../utils/validators/invoice.page.validator';

import requestPageWithCredentials from '../utils/helpers/get.credentials';
import dataGeneration from '../utils/helpers/date.generation';

const tourDetail = {
  tourName : 'Big Bus Tour of Dubai',
  dateOfTourStart : dataGeneration(30)
};
const bookingInfo = {
  name: 'Anna',
  address: 'R2, Avenue du Maroc',
  phone: '+3805665656',
  email: 'dre@gh.com',
  expectedGreeting : 'Hi, Demo User',
  expectedAdults : 'adults=2'
};


describe('PHP travels platform', () => {
  let credentials;
  before(async () => {
    credentials = await requestPageWithCredentials();
  });

  it('Check that user can book tour and when invalid card for payment added error message displayed',
  async () => {
    await browser.url('/');
    await Header.clickLogin();
    await LoginPage.loginUser(credentials.login, credentials.password);
    await expect(PersonalAccountPage.greeting).toHaveText(bookingInfo.expectedGreeting);
    await Header.goToHomePage();
    await HomePage.clickToursTab();
    await HomePage.searchTour(tourDetail.tourName, tourDetail.dateOfTourStart);
    await expect(browser).toHaveUrlContaining(bookingInfo.expectedAdults)
    await DetailTourPage.choseMaximumAmountOfDays();
    await DetailTourPage.fillFormForCompleteBookingTour(bookingInfo);
    await InvoicePageValidator.comparingDetailsOfBooking(bookingInfo);
    await InvoicePage.performPayByCreditCard();
    await InvoicePage.clickPay();
    await expect(await InvoicePage.alertMessage).toBeDisplayed();
  });
});
