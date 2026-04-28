# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProjectMyntra.spec.js >> end to end test on Myntra
- Location: tests\ProjectMyntra.spec.js:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h3')
Expected substring: "Verify with OTP"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h3')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - img
  - generic [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - generic [ref=e11] [cursor=pointer]: MEN
        - generic [ref=e12] [cursor=pointer]: WOMEN
        - generic [ref=e13] [cursor=pointer]: KIDS
        - generic [ref=e14] [cursor=pointer]: HOME LIVING
        - generic [ref=e15] [cursor=pointer]: STUDIO
      - generic [ref=e16]:
        - link "Wishlist":
          - /url: /wishlist
          - generic [ref=e18] [cursor=pointer]: Wishlist
        - link "Bag":
          - /url: /checkout/cart
          - generic [ref=e20] [cursor=pointer]: Bag
      - textbox "Search for products, brands and more" [ref=e22]
    - generic [ref=e28]:
      - generic [ref=e34]:
        - generic [ref=e35]: Login or Signup
        - generic [ref=e36]:
          - generic [ref=e37]:
            - textbox [ref=e38]: "8249465235"
            - generic: +91|
          - generic [ref=e39]:
            - checkbox [checked] [ref=e40]
            - generic [ref=e41]:
              - text: By continuing, I agree to the
              - link "Terms of Use" [ref=e42] [cursor=pointer]:
                - /url: /termsofuse
              - text: "&"
              - link "Privacy Policy" [ref=e43] [cursor=pointer]:
                - /url: /privacypolicy
              - text: and I am above 18 years old.
          - generic [ref=e44] [cursor=pointer]: CONTINUE
        - generic [ref=e45]: Have trouble logging in? Get help
      - text: "|||| |||||||||| ||||"
  - generic [ref=e47]:
    - iframe [ref=e49]:
      - main [ref=f14e2]:
        - generic [ref=f14e3]: Processing your request. If this page doesn't refresh automatically, resubmit your request.
    - iframe [ref=e51]:
      - main [ref=f15e2]:
        - generic [ref=f15e5]: "22"
        - generic [ref=f15e6]:
          - paragraph [ref=f15e8]: Powered and protected by
          - img "Akamai" [ref=f15e10]
          - link "Privacy" [ref=f15e12] [cursor=pointer]:
            - /url: https://www.akamai.com/privacy
  - iframe [ref=e52]:
    - generic [ref=f16e3] [cursor=pointer]:
      - generic [ref=f16e5]:
        - img [ref=f16e8]
        - generic [ref=f16e11]: myntra.com wants to start sending you push notifications. Click Allow to subscribe.
      - generic [ref=f16e12]:
        - button "I'll do this later" [ref=f16e13]
        - button "Allow" [ref=f16e14]
```

# Test source

```ts
  1  | import {test,expect, chromium} from '@playwright/test';
  2  | 
  3  | test("end to end test on Myntra" , async({browser})=>{
  4  | 
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  | 
  8  |     await page.goto("https://www.myntra.com/");
  9  |     await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
  10 | 
  11 |     await page.getByText("Profile").click();
  12 |     await page.getByRole('link', { name: 'login / Signup' }).click();
  13 |     await page.locator("//input[@type='tel']").fill('8249465235');
  14 |     await page.locator("input[type='checkbox']").click();
  15 |     await page.getByText("CONTINUE").click();
  16 |     await page.waitForTimeout(5000);
> 17 |     await expect(page.locator('h3')).toContainText('Verify with OTP');
     |                                      ^ Error: expect(locator).toContainText(expected) failed
  18 |     await page.waitForTimeout(5000);
  19 | 
  20 | 
  21 | });
```