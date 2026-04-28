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

Expected pattern: /leads/
Received string:  "http://49.249.28.218:8098/create-campaign"
Timeout: 15000ms

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    19 × unexpected value "http://49.249.28.218:8098/create-campaign"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - navigation [ref=e6]:
    - generic [ref=e8]:
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Dashboard" [ref=e11] [cursor=pointer]:
            - /url: /dashboard-graphs
        - listitem [ref=e12]:
          - link "Campaigns" [ref=e13] [cursor=pointer]:
            - /url: /campaigns
        - listitem [ref=e14]:
          - link "Contacts" [ref=e15] [cursor=pointer]:
            - /url: /contacts
        - listitem [ref=e16]:
          - link "Leads" [ref=e17] [cursor=pointer]:
            - /url: /leads
        - listitem [ref=e18]:
          - link "Opportunities" [ref=e19] [cursor=pointer]:
            - /url: /opportunities
        - listitem [ref=e20]:
          - link "Products" [ref=e21] [cursor=pointer]:
            - /url: /products
        - listitem [ref=e22]:
          - link "Quotes" [ref=e23] [cursor=pointer]:
            - /url: /quotes
        - listitem [ref=e24]:
          - link "Purchase Order" [ref=e25] [cursor=pointer]:
            - /url: /purchase-order
        - listitem [ref=e26]:
          - link "Sales Order" [ref=e27] [cursor=pointer]:
            - /url: /sales-order
        - listitem [ref=e28]:
          - link "Invoice" [ref=e29] [cursor=pointer]:
            - /url: /invoice
        - listitem [ref=e30]:
          - listitem [ref=e33]: Admin Console
      - img [ref=e37] [cursor=pointer]: 
  - generic [ref=e40]:
    - generic [ref=e41]:
      - heading "Create Campaign" [level=3] [ref=e42]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]: "Campaign ID:"
            - textbox [ref=e47]: Auto Generated
          - generic [ref=e48]:
            - generic [ref=e49]: Campaign Name*
            - textbox [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]: "Campaign Status:"
            - textbox [ref=e53]
          - generic [ref=e54]:
            - generic [ref=e55]: Target Size*
            - spinbutton [ref=e56]: "0"
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]: "Expected Close Date:"
            - textbox [ref=e60]
          - generic [ref=e61]:
            - generic [ref=e62]: "Target Audience:"
            - textbox [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]: "Description:"
            - textbox [ref=e66]
    - button "Create Campaign" [ref=e67] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | export class CreateLeads {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     this.leadsLink = page.getByRole('link', { name: 'Leads' });
  8   |   }
  9   | 
  10  |   async goToLeads() {
  11  |     await this.leadsLink.click();
  12  | 
  13  |     // BEST PRACTICE: wait for URL first
  14  |     await expect(this.page).toHaveURL(/leads/);
  15  | 
  16  |     // ensure page actually changed
  17  |     await expect(
  18  |       this.page.getByRole('heading', { name: /Leads/i })
  19  |     ).toBeVisible({ timeout: 15000 });
  20  |   }
  21  | 
  22  |   async openCreateForm() {
  23  |     // safer locator (based on actual DOM patterns)
  24  |     const createBtn = this.page.getByRole('button', {
  25  |       name: /create/i
  26  |     });
  27  | 
  28  |     await expect(createBtn.first()).toBeVisible({ timeout: 20000 });
  29  |     await createBtn.first().click();
  30  | 
  31  |     // wait for form instead of button
  32  |     await expect(
  33  |       this.page.getByRole('heading', { name: /create/i })
  34  |     ).toBeVisible({ timeout: 15000 });
  35  |   }
  36  | 
  37  |   async fillField(label, value) {
  38  |     const field = this.page
  39  |       .locator('label', { hasText: label })
  40  |       .locator('..')
  41  |       .locator('input, textarea')
  42  |       .first();
  43  | 
  44  |     await expect(field).toBeVisible();
  45  |     await field.fill(value);
  46  |   }
  47  | 
  48  |   async enterLeadName(name) {
  49  |     await this.fillField('Lead Name', name);
  50  |   }
  51  | 
  52  |   async enterCompanyName(company) {
  53  |     await this.fillField('Company', company);
  54  |   }
  55  | 
  56  |   async enterLeadSource(source) {
  57  |     await this.fillField('Lead Source', source);
  58  |   }
  59  | 
  60  |   async enterIndustry(industry) {
  61  |     await this.fillField('Industry', industry);
  62  |   }
  63  | 
  64  |   async enterPhone(phone) {
  65  |     await this.fillField('Phone', phone);
  66  |   }
  67  | 
  68  |   async enterLeadStatus(status) {
  69  |     await this.fillField('Lead Status', status);
  70  |   }
  71  | 
  72  |   async selectFirstCampaign() {
  73  |     const campaignBtn = this.page
  74  |       .locator('text=/Campaign/i')
  75  |       .locator('..')
  76  |       .locator('button')
  77  |       .first();
  78  | 
  79  |     await expect(campaignBtn).toBeVisible();
  80  |     await campaignBtn.click();
  81  | 
  82  |     const option = this.page.locator('text=/CAM/i').first();
  83  |     await expect(option).toBeVisible();
  84  |     await option.click();
  85  |   }
  86  | 
  87  |   async clickCreateLead() {
  88  |     const submitBtn = this.page.getByRole('button', {
  89  |       name: /create/i
  90  |     });
  91  | 
  92  |     await expect(submitBtn.first()).toBeEnabled({ timeout: 20000 });
  93  |     await submitBtn.first().click();
  94  | 
  95  |     // BEST: wait for navigation OR table update
> 96  |     await expect(this.page).toHaveURL(/leads/, {
      |                             ^ Error: expect(page).toHaveURL(expected) failed
  97  |       timeout: 15000
  98  |     });
  99  |   }
  100 | }
```