import {test , expect} from '@playwright/test' ;
test ("multi selects" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel("Colors:").selectOption(["Red" , "White" , "Blue"]);
    await page.waitForTimeout(5000);
})