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
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
      - button "Sign In" [active] [ref=e24] [cursor=pointer]
      - link "Forgot password?" [ref=e26] [cursor=pointer]:
        - /url: "#"
      - paragraph [ref=e28]: Version 1.52
      - separator
      - link "Create Account" [ref=e30] [cursor=pointer]:
        - /url: /#
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.username = page.getByPlaceholder('Enter Your Username');
  7  |     this.password = page.getByPlaceholder('Enter Your Password');
  8  |     this.loginBtn = page.getByRole('button', { name: /sign in/i });
  9  |   }
  10 | 
  11 |   async login() {
  12 |     await this.page.goto('http://49.249.28.218:8098/');
  13 | 
  14 |     await this.username.fill('rmgyantra');
  15 |     await this.password.fill('rmgy@9999');
  16 | 
  17 |     await this.loginBtn.click();
  18 | 
  19 |     // Better wait (more reliable than body text)
> 20 |     await this.page.waitForURL(/dashboard/i);
     |                     ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  21 |   }
  22 | }
```