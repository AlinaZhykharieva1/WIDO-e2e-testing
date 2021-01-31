import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import PersonalAccountPage from "../pageobjects/personalAccount.page";
import DetailTourPage from "../pageobjects/detail-tour.page";
import InvoicePage from "../pageobjects/invoice.page";
import InvoicePageValidator from "../../validators/invoice-page-validator";
import requestPageWithCredentials from "../../utils/get-credentials"

const tourName = 'Big Bus Tour of Dubai';
const DateOfTourStart = '06.05.2021';
const expectedAmountOfAdults = "2";
const expectedBookingInfo = {
    firstName: 'Emma',
    address: 'R2, Avenue du Maroc',
    phone: '+3805665656',
    email: 'dre@gh.com'
}
const expectedGreeting = 'Hi, Demo User';

describe('PHP travels platform', () => {
    let credentials;
    before(async () => {
      credentials = await requestPageWithCredentials();
    });

    it('Check that user can book and pay for the tour', async () => {
        await browser.url('/');

        await browser.waitUntil(() => {
            return browser.getUrl().then((pageUrl) => {
              return pageUrl.indexOf('home') > -1
            });
          }, 5000);
        await HomePage.clickLogin();
        await LoginPage.loginUser(credentials.login, credentials.password);
        await PersonalAccountPage.validateUserLoginIsCompleted(expectedGreeting);
        await PersonalAccountPage.goToHomePage();
        await HomePage.clickToursTab();
        await HomePage.searchTour(tourName, DateOfTourStart);
        await DetailTourPage.validateAmountOfAdults(expectedAmountOfAdults);
        await DetailTourPage.choseMaximumAmountOfDays();
        await DetailTourPage.fillFormForCompleteBookingTour
        (expectedBookingInfo.firstName, expectedBookingInfo.email, expectedBookingInfo.phone,expectedBookingInfo.address);
        await InvoicePageValidator.comparingDetailsOfBooking
        (expectedBookingInfo.firstName, expectedBookingInfo.address, expectedBookingInfo.phone);
        await InvoicePage.paymentByCreditCard();
        await InvoicePage.checkingThatMessageAppearsWhenInvalidDataIsEntered();
    });
});