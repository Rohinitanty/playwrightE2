import {test,expect} from '@playwright/test';

test("files uploading" , async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('input[type="file"]').last()
  .setInputFiles("C:/Users/rohin/OneDrive/Desktop/playwright/tests/Objects_TaskM17.docx");

    await page.waitForTimeout(5000);
})