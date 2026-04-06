import {test, expect} from '@playwright/test';

test("child pages" , async({browser})=>{

     const context = await browser.newContext();

     const page = await context.newPage();

     await page.goto("https://demowebshop.tricentis.com/contactus");

     const Event = context.waitForEvent('page'); //*we are waiting for the new page in context level

     await page.locator ('a[href="http://www.youtube.com/user/nopCommerce"]').click();

     const childPage = await Event;

     await childPage.screenshot({path:"childpage.png"});

})