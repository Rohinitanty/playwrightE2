# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Leads' })

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
  3  | export class CreateLeads {
  4  | 
  5  |     constructor(page){
  6  |         this.page = page;
  7  | 
  8  |         this.leadsLink = page.getByRole("link", { name: "Leads" });
  9  |         this.createLeadBtn = page.getByRole("button", { name: "Create Lead" });
  10 | 
  11 |         this.leadNameInput = page.locator("input[name='name']");
  12 |         this.companyName = page.locator("input[name='company']");
  13 |         this.leadSourceName = page.locator("input[name='leadSource']");
  14 |         this.industryName = page.locator("input[name='industry']");
  15 |         this.phoneNumber = page.locator("input[name='phone']");
  16 |         this.leadStatus = page.locator("input[name='leadStatus']");
  17 | 
  18 |         // Campaign (+) button
  19 |         this.campaignPlusBtn = page.locator("div.form-group button[type='button']");
  20 |     }
  21 | 
  22 |     async goToLeads() {
> 23 |         await this.leadsLink.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |         await this.createLeadBtn.click();
  25 |     }
  26 | 
  27 |     async enterLeadName(name) {
  28 |         await expect(this.leadNameInput).toBeVisible();
  29 |         await this.leadNameInput.fill(name);
  30 |     }
  31 | 
  32 |     async enterCompanyName(name){
  33 |         await expect(this.companyName).toBeVisible();
  34 |         await this.companyName.fill(name);
  35 |     }
  36 | 
  37 |     // Campaign selection (popup handling)
  38 |     async selectFirstCampaign() {
  39 | 
  40 |         const [popup] = await Promise.all([
  41 |             this.page.waitForEvent('popup'),
  42 |             this.campaignPlusBtn.click()
  43 |         ]);
  44 | 
  45 |         await popup.waitForLoadState();
  46 | 
  47 |         await popup.getByRole('button', { name: 'Select' }).first().click();
  48 |     }
  49 | }
```