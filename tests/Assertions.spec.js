import {test , expect} from '@playwright/test';

test ('Assertions' , async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    await expect (page).toHaveURL('https://demo.nopcommerce.com/register');
    
    await expect (page).toHaveTitle('nopCommerce demo store. Register');
    
    const logoElement = await page.locator('.header-logo');

    await expect (logoElement).toBeVisible();

    const Searchboxcheck = await page.locator('#small-searchterms');

    await expect (Searchboxcheck) . toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male');

    await maleRadioButton.click();

    await expect (maleRadioButton).toBeChecked();

    const newsLetterchecked = await page.locator('#NewsLetterSubscriptions_0__IsActive');

    await expect (newsLetterchecked).toBeChecked();

    const regButton = await page. locator ('#register-button');

    await expect(regButton).toHaveAttribute('type' , 'submit');

    await expect (await page.locator('.page-title h1')).toHaveText('Register');

    await expect (await page.locator('.page-title h1')).toContainText('Regis');

    const expectValue = await page.locator('#Email');

    await expectValue.fill('test@demo.com');

    await expect(expectValue).toHaveValue('test@demo.com');

    
})

    



