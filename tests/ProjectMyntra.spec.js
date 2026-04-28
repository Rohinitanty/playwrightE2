import {test,expect, chromium} from '@playwright/test';

test("end to end test on Myntra" , async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.myntra.com/");
    await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");

    await page.getByText("Profile").click();
    await page.getByRole('link', { name: 'login / Signup' }).click();
    await page.locator("//input[@type='tel']").fill('8249465235');
    await page.locator("input[type='checkbox']").click();
    await page.getByText("CONTINUE").click();
    await page.waitForTimeout(5000);
    await expect(page.locator('h3')).toContainText('Verify with OTP');
    await page.waitForTimeout(5000);


});