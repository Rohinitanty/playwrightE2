import{test,expect} from '@playwright/test';

const products = ["laptop","gift card","book","computer"];

for(let item of products){



test (`data driven test using array for the products ${item}` , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.waitForLoadState("networkidle");
    await page.locator("#Email").fill("bharat1234@gmail.com");
    await page.locator("#Password").fill("Bharat@123");
    await page.locator(".login-button").click();

    await page.locator("#small-searchterms").fill(item);
    await page.locator(".search-box-button").click();

    const productName = await page.locator("h2 a").first().textContent();
    console.log(productName);
})

}