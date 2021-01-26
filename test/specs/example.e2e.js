import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import PersonalAccountPage from "../pageobjects/personalAccount.page"
import requestPageWithCredentials from '../../utils/get-credentials';
import credentials from '../../utils/get-credentials';

const expectedGreeting = 'Hi, Demo User';

describe('PHP travels platform', () => {
    before(() => {
        requestPageWithCredentials();
    });

    it('check that user can book and pay for the tour', () => {
        browser.url('/');

        browser.waitUntil(() => {
            let pageUrl = browser.getUrl();
            return pageUrl.indexOf('home') > -1
        }, 5000);
        HomePage.clickLogin();
        HomePage.clickSubMenu();
        LoginPage.loginUser(credentials.login, credentials.password);
        PersonalAccountPage.validateUserLoginIsCompleted(expectedGreeting)
    });
});