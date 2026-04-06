import {test, expect} from "@playwright/test" ;

test("end to end using spc locators" , async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link" , {name : "Log in"}).click();
    await page.getByLabel("Email:").fill("rohinitanty@gmail.com");
    await page.getByLabel("Password:").fill("Rohini@123");
    await page.getByRole("button" , {name: "Log in"}).click();
    await page.getByRole("link", {name : 'Books'}).first().click() ;
    await page.locator("#products-orderby").selectOption("Price: High to Low");
    await page.locator("#products-viewmode").selectOption("List");
    const products = await page.locator(".product-item");
    await products.filter({hasText :"Health Book"}).getByRole("button",{name : 'Add to cart'}).click();
    const message = await page.locator(".content");
    await expect(message).toContainText("The product has been added to your");
    await page.waitForTimeout(5000);
})

