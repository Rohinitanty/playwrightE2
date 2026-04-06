import { test, expect } from '@playwright/test';

test.skip("Alerts", async ({ page }) => {

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click('#alertBtn');

});

test("Alerts confirmation", async ({ page }) => {

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
  });

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click('#confirmBtn');

  await expect(page.locator('#demo')).toHaveText('You pressed OK!');

  await page.waitForTimeout(5000);

});


test("Alerts prompt", async ({ page }) => {

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect (dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('Rohini');
  });

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click('#promptBtn');

  await expect(page.locator('#demo')).toHaveText('Hello Rohini! How are you today?');

  await page.waitForTimeout(5000);

});


