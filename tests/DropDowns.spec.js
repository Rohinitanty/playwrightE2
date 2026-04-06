import {test, expect} from '@playwright/test';

test("Drop Downs" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#country').selectOption('India');
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);
})