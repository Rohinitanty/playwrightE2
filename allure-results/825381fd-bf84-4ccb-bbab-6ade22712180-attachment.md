# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filesUpload.spec.js >> files uploading
- Location: tests\filesUpload.spec.js:3:5

# Error details

```
Error: locator.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[type="file"]').last()

```

```
Error: page.goto: Test ended.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test("files uploading" , async({page})=>{
  4  | 
> 5  |     page.goto("https://testautomationpractice.blogspot.com/");
     |          ^ Error: page.goto: Test ended.
  6  | 
  7  |     await page.locator('input[type="file"]').last()
  8  |   .setInputFiles("C:/Users/rohin/OneDrive/Desktop/playwright/tests/Objects_TaskM17.docx");
  9  | 
  10 |     await page.waitForTimeout(5000);
  11 | })
```