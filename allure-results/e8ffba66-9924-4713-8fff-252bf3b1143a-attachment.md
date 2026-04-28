# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create Lead + Create & Delete Opportunity Flow
- Location: Project\NinjaCRM.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h2')
Expected substring: "Sign In"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h2')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class UpdateLead {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.leadsLink = page.getByRole('link', { name: 'Leads' });
  8  |     this.searchDropdown = page.getByRole('combobox');
  9  |     this.searchInput = page.getByRole('textbox', { name: 'Search by Lead Name' });
  10 | 
  11 |     this.editButton = page.locator('table tbody tr').first().locator('a').first();
  12 | 
  13 |     this.cityInput = page.locator('input[name="city"]');
  14 |     this.countryInput = page.locator('input[name="country"]');
  15 |     this.statusInput = page.locator('input[name="leadStatus"]');
  16 | 
  17 |     this.updateBtn = page.getByRole('button', { name: 'Update Lead' });
  18 | 
  19 |     this.userIcon = '.user-icon';
  20 |     this.logoutText = 'text=Logout';
  21 |     this.signInHeader = 'h2';
  22 |   }
  23 | 
  24 |   async gotoLeads() {
  25 |     await this.leadsLink.click();
  26 |   }
  27 | 
  28 |   async searchLeadByName(name) {
  29 |     await this.searchDropdown.selectOption('name');
  30 |     await this.searchInput.fill(name);
  31 |   }
  32 | 
  33 |   async clickFirstResult() {
  34 |     await this.editButton.click();
  35 |   }
  36 | 
  37 |   async updateLeadDetails({ city, country, status }) {
  38 |     await this.cityInput.fill(city);
  39 |     await this.countryInput.fill(country);
  40 |     await this.statusInput.fill(status);
  41 | 
  42 |     await this.updateBtn.click();
  43 |   }
  44 | 
  45 |   async verifyStatus(status) {
  46 |     await expect(this.page.locator('tbody')).toContainText(status);
  47 |   }
  48 | 
  49 |  async logout() {
  50 |   // wait for toast to disappear
  51 |   await this.page.locator('[role="alert"]').last().waitFor({ state: 'hidden' });
  52 | 
  53 |   await this.page.locator(this.userIcon).click();
  54 |   await this.page.getByText('Logout').click();
  55 | 
> 56 |   await expect(this.page.locator(this.signInHeader)).toContainText('Sign In');
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  57 | }
  58 | }
```