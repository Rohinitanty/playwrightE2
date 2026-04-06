import { test, expect } from '@playwright/test';
import { LoginPage } from './login';
import { HomePage } from './Homepage';
import { CartPage } from './Cart';

test('Place order flow', async ({ page }) => {

    //* Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("Rohini11", "1234");

    //* Home - Add product
    const home = new HomePage(page);
    await home.addproductTocart("Nexus 6");

    //* Go to cart
    await home.gotocart();

    //* Cart - Place order
    const cart = new CartPage(page);
    await cart.placeOrder({
        name: "Rohini",
        country: "India",
        city: "Bangalore",
        card: "123456789",
        month: "04",
        year: "2026"
    });

    //* Assertion (very important)
    await expect(page.locator("//h2[normalize-space()='Thank you for your purchase!']"))
        .toBeVisible();
});