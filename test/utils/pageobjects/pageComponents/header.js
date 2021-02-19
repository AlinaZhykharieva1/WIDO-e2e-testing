class Header {
    get accountMenu() {
        return $(':nth-child(3) > .dropdown > a');
    }

    get loginSubMenu() {
        return $('a[href*="login"]');
    }


    get headerLogo() {
        return $('div.header-logo > a');
    }

    async clickLogin() {
        await (await this.accountMenu).click();
        await (await this.loginSubMenu).click();
    }

    async goToHomePage() {
        await (await this.headerLogo).click();
    }
}

export default new Header();