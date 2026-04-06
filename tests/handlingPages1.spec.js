import {test , expect} from '@playwright/test';

test('handling multiple pages' , async ({browser})=>{

    const context = await browser.newContext();

    const page1 = await context.newPage();

    const page2 = await context.newPage();

    await page1.goto("https://demowebshop.tricentis.com/login");
    await page1.screenshot({path:"screen1.png"});

    await page2.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page2.screenshot({path:"screen2.png"})

})