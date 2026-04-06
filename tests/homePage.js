exports.homePage = class homePage {
    constructor(page){

        this.page = page;
        this.search = "#small-searchterms";
        this.searchButton = ".search-box-button";
        //this.addToCart='.button-2';
        this.produnctItem = '.product-item';
    }
    
    async searchItem(Item){

        await this.page.locator(this.search).fill(Item);
        await this.page.locator(this.searchButton).click();
    }

    async cart(itemName){
        await this.page.locator(this.produnctItem).filter({hasText:itemName}).getByRole("button" ,{name: "Add to cart"}).click();
    
    }

}