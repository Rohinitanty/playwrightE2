import {test,expect} from '@playwright/test';

import fs from 'fs'

//*fs module --> convert the given values or data into java script object

//* create a variable to store the json file path

const jsonPath = 'testData/data.json';

//* create another variable to store the data in the given path

const loginData = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

for (let { email, password, validity } of loginData) {

  test(`data driven test using ${email}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();

    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);
    await page.locator(".login-button").click();
  });
}