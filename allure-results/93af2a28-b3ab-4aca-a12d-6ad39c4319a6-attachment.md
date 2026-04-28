# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=/create.*lead/i')
Expected: visible
Error: strict mode violation: locator('text=/create.*lead/i') resolved to 2 elements:
    1) <h3>Create Lead</h3> aka getByRole('heading', { name: 'Create Lead' })
    2) <button type="submit">Create Lead</button> aka getByRole('button', { name: 'Create Lead' })

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('text=/create.*lead/i')

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
            - textbox [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]: Company*
            - textbox [ref=e53]
          - generic [ref=e54]:
            - generic [ref=e55]: Lead Source*
            - textbox [ref=e56]
          - generic [ref=e57]:
            - generic [ref=e58]: Industry*
            - textbox [ref=e59]
          - generic [ref=e60]:
            - generic [ref=e61]: "Annual Revenue:"
            - spinbutton [ref=e62]: "0"
          - generic [ref=e63]:
            - generic [ref=e64]: "Number of Employees:"
            - spinbutton [ref=e65]: "1"
          - generic [ref=e66]:
            - generic [ref=e67]: Phone*
            - textbox [ref=e68]
          - generic [ref=e69]:
            - generic [ref=e70]: "Email:"
            - textbox "Please enter a valid email address (e.g., user@example.com)" [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]: "Secondary Email:"
            - textbox [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - generic [ref=e77]: Lead Status*
            - textbox [ref=e78]
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
  6  |     this.leadsLink = page.getByRole('link', { name: 'Leads' });
  7  |   }
  8  | 
  9  |   async goToLeads() {
  10 |     // Click instead of forcing URL
  11 |     await this.leadsLink.click();
  12 | 
  13 |     // Wait for leads page (not strict URL)
  14 |     await expect(this.page.locator('body')).toContainText(/lead/i, {
  15 |       timeout: 15000,
  16 |     });
  17 |   }
  18 | 
  19 |   async openCreateForm() {
  20 |     // Use correct button (Create Lead, not Campaign)
  21 |     const createBtn = this.page
  22 |       .getByRole('button')
  23 |       .filter({ hasText: /create lead/i });
  24 | 
  25 |     await expect(createBtn).toBeVisible({ timeout: 15000 });
  26 |     await createBtn.click();
  27 | 
  28 |     // Wait for form
  29 |     await expect(
  30 |       this.page.locator('text=/create.*lead/i')
> 31 |     ).toBeVisible({ timeout: 15000 });
     |       ^ Error: expect(locator).toBeVisible() failed
  32 |   }
  33 | 
  34 |   async fillField(label, value) {
  35 |     const field = this.page
  36 |       .locator(`text=${label}`)
  37 |       .locator('..')
  38 |       .locator('input, textarea')
  39 |       .first();
  40 | 
  41 |     await expect(field).toBeVisible();
  42 |     await field.fill(value);
  43 |   }
  44 | 
  45 |   async enterLeadName(name) {
  46 |     await this.fillField('Lead Name', name);
  47 |   }
  48 | 
  49 |   async enterCompanyName(company) {
  50 |     await this.fillField('Company', company);
  51 |   }
  52 | 
  53 |   async enterLeadSource(source) {
  54 |     await this.fillField('Lead Source', source);
  55 |   }
  56 | 
  57 |   async enterIndustry(industry) {
  58 |     await this.fillField('Industry', industry);
  59 |   }
  60 | 
  61 |   async enterPhone(phone) {
  62 |     await this.fillField('Phone', phone);
  63 |   }
  64 | 
  65 |   async enterLeadStatus(status) {
  66 |     await this.fillField('Lead Status', status);
  67 |   }
  68 | 
  69 |   async selectFirstCampaign() {
  70 |     const dropdown = this.page
  71 |       .locator('text=Campaign')
  72 |       .locator('..')
  73 |       .locator('button')
  74 |       .first();
  75 | 
  76 |     await expect(dropdown).toBeVisible();
  77 |     await dropdown.click();
  78 | 
  79 |     const option = this.page.locator('text=/CAM/i').first();
  80 |     await expect(option).toBeVisible();
  81 |     await option.click();
  82 |   }
  83 | 
  84 |   async clickCreateLead() {
  85 |     const submitBtn = this.page
  86 |       .getByRole('button')
  87 |       .filter({ hasText: /create lead/i });
  88 | 
  89 |     await expect(submitBtn).toBeEnabled({ timeout: 15000 });
  90 |     await submitBtn.click();
  91 | 
  92 |     // DO NOT check URL → app is unstable
  93 |     // Instead verify result
  94 |     await expect(this.page.locator('body')).toContainText(/lead/i);
  95 |   }
  96 | }
```