# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeEnabled() failed

Locator: getByRole('button', { name: 'Create Lead' })
Expected: enabled
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeEnabled" with timeout 15000ms
  - waiting for getByRole('button', { name: 'Create Lead' })

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
          - link "Campaigns" [active] [ref=e13] [cursor=pointer]:
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
  - generic [ref=e41]:
    - generic [ref=e43]:
      - heading "Campaigns" [level=2] [ref=e45]
      - button " Create Campaign" [ref=e47] [cursor=pointer]:
        - generic [ref=e48]: 
        - generic [ref=e49]: Create Campaign
      - combobox [ref=e51]:
        - option "Search by Campaign Id" [selected]
        - option "Search by Campaign Name"
      - textbox "Search by Campaign Id" [ref=e53]
    - table [ref=e54]:
      - rowgroup [ref=e55]:
        - row "Campaign_Id Campaign Name Status Target Audience Target Size Expected Close Date Actions" [ref=e56]:
          - columnheader "Campaign_Id" [ref=e57]
          - columnheader "Campaign Name" [ref=e58]
          - columnheader "Status" [ref=e59]
          - columnheader "Target Audience" [ref=e60]
          - columnheader "Target Size" [ref=e61]
          - columnheader "Expected Close Date" [ref=e62]
          - columnheader "Actions" [ref=e63]
      - rowgroup [ref=e64]:
        - row "CAM20517 cicna 10  " [ref=e65]:
          - cell "CAM20517" [ref=e66]
          - cell "cicna" [ref=e67]
          - cell [ref=e68]
          - cell [ref=e69]
          - cell "10" [ref=e70]
          - cell [ref=e71]
          - cell " " [ref=e72]:
            - link "" [ref=e73] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e74]: 
            - link "" [ref=e75] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e76]: 
        - row "CAM20515 bharti 10  " [ref=e77]:
          - cell "CAM20515" [ref=e78]
          - cell "bharti" [ref=e79]
          - cell [ref=e80]
          - cell [ref=e81]
          - cell "10" [ref=e82]
          - cell [ref=e83]
          - cell " " [ref=e84]:
            - link "" [ref=e85] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e86]: 
            - link "" [ref=e87] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e88]: 
        - row "CAM20514 smithass 10  " [ref=e89]:
          - cell "CAM20514" [ref=e90]
          - cell "smithass" [ref=e91]
          - cell [ref=e92]
          - cell [ref=e93]
          - cell "10" [ref=e94]
          - cell [ref=e95]
          - cell " " [ref=e96]:
            - link "" [ref=e97] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e98]: 
            - link "" [ref=e99] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e100]: 
        - row "CAM20507 Paulette Steuber 821  " [ref=e101]:
          - cell "CAM20507" [ref=e102]
          - cell "Paulette Steuber" [ref=e103]
          - cell [ref=e104]
          - cell [ref=e105]
          - cell "821" [ref=e106]
          - cell [ref=e107]
          - cell " " [ref=e108]:
            - link "" [ref=e109] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e110]: 
            - link "" [ref=e111] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e112]: 
        - row "CAM20504 unimportantkick ACTIVE Nienow, Fahey and Ortiz-Reynolds 70 2026-12-30  " [ref=e113]:
          - cell "CAM20504" [ref=e114]
          - cell "unimportantkick" [ref=e115]
          - cell "ACTIVE" [ref=e116]
          - cell "Nienow, Fahey and Ortiz-Reynolds" [ref=e117]
          - cell "70" [ref=e118]
          - cell "2026-12-30" [ref=e119]
          - cell " " [ref=e120]:
            - link "" [ref=e121] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e122]: 
            - link "" [ref=e123] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e124]: 
        - row "CAM20503 greedytennis ACTIVE West and Sons 93 2027-03-27  " [ref=e125]:
          - cell "CAM20503" [ref=e126]
          - cell "greedytennis" [ref=e127]
          - cell "ACTIVE" [ref=e128]
          - cell "West and Sons" [ref=e129]
          - cell "93" [ref=e130]
          - cell "2027-03-27" [ref=e131]
          - cell " " [ref=e132]:
            - link "" [ref=e133] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e134]: 
            - link "" [ref=e135] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e136]: 
        - row "CAM20502 pleasingelevator ACTIVE Dooley, McGlynn and Roberts 31 2026-09-25  " [ref=e137]:
          - cell "CAM20502" [ref=e138]
          - cell "pleasingelevator" [ref=e139]
          - cell "ACTIVE" [ref=e140]
          - cell "Dooley, McGlynn and Roberts" [ref=e141]
          - cell "31" [ref=e142]
          - cell "2026-09-25" [ref=e143]
          - cell " " [ref=e144]:
            - link "" [ref=e145] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e146]: 
            - link "" [ref=e147] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e148]: 
        - row "CAM20500 spotlessentry ACTIVE Considine-Gleason LLC 45 2026-09-30  " [ref=e149]:
          - cell "CAM20500" [ref=e150]
          - cell "spotlessentry" [ref=e151]
          - cell "ACTIVE" [ref=e152]
          - cell "Considine-Gleason LLC" [ref=e153]
          - cell "45" [ref=e154]
          - cell "2026-09-30" [ref=e155]
          - cell " " [ref=e156]:
            - link "" [ref=e157] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e158]: 
            - link "" [ref=e159] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e160]: 
        - row "CAM20499 vividpassport ACTIVE O'Kon Inc 85 2027-04-02  " [ref=e161]:
          - cell "CAM20499" [ref=e162]
          - cell "vividpassport" [ref=e163]
          - cell "ACTIVE" [ref=e164]
          - cell "O'Kon Inc" [ref=e165]
          - cell "85" [ref=e166]
          - cell "2027-04-02" [ref=e167]
          - cell " " [ref=e168]:
            - link "" [ref=e169] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e170]: 
            - link "" [ref=e171] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e172]: 
        - row "CAM20497 AmrutaAFd Active 5  " [ref=e173]:
          - cell "CAM20497" [ref=e174]
          - cell "AmrutaAFd" [ref=e175]
          - cell "Active" [ref=e176]
          - cell [ref=e177]
          - cell "5" [ref=e178]
          - cell [ref=e179]
          - cell " " [ref=e180]:
            - link "" [ref=e181] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e182]: 
            - link "" [ref=e183] [cursor=pointer]:
              - /url: /campaigns#deleteProductModal
              - generic "Delete" [ref=e184]: 
    - list [ref=e186]:
      - listitem:
        - link "Go to first page":
          - /url: "#"
          - text: «
      - listitem:
        - link "Go to previous page":
          - /url: "#"
          - text: ⟨
      - listitem:
        - link "Go to page number 1" [ref=e187]:
          - /url: "#"
          - text: "1"
      - listitem:
        - link "Go to page number 2" [ref=e188] [cursor=pointer]:
          - /url: "#"
          - text: "2"
      - listitem:
        - link "Go to page number 3" [ref=e189] [cursor=pointer]:
          - /url: "#"
          - text: "3"
      - listitem:
        - link "Go to page number 4" [ref=e190] [cursor=pointer]:
          - /url: "#"
          - text: "4"
      - listitem:
        - link "Go to page number 5" [ref=e191] [cursor=pointer]:
          - /url: "#"
          - text: "5"
      - listitem:
        - link "Go to next page" [ref=e192] [cursor=pointer]:
          - /url: "#"
          - text: ⟩
      - listitem:
        - link "Go to last page" [ref=e193] [cursor=pointer]:
          - /url: "#"
          - text: »
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
  10 |     await this.leadsLink.click();
  11 | 
  12 |     // Wait for Leads page (avoid strict URL)
  13 |     await expect(this.page.locator('body')).toContainText(/lead/i, {
  14 |       timeout: 15000,
  15 |     });
  16 |   }
  17 | 
  18 |   async openCreateForm() {
  19 |     const createBtn = this.page.getByRole('button', {
  20 |       name: /create lead/i,
  21 |     });
  22 | 
  23 |     await expect(createBtn).toBeVisible({ timeout: 15000 });
  24 |     await createBtn.click();
  25 | 
  26 |     // FIX: target ONLY heading (no strict violation)
  27 |     await expect(
  28 |       this.page.getByRole('heading', { name: 'Create Lead' })
  29 |     ).toBeVisible({ timeout: 15000 });
  30 |   }
  31 | 
  32 |   async fillField(label, value) {
  33 |     const field = this.page
  34 |       .locator(`text=${label}`)
  35 |       .locator('..')
  36 |       .locator('input, textarea')
  37 |       .first();
  38 | 
  39 |     await expect(field).toBeVisible();
  40 |     await field.fill(value);
  41 |   }
  42 | 
  43 |   async enterLeadName(name) {
  44 |     await this.fillField('Lead Name', name);
  45 |   }
  46 | 
  47 |   async enterCompanyName(company) {
  48 |     await this.fillField('Company', company);
  49 |   }
  50 | 
  51 |   async enterLeadSource(source) {
  52 |     await this.fillField('Lead Source', source);
  53 |   }
  54 | 
  55 |   async enterIndustry(industry) {
  56 |     await this.fillField('Industry', industry);
  57 |   }
  58 | 
  59 |   async enterPhone(phone) {
  60 |     await this.fillField('Phone', phone);
  61 |   }
  62 | 
  63 |   async enterLeadStatus(status) {
  64 |     await this.fillField('Lead Status', status);
  65 |   }
  66 | 
  67 |   async selectFirstCampaign() {
  68 |     const dropdown = this.page
  69 |       .locator('text=Campaign')
  70 |       .locator('..')
  71 |       .locator('button')
  72 |       .first();
  73 | 
  74 |     await expect(dropdown).toBeVisible();
  75 |     await dropdown.click();
  76 | 
  77 |     const option = this.page.locator('text=/CAM/i').first();
  78 |     await expect(option).toBeVisible();
  79 |     await option.click();
  80 |   }
  81 | 
  82 |   async clickCreateLead() {
  83 |     const submitBtn = this.page.getByRole('button', {
  84 |       name: 'Create Lead',
  85 |     });
  86 | 
> 87 |     await expect(submitBtn).toBeEnabled({ timeout: 15000 });
     |                             ^ Error: expect(locator).toBeEnabled() failed
  88 |     await submitBtn.click();
  89 | 
  90 |     // DO NOT depend on URL (app unstable)
  91 |     await expect(this.page.locator('body')).toContainText(/lead/i);
  92 |   }
  93 | }
```