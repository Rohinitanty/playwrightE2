exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;

        this.placeOrderBtn = "//button[normalize-space()='Place Order']";
        this.nameInput = "//input[@id='name']";
        this.countryInput = "//input[@id='country']";
        this.cityInput = "//input[@id='city']";
        this.cardInput = "//input[@id='card']";
        this.monthInput = "//input[@id='month']";
        this.yearInput = "//input[@id='year']";
        this.purchaseBtn = "//button[normalize-space()='Purchase']";
    }

    async placeOrder(details) {
        await this.page.locator(this.placeOrderBtn).click();

        await this.page.locator(this.nameInput).fill(details.name);
        await this.page.locator(this.countryInput).fill(details.country);
        await this.page.locator(this.cityInput).fill(details.city);
        await this.page.locator(this.cardInput).fill(details.card);
        await this.page.locator(this.monthInput).fill(details.month);
        await this.page.locator(this.yearInput).fill(details.year);

        await this.page.locator(this.purchaseBtn).click();
    }
}