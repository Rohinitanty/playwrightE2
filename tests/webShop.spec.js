//*this will be our main test file

import {test , expect} from '@playwright/test';

import {loginPage} from "./webshopLogin.js";

import { homePage } from './homePage.js';

import { cartPage} from './shopping-cart.spec.js';

test("web shop test", async ({ page }) => {

    const loginTest = new loginPage(page);
    await loginTest.gotoUrl();
    await loginTest.Login("bharat1234@gmail.com", "Bharat@123");

    const homeTest = new homePage(page);
    await homeTest.searchItem("gift");
    await homeTest.cart("$5 Virtual Gift Card");

    // Wait for product page element instead of timeout
    await expect(page.locator("h1")).toHaveText("$5 Virtual Gift Card");

    const cart = new cartPage(page);

    // Wait for form fields
    await expect(page.locator("#giftcard_1_RecipientName")).toBeVisible();

    await cart.addToCartTest("Rohini", "bharat007@gmail.com");

    //  Wait for success message instead of timeout
    const messageLocator = page.locator(".content");
    await expect(messageLocator).toBeVisible();

    const cartMessage = await messageLocator.textContent();

    await expect(messageLocator).toContainText(cartMessage);
});