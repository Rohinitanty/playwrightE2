import { test, expect } from '@playwright/test';

const loginTestData = [
  ["laura.taylor1234@example.com", "test123", "valid"],
  ["invaliduser@example.com", "test321", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
  ["", "", "invalid"],
];

for (const [email, password, validity] of loginTestData) {

  test(`data driven test using ${email}`, async ({ page }) => {

    // Navigate
    await page.goto("https://demowebshop.tricentis.com/");

    // Click login
    await page.locator(".ico-login").click();

    // Fill data
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);

    // Login
    await page.locator(".login-button").click();

    // Validation
    if (validity === "invalid") {

      await expect(page.locator(".validation-summary-errors")).toBeVisible();
      console.log("invalid user");

    } else {

      await expect(page.locator(".ico-logout")).toBeVisible();
      console.log("valid user");

      // Logout (to reset state)
      await page.locator(".ico-logout").click();
    }

  });

}