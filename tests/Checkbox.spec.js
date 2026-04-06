import{test , expect} from '@playwright/test';

test ("Checkbox" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='sunday' and @type='checkbox']").click();

    await expect (page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();

    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

     const CheckboxLocators = [
        "//input[@id='sunday']",
        "//input[@id='monday']",
        "//input[@id='tuesday']"
    ];

    for (const locator of CheckboxLocators) {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    for (const locator of CheckboxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);
});