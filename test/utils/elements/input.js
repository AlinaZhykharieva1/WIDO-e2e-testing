import Element from "./base.element";

export default class Input extends Element {
    constructor(selector) {
        super(selector);
    }
    async clearValue() {
        return (await this.element).clearValue();
    }

    async addValue(value) {
        return (await this.element).setValue(value);
    }
}