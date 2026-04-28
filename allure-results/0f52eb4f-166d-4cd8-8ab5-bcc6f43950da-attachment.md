# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('div:has-text("Campaign") button') resolved to 3 elements:
    1) <button type="button" aria-expanded="false" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">…</button> aka getByLabel('Toggle navigation')
    2) <button type="button">…</button> aka getByRole('button').filter({ hasText: /^$/ })
    3) <button type="submit">Create Lead</button> aka getByRole('button', { name: 'Create Lead' })

Call log:
  - waiting for locator('div:has-text("Campaign") button')

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
            - textbox [ref=e56]: Testing
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
  1  | export class CreateLeads {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.leadNameInput = "input[name='name']";
  6  |     this.companyName = "input[name='company']";
  7  |     this.leadSource = "input[name='leadSource']";
  8  |     this.industryName = "input[name='industry']";
  9  |     this.phoneNumber = "input[name='phone']";
  10 |     this.leadStatus = "input[name='leadStatus']";
  11 |   }
  12 | 
  13 |   async createLead() {
  14 |     await this.page.getByRole('link', { name: /Leads/i }).click();
  15 |     await this.page.getByRole('button', { name: /Create Lead/i }).click();
  16 | 
  17 |     // wait for form to load
  18 |     await this.page.locator(this.leadNameInput).waitFor();
  19 |   }
  20 | 
  21 |   async enterLeadName(name) {
  22 |     await this.page.locator(this.leadNameInput).fill(name);
  23 |   }
  24 | 
  25 |   async enterCompanyName(name) {
  26 |     await this.page.locator(this.companyName).fill(name);
  27 |   }
  28 | 
  29 |   async enterLoadSource(name) {
  30 |     await this.page.locator(this.leadSource).fill(name);
  31 |   }
  32 | 
  33 |   async enterIndustryName(name) {
  34 |     await this.page.locator(this.industryName).fill(name);
  35 |   }
  36 | 
  37 |   async enterPhoneNumber(number) {
  38 |     await this.page.locator(this.phoneNumber).fill(number);
  39 |   }
  40 | 
  41 |   async enterLeadStatus(status) {
  42 |     await this.page.locator(this.leadStatus).fill(status);
  43 |   }
  44 | 
  45 |   // ✅ Campaign popup handling (FIXED)
  46 |   async enterCampaign() {
  47 |     const [popup] = await Promise.all([
  48 |       this.page.waitForEvent('popup'),
> 49 |       this.page.locator('div:has-text("Campaign") button').click()
     |                                                            ^ Error: locator.click: Error: strict mode violation: locator('div:has-text("Campaign") button') resolved to 3 elements:
  50 |     ]);
  51 | 
  52 |     await popup.waitForLoadState();
  53 | 
  54 |     // click first Select button
  55 |     await popup.getByRole('button', { name: 'Select' }).first().click();
  56 | 
  57 |     await popup.close();
  58 |   }
  59 | }
```