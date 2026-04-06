import {test, expect} from '@playwright/test';
test("multi select dropdown" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.selectOption("#colors" , ['Red' , 'Blue' , 'Yellow']);
    await page.waitForTimeout(5000);
    const checkCount = await page.locator("#colors option");
    await expect(checkCount).toHaveCount(5);
    
    const content = await page.locator('#colors').textContent();
    await expect(content.includes("Blue")).toBeTruthy();

    await page.waitForTimeout(5000);

})