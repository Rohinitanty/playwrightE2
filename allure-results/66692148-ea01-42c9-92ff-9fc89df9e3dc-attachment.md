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

Locator: getByText('Rohini')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Rohini')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - textbox [ref=e78]: New
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
      - button "Create Lead" [active] [ref=e110] [cursor=pointer]
  - generic:
    - generic:
      - generic:
        - generic:
          - generic: please select a campaign before submitting
          - button "close": ✖︎
        - generic:
          - generic: please select a campaign before submitting
          - button "close": ✖︎
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | import { CreateLeads } from './CreateLeads';
  4  | import { UpdateLead } from './UpdateLead';
  5  | 
  6  | test('Create, Search and Edit Lead Test', async ({ page }) => {
  7  | 
  8  |   await page.goto('http://49.249.28.218:8098/');
  9  | 
  10 |   // LOGIN
  11 |   const login = new LoginPage(page);
  12 |   await login.login("rmgyantra", "rmgy@9999");
  13 | 
  14 |   // CREATE
  15 |   const createLead = new CreateLeads(page);
  16 | 
  17 |   await createLead.goToLeads();
  18 |   await createLead.openCreateForm();
  19 | 
  20 |   await createLead.enterLeadName("Rohini");
  21 |   await createLead.enterCompanyName("Qspider");
  22 |   await createLead.enterLeadSource("Online");
  23 |   await createLead.enterIndustry("IT");
  24 |   await createLead.enterPhone("1010101010");
  25 |   await createLead.enterLeadStatus("New");
  26 | 
  27 |   await createLead.selectFirstCampaign();
  28 |   await createLead.clickCreateLead();
  29 | 
> 30 |   await expect(page.getByText("Rohini")).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 |   // SEARCH + EDIT
  33 |   const updateLead = new UpdateLead(page);
  34 | 
  35 |   await updateLead.goToLeads();
  36 |   await updateLead.selectLeadByName("Rohini");
  37 |   await updateLead.clickEditIconForLead("Rohini");
  38 | });
```