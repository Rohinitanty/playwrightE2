import {test} from '@playwright/test';
test("keyboard actions" , async({page})=>{

    await page.goto("https://gotranscript.com/text-compare");
    await page.getByPlaceholder("Paste one version of the text here.").fill("this is a playwright class");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(5000);
})