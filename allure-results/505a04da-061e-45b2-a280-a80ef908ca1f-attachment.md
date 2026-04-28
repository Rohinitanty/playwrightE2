# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProjectNinjaCRM\NinjaCRM.spec.js >> Test1
- Location: tests\ProjectNinjaCRM\NinjaCRM.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Leads' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Leads' })

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e7]:
    - heading "NINZA CRM" [level=1] [ref=e8]
    - paragraph [ref=e9]: Manage all your customer relationships seamlessly with NINZA CRM.
    - img "Inventory Management" [ref=e10]
    - generic [ref=e11]: Effortless Control, Maximum Impact|
  - generic [ref=e15]:
    - heading "Sign In" [level=2] [ref=e16]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: Username
        - textbox "Username" [ref=e20]:
          - /placeholder: Enter Your Username
          - text: rmgyantra
      - generic [ref=e21]:
        - generic [ref=e22]: Password
        - textbox "Password" [ref=e23]:
          - /placeholder: Enter Your Password
          - text: rmgy@9999
      - button "Sign In" [ref=e24] [cursor=pointer]
      - link "Forgot password?" [ref=e26]:
        - /url: "#"
      - paragraph [ref=e28]: Version 1.52
      - separator
      - link "Create Account" [ref=e30] [cursor=pointer]:
        - /url: /#
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from './login';
  3  | import { CreateLeads } from './CreateLeads';
  4  | 
  5  | test('Test1', async ({ page }) => {
  6  | 
  7  |     const login = new LoginPage(page);
  8  | 
  9  |     await login.gotoLoginPage();
  10 |     await login.login("rmgyantra", "rmgy@9999");
  11 | 
  12 |     
> 13 |     await expect(page.getByRole('link', { name: 'Leads' })).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  14 | 
  15 |     const leadsPage = new CreateLeads(page);
  16 |     await leadsPage.goToLeads();
  17 | });
```