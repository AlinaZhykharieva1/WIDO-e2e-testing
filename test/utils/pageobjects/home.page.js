import Element from '../elements/base.element';
import Link from '../elements/link';
import Input from '../elements/input';
import DropDown from '../elements/drop.down';
import Button from '../elements/button';

class HomePage{
  get toursTab() {
    return new Link('a.tours');
  }

  get inputTour() {
    return new Input('.locationlisttours >.select2-focusser.select2-offscreen');
  }

  get tourInDropDown() {
    return new DropDown('.select2-results-dept-1 >.select2-result-label >.select2-match');
  }

  get tourType() {
    return new Element('#tourtype_chosen');
  }

  get tourTypeInDropDown() {
    return new DropDown('[data-option-array-index="4"]');
  }

  get inputForDateTour() {
    return new Input('#tours #DateTours');
  }

  get buttonForIncreaseAmountOfAdults() {
    return new Button('#tours input[name="adults"] ~ .input-group-btn-vertical > button[class*="bootstrap-touchspin-up"]');
  }

  get buttonSearchTour() {
    return new Button('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-2 > .btn');
  }

  async clickToursTab() {
    await this.toursTab.linkClick();
  }

  async searchTour(tourName, dateOfStartTour) {
    await this.inputTour.addValue(tourName);
    await this.tourInDropDown.dropDownItemClick();
    await this.tourType.elementClick();
    await this.tourTypeInDropDown.dropDownItemClick();
    await this.inputForDateTour.clearValue();
    await this.inputForDateTour.addValue(dateOfStartTour);
    await this.buttonForIncreaseAmountOfAdults.buttonClick();
    await this.buttonSearchTour.buttonClick();
  }
}

export default new HomePage();
