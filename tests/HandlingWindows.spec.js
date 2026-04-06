import {test,expect} from '@playwright/test';
test('Handling windows' , async ({browser})=>{
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
    
    const pagePromise=context.waitForEvent(page);
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

})