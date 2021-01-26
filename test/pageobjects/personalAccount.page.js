import Page from "./page";


class PersonalAccountPage extends Page{
    get greeting() {
        return $('h3.text-align-left')
    }

    get headerLogo() {
        return $('div.header-logo > a')
    }


    validateUserLoginIsCompleted(expectedGreeting) {
        expect(this.greeting).toHaveText(expectedGreeting);

    }

    goToHomePage() {
        this.headerLogo.click()
    }
}

module.exports = new PersonalAccountPage();
