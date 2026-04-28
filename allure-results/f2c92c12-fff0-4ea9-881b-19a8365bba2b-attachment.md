# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('combobox')

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
      - heading "Create Lead" [level=3] [ref=e42]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]: "Lead ID:"
            - textbox [ref=e47]: Auto Generated
          - generic [ref=e48]:
            - generic [ref=e49]: Lead Name*
            - textbox [ref=e50]: Rohini
          - generic [ref=e51]:
            - generic [ref=e52]: Company*
            - textbox [ref=e53]: Qspider
          - generic [ref=e54]:
            - generic [ref=e55]: Lead Source*
            - textbox [ref=e56]: Online
          - generic [ref=e57]:
            - generic [ref=e58]: Industry*
            - textbox [ref=e59]: IT
          - generic [ref=e60]:
            - generic [ref=e61]: "Annual Revenue:"
            - spinbutton [ref=e62]: "0"
          - generic [ref=e63]:
            - generic [ref=e64]: "Number of Employees:"
            - spinbutton [ref=e65]: "1"
          - generic [ref=e66]:
            - generic [ref=e67]: Phone*
            - textbox [ref=e68]: "1010101010"
          - generic [ref=e69]:
            - generic [ref=e70]: "Email:"
            - textbox "Please enter a valid email address (e.g., user@example.com)" [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]: "Secondary Email:"
            - textbox [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - generic [ref=e77]: Lead Status*
            - textbox [active] [ref=e78]: New
          - generic [ref=e79]:
            - generic [ref=e80]: "Rating:"
            - spinbutton [ref=e81]: "0"
          - generic [ref=e82]:
            - generic [ref=e83]: "Assigned To:"
            - textbox [ref=e84]
          - generic [ref=e85]:
            - generic [ref=e86]: "Address:"
            - textbox [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]: "City:"
            - textbox [ref=e90]
          - generic [ref=e91]:
            - generic [ref=e92]: "Country:"
            - textbox [ref=e93]
          - generic [ref=e94]:
            - generic [ref=e95]: "Postal Code:"
            - textbox [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]: "Website:"
            - textbox [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]: Campaign*
            - generic [ref=e102]:
              - textbox [ref=e103]
              - button [ref=e104] [cursor=pointer]:
                - img [ref=e105]: 
          - generic [ref=e107]:
            - generic [ref=e108]: "Description:"
            - textbox [ref=e109]
    - button "Create Lead" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class CreateLeads {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.leadsLink = page.getByRole('link', { name: 'Leads' });
  8  |     this.createBtn = page.getByRole('button', { name: 'Create Lead' });
  9  |   }
  10 | 
  11 |   async goToLeads() {
  12 |     await this.leadsLink.click();
  13 |   }
  14 | 
  15 |   async openCreateForm() {
  16 |     await this.createBtn.click();
  17 |   }
  18 | 
  19 |   // ✅ FIX: label-based DOM traversal
  20 |   async enterLeadName(name) {
  21 |     await this.page.locator('text=Lead Name*')
  22 |       .locator('..')
  23 |       .locator('input')
  24 |       .fill(name);
  25 |   }
  26 | 
  27 |   async enterCompanyName(company) {
  28 |     await this.page.locator('text=Company*')
  29 |       .locator('..')
  30 |       .locator('input')
  31 |       .fill(company);
  32 |   }
  33 | 
  34 |   async enterLeadSource(source) {
  35 |     await this.page.locator('text=Lead Source*')
  36 |       .locator('..')
  37 |       .locator('input')
  38 |       .fill(source);
  39 |   }
  40 | 
  41 |   async enterIndustry(industry) {
  42 |     await this.page.locator('text=Industry*')
  43 |       .locator('..')
  44 |       .locator('input')
  45 |       .fill(industry);
  46 |   }
  47 | 
  48 |   async enterPhone(phone) {
  49 |     await this.page.locator('text=Phone*')
  50 |       .locator('..')
  51 |       .locator('input')
  52 |       .fill(phone);
  53 |   }
  54 | 
  55 |   async enterLeadStatus(status) {
  56 |     await this.page.locator('text=Lead Status*')
  57 |       .locator('..')
  58 |       .locator('input')
  59 |       .fill(status);
  60 |   }
  61 | 
  62 |   async selectFirstCampaign() {
> 63 |     await this.page.getByRole('combobox').selectOption({ index: 1 });
     |                                           ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  64 |   }
  65 | 
  66 |   async clickCreateLead() {
  67 |     await this.page.getByRole('button', { name: 'Create Lead' }).click();
  68 |   }
  69 | }
```