exports.HomePage = class HomePage {

    constructor(page){
        this.page = page;
        this.product = "//a[normalize-space()='Nexus 6']";
        this.AddtoCart = "//a[normalize-space()='Add to cart']";
        this.cart = "//a[@id='cartur']";
    }

    async addproductTocart(productName){

        // handle dialog BEFORE clicking
        this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        await this.page.locator(this.product).click();
        await this.page.getByText('Add to cart').click();
    }

    async gotocart(){
        await this.page.locator(this.cart).click();
    }
}