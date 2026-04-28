import { test } from '@playwright/test';

test('Print all Community links + Stack Overflow', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  // Community section links
  const links = page.locator(
    'xpath=//*[@id="__docusaurus"]/footer//div[text()="Community"]/following-sibling::div//a'
  );

  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);

    const text = (await link.textContent())?.trim();
    const href = await link.getAttribute('href');

    // Print all links
    console.log(`Name: ${text} | URL: ${href}`);

    // Print Stack Overflow separately
    if (text?.includes('Stack Overflow')) {
      console.log('👉 Stack Overflow link:', href);
    }
  }
});