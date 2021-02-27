import Header from '../utils/pageobjects/pageComponents/header';

const { When, Then } = require('cucumber');

When(/^I go to login page$/, async () => {
  await Header.clickLogin();
});

Then(/^I click to Logo$/,async () => {
  await Header.goToHomePage();
});
