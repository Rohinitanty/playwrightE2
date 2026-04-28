# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\CreateLeads.js:6:5

# Error details

```
TypeError: _CreateLeads.CreateLeads is not a constructor
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
        - row "CAM20497 AmrutaAFd Active 5  " [ref=e65]:
          - cell "CAM20497" [ref=e66]
          - cell "AmrutaAFd" [ref=e67]
          - cell "Active" [ref=e68]
          - cell [ref=e69]
          - cell "5" [ref=e70]
          - cell [ref=e71]
          - cell " " [ref=e72]:
            - link "" [ref=e73] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e74]: 
            - link "" [ref=e75] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e76]: 
        - row "CAM20496 AmrutaAEt 5  " [ref=e77]:
          - cell "CAM20496" [ref=e78]
          - cell "AmrutaAEt" [ref=e79]
          - cell [ref=e80]
          - cell [ref=e81]
          - cell "5" [ref=e82]
          - cell [ref=e83]
          - cell " " [ref=e84]:
            - link "" [ref=e85] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e86]: 
            - link "" [ref=e87] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e88]: 
        - row "CAM20494 Rajeshht 5 2026-04-30  " [ref=e89]:
          - cell "CAM20494" [ref=e90]
          - cell "Rajeshht" [ref=e91]
          - cell [ref=e92]
          - cell [ref=e93]
          - cell "5" [ref=e94]
          - cell "2026-04-30" [ref=e95]
          - cell " " [ref=e96]:
            - link "" [ref=e97] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e98]: 
            - link "" [ref=e99] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e100]: 
        - row "CAM20492 RatroY Active 5  " [ref=e101]:
          - cell "CAM20492" [ref=e102]
          - cell "RatroY" [ref=e103]
          - cell "Active" [ref=e104]
          - cell [ref=e105]
          - cell "5" [ref=e106]
          - cell [ref=e107]
          - cell " " [ref=e108]:
            - link "" [ref=e109] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e110]: 
            - link "" [ref=e111] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e112]: 
        - row "CAM20491 HappyE 21  " [ref=e113]:
          - cell "CAM20491" [ref=e114]
          - cell "HappyE" [ref=e115]
          - cell [ref=e116]
          - cell [ref=e117]
          - cell "21" [ref=e118]
          - cell [ref=e119]
          - cell " " [ref=e120]:
            - link "" [ref=e121] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e122]: 
            - link "" [ref=e123] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e124]: 
        - row "CAM20490 Rajeshhla 5  " [ref=e125]:
          - cell "CAM20490" [ref=e126]
          - cell "Rajeshhla" [ref=e127]
          - cell [ref=e128]
          - cell [ref=e129]
          - cell "5" [ref=e130]
          - cell [ref=e131]
          - cell " " [ref=e132]:
            - link "" [ref=e133] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e134]: 
            - link "" [ref=e135] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e136]: 
        - row "CAM20488 MdeepikaQ 0 2026-04-30  " [ref=e137]:
          - cell "CAM20488" [ref=e138]
          - cell "MdeepikaQ" [ref=e139]
          - cell [ref=e140]
          - cell [ref=e141]
          - cell "0" [ref=e142]
          - cell "2026-04-30" [ref=e143]
          - cell " " [ref=e144]:
            - link "" [ref=e145] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e146]: 
            - link "" [ref=e147] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e148]: 
        - row "CAM20486 Rajeshhl 5  " [ref=e149]:
          - cell "CAM20486" [ref=e150]
          - cell "Rajeshhl" [ref=e151]
          - cell [ref=e152]
          - cell [ref=e153]
          - cell "5" [ref=e154]
          - cell [ref=e155]
          - cell " " [ref=e156]:
            - link "" [ref=e157] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e158]: 
            - link "" [ref=e159] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e160]: 
        - row "CAM20485 SwamirajDSDjJDK 5  " [ref=e161]:
          - cell "CAM20485" [ref=e162]
          - cell "SwamirajDSDjJDK" [ref=e163]
          - cell [ref=e164]
          - cell [ref=e165]
          - cell "5" [ref=e166]
          - cell [ref=e167]
          - cell " " [ref=e168]:
            - link "" [ref=e169] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e170]: 
            - link "" [ref=e171] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
              - generic "Delete" [ref=e172]: 
        - row "CAM20478 Suncity Workspace 5  " [ref=e173]:
          - cell "CAM20478" [ref=e174]
          - cell "Suncity Workspace" [ref=e175]
          - cell [ref=e176]
          - cell [ref=e177]
          - cell "5" [ref=e178]
          - cell [ref=e179]
          - cell " " [ref=e180]:
            - link "" [ref=e181] [cursor=pointer]:
              - /url: ""
              - generic "Edit" [ref=e182]: 
            - link "" [ref=e183] [cursor=pointer]:
              - /url: /dashboard#deleteProductModal
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
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | import { CreateLeads } from './CreateLeads';
  4  | import { UpdateLead } from './UpdateLead';
  5  | 
  6  | test('Create, Search and Edit Lead Test', async ({ page }) => {
  7  | 
  8  |     // Launch app
  9  |     await page.goto('http://49.249.28.218:8098/');
  10 | 
  11 |     // ---------- LOGIN ----------
  12 |     const login = new LoginPage(page);
  13 |     await login.login("rmgyantra", "rmgy@9999");
  14 | 
  15 |     await page.waitForLoadState('networkidle');
  16 | 
  17 |     // ---------- CREATE LEAD ----------
> 18 |     const createLead = new CreateLeads(page);
     |                        ^ TypeError: _CreateLeads.CreateLeads is not a constructor
  19 | 
  20 |     await createLead.goToLeads();
  21 |     await createLead.enterLeadName("Rohini");
  22 |     await createLead.enterCompanyName("Qspider");
  23 |     await createLead.enterLeadSource("Online");
  24 |     await createLead.enterIndustry("IT");
  25 |     await createLead.enterPhone("1010101010");
  26 |     await createLead.enterLeadStatus("New");
  27 | 
  28 |     await createLead.selectFirstCampaign();
  29 |     await createLead.clickCreateLead();
  30 | 
  31 |     // verify created
  32 |     await expect(page.getByText("Rohini").first()).toBeVisible();
  33 | 
  34 |     // ---------- SEARCH + EDIT ----------
  35 |     const updateLead = new UpdateLead(page);
  36 | 
  37 |     await updateLead.goToLeads();
  38 |     await updateLead.selectLeadByName("Rohini");
  39 | 
  40 |     // ✅ CLICK EDIT ICON
  41 |     await updateLead.clickEditIconForLead("Rohini");
  42 | });
```