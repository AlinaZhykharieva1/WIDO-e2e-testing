class Element () {
    constructor(elementName, selector){
        this.element = $(selector);
        this.elementName = elementName;
    }
    
    click() {
        return this.element.click();
    }

    async getText() {
        const elementText = await this.element.getText();
        return elementText;
    }

    clearValue() {
        return this.element.clearValue();
    }

    addValue(value) {
        return this.element.addValue(value);
    }
}