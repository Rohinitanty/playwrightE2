//* install npm install xlsx

import {test,expect} from '@playwright/test';

import fs from 'fs';

import * as XLSX from 'xlsx';

const xlsxFilePath = "testData/data.xlsx";

const content = XLSX.readFile(xlsxFilePath);

const sheet = content.SheetNames[0];

const worksheet = content.Sheets[sheet];

const loginData = XLSX.utils.sheet_to_json(worksheet);

for (let {email, password} of loginData){

    test(`data driven test using ${email}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();

    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);

    await page.locator(".login-button").click();
  });
}
