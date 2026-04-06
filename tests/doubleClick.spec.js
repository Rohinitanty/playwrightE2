import {test , expect} from '@playwright/test';

test("double click action" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button" , {name : "Copy Text"}).dblclick();
    await page.waitForTimeout(5000);
})