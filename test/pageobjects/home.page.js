import Page from "./page";

class HomePage extends Page{
    
    get accountMenu() {
        return $(':nth-child(3) > .dropdown > a')
    }

    get loginSubMenu() {
        return $('a[href*="login"]');
    }

    get toursTab() {
        return $('a.tours');
    }

    get inputTour() {
        return $('#s2id_autogen22');
    }

    get tourInDropDown() {
        return $('.select2-results-dept-1 > .select2-result-label');
    }

    get tourType() {
        return $('#tourtype_chosen ');
    }

    get tourTypeInDropDown() {
        return $('[data-option-array-index="4"]');
    }

    get inputForDateTour() {
        return $('.form-icon-left > #DateTours');
    }

    get inputForIncreaseAmountOfAdults() {
        return $('.bootstrap-touchspin-up');
    }

    get buttonSearchTour() {
        return $('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-2 > .btn');
    }
     
    clickLogin() {
       this.accountMenu.click();
    }

    clickSubMenu() {
        this.loginSubMenu.click();
    }

    clickToursTab() {
        this.toursTab.click();
    }

    searchTour(tourName, dateOfStartTour) {
        this.inputTour.type(tourName).click({force: true});
        this.tourInDropDown.click();
        this.tourType.click();
        this.tourTypeInDropDown.click();
        this.inputForDateTour.eq(2).clear();
        this.inputForDateTour.eq(2).type(dateOfStartTour);
        this.inputForIncreaseAmountOfAdults.eq(7).click();
        this.buttonSearchTour.click();
    }
}

export default new HomePage();

