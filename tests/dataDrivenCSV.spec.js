//*first install the csv - parse so that you can read the csv file
//* npm install csv-parse

import {test,expect} from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

//*step1
//* hold on to the path of the csv file

const csvPath = "testData/data.csv";

//*step2
//*store the data in the given file
const fileContent = fs.readFileSync(csvPath,'utf-8');

//*step3
//* store only the required data and remove empty lines

const records = parse(fileContent ,
    {
        columns : true,
        skip_empty_lines :true,
    }
)

for (let data of records){

    test(`data driven test using ${data.email}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(data.email);
    await page.locator("#Password").fill(data.password);
    await page.locator(".login-button").click();
    })
}
