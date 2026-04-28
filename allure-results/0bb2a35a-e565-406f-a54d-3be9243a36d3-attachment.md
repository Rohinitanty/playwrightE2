# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

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
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | import { CreateLeads } from './CreateLeads';
  4  | 
  5  | test('Create, Search and Edit Lead Test', async ({ page }) => {
  6  |   const login = new LoginPage(page);
  7  |   const leads = new CreateLeads(page);
  8  | 
  9  |   // Open app + login
> 10 |   await page.goto('http://49.249.28.218:8098/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 |   await login.login('rmgyantra', 'rmgy@9999');
  12 | 
  13 |   // Create Lead
  14 |   await leads.createLead();
  15 | });
```