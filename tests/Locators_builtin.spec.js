import {test, expect} from '@playwright/test';

test('Locators builtin' , async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole('button' , {name: 'Login'}).click();

    await page.waitForTimeout(8000);

    await expect (await page.getByText('Products')).toBeVisible();

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await page.locator('.shopping_cart_link').click();

    await expect (await page.getByText('Your Cart')).toBeVisible();

    await page.getByRole('button' , {name: "Checkout"}).click();

    await page.getByPlaceholder("First Name").fill('Rohini');

    await page.getByPlaceholder("Last Name").fill('Tanty');

    await page.getByPlaceholder("Zip/Postal Code").fill('769005');

    await page.getByRole('button' , {name: "Continue"}).click();

    await expect(await page.getByText('Checkout: Overview')).toBeVisible();

    await page.getByRole('button' , {name: "Finish"}).click();

    await expect(await page.getByText('Thank you for your order!')).toBeVisible();
})