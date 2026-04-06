import {test,expect} from '@playwright/test';

test("page screenshot" , async ({page})=>{
  await page.goto("https://www.demoblaze.com/");
  await page.screenshot({path:'homePage.png'})
})

test.only("Full page screenshot" , async ({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path:'fullPage.png',fullPage:true});
})

test("Element screenshot" , async ({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator(".card-img-top img-fluid").screenshot({path:'elementPage.png'});
})