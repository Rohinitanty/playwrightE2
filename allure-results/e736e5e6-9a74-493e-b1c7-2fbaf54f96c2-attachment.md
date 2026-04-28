# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
ReferenceError: CreateLeads is not defined
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | 
  4  | 
  5  | 
  6  | test('Create, Search and Edit Lead Test', async ({ page }) => {
> 7  |   const leads = new CreateLeads(page);
     |                 ^ ReferenceError: CreateLeads is not defined
  8  | 
  9  |   // Open app
  10 |   await page.goto('http://49.249.28.218:8098/');
  11 | 
  12 |   // Login (adjust if needed)
  13 |   await page.getByPlaceholder('Enter Username').fill('rmgyantra');
  14 |   await page.getByPlaceholder('Enter Password').fill('rmgy@9999');
  15 |   await page.getByRole('button', { name: 'Sign In' }).click();
  16 | 
  17 |   // Go to Leads
  18 |   await leads.goToLeads();
  19 | 
  20 |   // Create Lead
  21 |   await leads.openCreateForm();
  22 | 
  23 |   await leads.enterLeadName('RohiniTest');
  24 |   await leads.enterCompanyName('TestCompany');
  25 |   await leads.enterLeadSource('Online');
  26 |   await leads.enterIndustry('IT');
  27 |   await leads.enterPhone('9876543210');
  28 |   await leads.enterLeadStatus('New');
  29 | 
  30 |   await leads.selectFirstCampaign();
  31 | 
  32 |   await leads.clickCreateLead();
  33 | });
```