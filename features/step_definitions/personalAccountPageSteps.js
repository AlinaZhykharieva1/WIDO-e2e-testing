import PersonalAccountPage from '../utils/pageobjects/personal.account.page';

const { Then } = require('cucumber');

Then(/^I am on personal account page have greeting (.*)$/, async (expectedGreeting) => {
  await expect(PersonalAccountPage.greeting).toHaveText(expectedGreeting);
});
