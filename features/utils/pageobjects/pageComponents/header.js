import Link from '../../elements/link';

class Header {
  get accountMenu() {
    return new Link(':nth-child(3) > .dropdown > a');
  }

  get loginSubMenu() {
    return new Link('a[href*="login"]');
  }

  get headerLogo() {
    return new Link('div.header-logo > a');
  }

  async clickLogin() {
    await this.accountMenu.linkClick();
    await this.loginSubMenu.linkClick();
  }

  async goToHomePage() {
    await this.headerLogo.linkClick();
  }
}

export default new Header();
