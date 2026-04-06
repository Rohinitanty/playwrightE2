//* built in application alerts

import {test , expect} from '@playwright/test';

 test("alerts" , async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.getByLabel("User").last().click();

    await page.getByRole("button" , {name: "Okay"}).click();

    await page.waitForTimeout(10000);

    

 })

