import {test,expect} from '@playwright/test';

let context;
let page;

test.beforeAll("login test" , async({browser})=>{

    context = await browser.newContext();

    page= await context.newPage();


    const userEmail = "bharat1234@gmail.com";
    const userPassword = "Bharat@123";
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link" , {name: "Log in"}).click();
    await page.getByLabel("Email").fill(userEmail);
    await page.getByLabel("Password").fill(userPassword);
    await page.getByRole("button" , {name: "Log in"}).click();
})

test("finding laptop" , async()=>{
     
    await page.locator("#small-searchterms").fill("laptop");
    await page.getByRole("button" , {name: "Search"}).click();
    const LaptopName = await page.locator('h2 a[href="/141-inch-laptop"]').textContent();
    console.log(LaptopName);


})

test("gift card", async()=>{

    await page.locator("#small-searchterms").fill("gift");
    await page.getByRole("button" , {name: "Search"}).click();
    const giftCard = await page.locator('h2 a[href="/100-physical-gift-card"]').textContent();
    console.log(giftCard);
})



test.afterAll("logout test" , async()=>{
    await page.getByRole("link" , {name: "Log out"}).click();
})