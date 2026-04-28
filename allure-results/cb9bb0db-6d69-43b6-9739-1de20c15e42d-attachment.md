# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at http://49.249.28.218:8098/
Call log:
  - navigating to "http://49.249.28.218:8098/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
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
> 8  |   await page.goto('http://49.249.28.218:8098/');
     |              ^ Error: page.goto: net::ERR_NETWORK_CHANGED at http://49.249.28.218:8098/
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
  30 |   await expect(page.getByText("Rohini")).toBeVisible();
  31 | 
  32 |   // SEARCH + EDIT
  33 |   const updateLead = new UpdateLead(page);
  34 | 
  35 |   await updateLead.goToLeads();
  36 |   await updateLead.selectLeadByName("Rohini");
  37 |   await updateLead.clickEditIconForLead("Rohini");
  38 | });
```