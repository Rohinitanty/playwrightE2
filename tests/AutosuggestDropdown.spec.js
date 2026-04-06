import {test,expect} from '@playwright/test';
test("Auto suggest Dropdown" , async({page})=>{

    await page.goto("https://www.redbus.in/", {
        waitUntil: 'domcontentloaded',   // more stable
        timeout: 60000                  // increase timeout
    });
    await page.locator('#src').fill("Delhi");
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
     for(let option of fromCityOptions)
     {
        const value = await option.textContent();
        if(value.includes('Anand Vihar'))
        {
            await option.click();
            break;
        }
     }
})