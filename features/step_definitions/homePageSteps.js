import HomePage from '../utils/pageobjects/home.page';

const { Given, When, Then } = require('cucumber');

const { expect } = require('chai');

Given(/^I am on the home page$/, async () => {
  await browser.url('/');
});
