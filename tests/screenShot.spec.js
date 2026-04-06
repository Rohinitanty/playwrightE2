import {test , expect} from '@playwright/test';

test("screenShot1" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //*half page screen shot
    await page.screenshot({path : "image1.png"});
})


test("screenShot2" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //*full page screen shot
    await page.screenshot({fullPage:true , path : "image2.png"});
})

test("screenshot3" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //*particular element screen shot

    await page.locator(".header-inner").screenshot({path : "image3.png"})
})