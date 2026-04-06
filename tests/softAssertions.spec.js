import {test,expect} from '@playwright/test';

test("soft assertions" , async ({page})=>{
    
    await page.goto("https://demoblaze.com/"); 

    //*Hard Assertions

    // await expect(page).toHaveTitle("STORE");
    // await expect(page).toHaveURL("https://demoblaze.com/");
    // await expect(page.locator(".navbar-brand")).toBeVisible();
    
    await expect.soft(page).toHaveTitle("STORE");
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page.locator(".navbar-brand")).toBeVisible();

})