import HomePage from "../pageobjects/home.page";

describe('PHP travels platform', () => {

    it('should have the right title', () => {
        browser.url('/');

        browser.waitUntil(() => {
            let pageUrl = browser.getUrl();
            return pageUrl.indexOf('home') > -1
        }, 5000);
        HomePage.clickLogin();
        HomePage.clickSubMenu();
    });
});