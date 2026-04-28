# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

# Error details

```
ReferenceError: CreateLeads is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | // import { CreateLeads } from './CreateLeads';
  4  | 
  5  | test('Create, Search and Edit Lead Test', async ({ page }) => {
  6  |   const login = new LoginPage(page);
> 7  |   const leads = new CreateLeads(page);
     |                 ^ ReferenceError: CreateLeads is not defined
  8  | 
  9  |   // Open app
  10 |   await page.goto('http://49.249.28.218:8098/');
  11 | 
  12 |   // Login using POM (better practice)
  13 |   await login.login('rmgyantra', 'rmgy@9999');
  14 | 
  15 |   // Go to Leads
  16 |   await leads.goToLeads();
  17 | 
  18 | //   // Create Lead
  19 | //   await leads.openCreateForm();
  20 | 
  21 | //   await leads.enterLeadName('RohiniTest');
  22 | //   await leads.enterCompanyName('TestCompany');
  23 | //   await leads.enterLeadSource('Online');
  24 | //   await leads.enterIndustry('IT');
  25 | //   await leads.enterPhone('9876543210');
  26 | //   await leads.enterLeadStatus('New');
  27 | 
  28 | //   await leads.selectFirstCampaign();
  29 | 
  30 | //   await leads.clickCreateLead();
  31 | });
```