import LoginPage from '../utils/pageobjects/login.page';

const arg = require('yargs').argv;

const { When } = require('cucumber');

When(/^I login with username and password$/, async () => {
  await LoginPage.loginUser(arg.login, arg.password);
});
