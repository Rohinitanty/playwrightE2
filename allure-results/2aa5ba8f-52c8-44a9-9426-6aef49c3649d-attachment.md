# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard|leads/
Received string:  "http://49.249.28.218:8098/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "http://49.249.28.218:8098/"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e7]:
    - heading "NINZA CRM" [level=1] [ref=e8]
    - paragraph [ref=e9]: Manage all your customer relationships seamlessly with NINZA CRM.
    - img "Inventory Management" [ref=e10]
    - generic [ref=e11]: Effortless Control, Maximum Impact
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
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.username = page.getByPlaceholder('Enter Your Username');
  8  |     this.password = page.getByPlaceholder('Enter Your Password');
  9  |     this.loginBtn = page.getByRole('button', { name: 'Sign In' });
  10 |   }
  11 | 
  12 |   async login(user, pass) {
  13 |     await this.username.fill(user);
  14 |     await this.password.fill(pass);
  15 | 
  16 |     await this.loginBtn.click();
  17 | 
  18 |     // wait for dashboard navigation
> 19 |     await expect(this.page).toHaveURL(/dashboard|leads/);
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  20 |   }
  21 | }
```