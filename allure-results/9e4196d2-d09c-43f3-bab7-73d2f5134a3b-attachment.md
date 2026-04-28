# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> End-to-End: Lead + Opportunity Flow
- Location: Project\NinjaCRM.spec.js:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://49.249.28.218:8098/", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.username = page.getByLabel('Username');
  7  |     this.password = page.getByLabel('Password');
  8  |     this.loginBtn = page.getByRole('button', { name: /sign in/i });
  9  |     this.leadsLink = page.getByRole('link', { name: /Leads/i });
  10 |   }
  11 | 
  12 |   async goto() {
> 13 |     await this.page.goto('http://49.249.28.218:8098/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 |   }
  15 | 
  16 |   async login(username, password) {
  17 |     await this.username.fill(username);
  18 |     await this.password.fill(password);
  19 |     await this.loginBtn.click();
  20 | 
  21 |     await expect(this.leadsLink).toBeVisible();
  22 |   }
  23 | }
```