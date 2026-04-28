import {test,expect} from '@playwright/test';
test.use({storageState: 'auth.json'});
test("login test 3" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
})