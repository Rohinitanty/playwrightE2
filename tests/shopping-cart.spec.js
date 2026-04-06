exports.cartPage = class cartPage {
    constructor(page){
        this.page = page;
        this.rName = '.recipient-name';
        this.rMail = '.recipient-email';   
        this.addToCart = '#add-to-cart-button-1';
    }

    async addToCartTest(repName , repEmail) {

        await this.page.locator(this.rName).fill(repName);
        await this.page.locator(this.rMail).fill(repEmail);
        await this.page.locator(this.addToCart).click();
        
    }
}