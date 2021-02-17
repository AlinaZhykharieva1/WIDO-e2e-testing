import HomePage from '../utils/pageobjects/home.page';
import LoginPage from '../utils/pageobjects/login.page';
import PersonalAccountPage from '../utils/pageobjects/personalAccount.page';
import DetailTourPage from '../utils/pageobjects/detail-tour.page';
import InvoicePage from '../utils/pageobjects/invoice.page';
import Header from '../utils/pageobjects/header';
import InvoicePageValidator from '../utils/validators/invoice-page-validator';
import requestPageWithCredentials from '../utils/helpers/get-credentials';
import waitOfRedirect from '../utils/waiters/wait-of-redirect';

const waitingPartOfUrl = 'home';
const tourName = 'Big Bus Tour of Dubai';
const DateOfTourStart = '06.05.2021';
const expectedAmountOfAdults = '2';
const expectedBookingInfo = {
  firstName: 'Anna',
  address: 'R2, Avenue du Maroc',
  phone: '+3805665656',
  email: 'dre@gh.com',
};
const expectedGreeting = 'Hi, Demo User';

describe('PHP travels platform', () => {
  let credentials;
  before(async () => {
    credentials = await requestPageWithCredentials();
  });

  it('Check that user can book tour and when invalid card for payment added error message displayed', async () => {
    await browser.url('/');
    await waitOfRedirect(waitingPartOfUrl);
    await Header.clickLogin();
    await LoginPage.loginUser(credentials.login, credentials.password);
    await PersonalAccountPage.validateUserLoginIsCompleted(expectedGreeting);
    await Header.goToHomePage();
    await HomePage.clickToursTab();
    await HomePage.searchTour(tourName, DateOfTourStart);
    await DetailTourPage.validateAmountOfAdults(expectedAmountOfAdults);
    await DetailTourPage.choseMaximumAmountOfDays();
    await DetailTourPage
      .fillFormForCompleteBookingTour(expectedBookingInfo.firstName, expectedBookingInfo.email,
        expectedBookingInfo.phone, expectedBookingInfo.address);
    await InvoicePageValidator
      .comparingDetailsOfBooking(expectedBookingInfo.firstName,
        expectedBookingInfo.address, expectedBookingInfo.phone);
    await InvoicePage.paymentByCreditCard();
    await InvoicePage.checkingThatMessageAppearsWhenInvalidDataIsEntered();
  });
});
