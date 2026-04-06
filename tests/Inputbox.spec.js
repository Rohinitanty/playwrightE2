import {test, expect} from '@playwright/test';

test("Input Box" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();
    await page.fill("//input[@id='name']" , "John");
    await page.waitForTimeout(5000);

})