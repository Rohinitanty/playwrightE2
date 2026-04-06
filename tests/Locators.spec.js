import {test , expect} from '@playwright/test';

test('Locators' , async({page})=>{

    await page.goto ("https://demoblaze.com/");
    waitUntil: "domcontentloaded",
    
    // click on login button

    await page.click('id=login2');

    //provide user name - CSS
    await page.fill('#loginusername', 'Rohini');

    //Provide password - CSS
    await page.fill('#loginpassword' , 'test@123');

    //Click on login button - X path
    await page.click("//button[normalize-space()='Log in']");

    //verify presence of close - Xpath
    const closeLink = await page.locator("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']");
    await expect(closeLink).toBeVisible();

    await page.close();

})