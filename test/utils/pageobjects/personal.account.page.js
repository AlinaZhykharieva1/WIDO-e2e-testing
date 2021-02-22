import Element from '../elements/base.element';

class PersonalAccountPage {
  get greeting() {
    return new Element('h3.text-align-left');
  }
}

export default new PersonalAccountPage();
