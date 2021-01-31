import Page from "./page";

class HomePage extends Page {

    get accountMenu() {
        return $(':nth-child(3) > .dropdown > a');
    }

    get loginSubMenu() {
        return $('a[href*="login"]');
    }

    get toursTab() {
        return $('a.tours');
    }

    get inputTour() {
        return $('.locationlisttours >.select2-focusser.select2-offscreen');
    }

    get tourInDropDown() {
        return $('.select2-results-dept-1 >.select2-result-label >.select2-match');
    }

    get tourType() {
        return $('#tourtype_chosen');
    }

    get tourTypeInDropDown() {
        return $('[data-option-array-index="4"]');
    }

    get inputForDateTour() {
        return $('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-4 > :nth-child(1) > .gap-10 > .col-md-12 > .col-inner > .form-people-thread > .row > #airDatepickerRange-hotel > .form-group > .form-icon-left > #DateTours');
    }

    get inputForIncreaseAmountOfAdults() {
        return $('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-4 > :nth-child(1) > .gap-10 > .col-md-12 > .col-inner > .form-people-thread > .row > :nth-child(2) > .form-group > .form-icon-left > .input-group > .input-group-btn-vertical > .bootstrap-touchspin-up');
    }

    get buttonSearchTour() {
        return $('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-2 > .btn');
    }

    async clickLogin() {
        await (await this.accountMenu).click();
        await (await this.loginSubMenu).click();
    }
    
    async clickToursTab() {
        await (await this.toursTab).click();
    }

    async searchTour(tourName, dateOfStartTour) {
        await (await this.inputTour).addValue(tourName);
        await (await this.tourInDropDown).click();
        await (await this.tourType).click();
        await (await this.tourTypeInDropDown).click();
        await (await this.inputForDateTour).clearValue();
        await (await this.inputForDateTour).addValue(dateOfStartTour);
        await (await this.inputForIncreaseAmountOfAdults).click();
        await (await this.buttonSearchTour).click();
    }
}

export default new HomePage();