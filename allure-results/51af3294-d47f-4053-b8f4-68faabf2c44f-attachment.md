# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:5:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - heading "Leads" [level=2] [ref=e45]
        - button " Create Lead" [ref=e47] [cursor=pointer]:
          - generic [ref=e48]: 
          - generic [ref=e49]: Create Lead
        - combobox [ref=e51]:
          - option "Search by Lead Id" [selected]
          - option "Search by Lead Name"
        - textbox "Search by Lead Id" [ref=e53]
      - table [ref=e54]:
        - rowgroup [ref=e55]:
          - row "Lead_Id Lead Name Campaign_Id Company Status Email Phone Actions" [ref=e56]:
            - columnheader "Lead_Id" [ref=e57]
            - columnheader "Lead Name" [ref=e58]
            - columnheader "Campaign_Id" [ref=e59]
            - columnheader "Company" [ref=e60]
            - columnheader "Status" [ref=e61]
            - columnheader "Email" [ref=e62]
            - columnheader "Phone" [ref=e63]
            - columnheader "Actions" [ref=e64]
        - rowgroup [ref=e65]:
          - row "LEAD01937 Rohini CAM09242 Qspider New 1010101010  " [ref=e66]:
            - cell "LEAD01937" [ref=e67]
            - cell "Rohini" [ref=e68]
            - cell "CAM09242" [ref=e69]
            - cell "Qspider" [ref=e70]
            - cell "New" [ref=e71]
            - cell [ref=e72]
            - cell "1010101010" [ref=e73]
            - cell " " [ref=e74]:
              - link "" [ref=e75] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e76]: 
              - link "" [ref=e77] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e78]: 
          - row "LEAD01936 Rohini CAM09242 Qspider New 1010101010  " [ref=e79]:
            - cell "LEAD01936" [ref=e80]
            - cell "Rohini" [ref=e81]
            - cell "CAM09242" [ref=e82]
            - cell "Qspider" [ref=e83]
            - cell "New" [ref=e84]
            - cell [ref=e85]
            - cell "1010101010" [ref=e86]
            - cell " " [ref=e87]:
              - link "" [ref=e88] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e89]: 
              - link "" [ref=e90] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e91]: 
          - row "LEAD01935 Rohini CAM09242 Qspider New 1010101010  " [ref=e92]:
            - cell "LEAD01935" [ref=e93]
            - cell "Rohini" [ref=e94]
            - cell "CAM09242" [ref=e95]
            - cell "Qspider" [ref=e96]
            - cell "New" [ref=e97]
            - cell [ref=e98]
            - cell "1010101010" [ref=e99]
            - cell " " [ref=e100]:
              - link "" [ref=e101] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e102]: 
              - link "" [ref=e103] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e104]: 
          - row "LEAD01934 Lead_93507 CAM20590 company Open vikram@gmail.com leadPhone  " [ref=e105]:
            - cell "LEAD01934" [ref=e106]
            - cell "Lead_93507" [ref=e107]
            - cell "CAM20590" [ref=e108]
            - cell "company" [ref=e109]
            - cell "Open" [ref=e110]
            - cell "vikram@gmail.com" [ref=e111]
            - cell "leadPhone" [ref=e112]
            - cell " " [ref=e113]:
              - link "" [ref=e114] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e115]: 
              - link "" [ref=e116] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e117]: 
          - row "LEAD01933 Lead_94686 CAM20576 company Open vikram@gmail.com leadPhone  " [ref=e118]:
            - cell "LEAD01933" [ref=e119]
            - cell "Lead_94686" [ref=e120]
            - cell "CAM20576" [ref=e121]
            - cell "company" [ref=e122]
            - cell "Open" [ref=e123]
            - cell "vikram@gmail.com" [ref=e124]
            - cell "leadPhone" [ref=e125]
            - cell " " [ref=e126]:
              - link "" [ref=e127] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e128]: 
              - link "" [ref=e129] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e130]: 
          - row "LEAD01932 Lead_95193 CAM20575 company Open vikram@gmail.com leadPhone  " [ref=e131]:
            - cell "LEAD01932" [ref=e132]
            - cell "Lead_95193" [ref=e133]
            - cell "CAM20575" [ref=e134]
            - cell "company" [ref=e135]
            - cell "Open" [ref=e136]
            - cell "vikram@gmail.com" [ref=e137]
            - cell "leadPhone" [ref=e138]
            - cell " " [ref=e139]:
              - link "" [ref=e140] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e141]: 
              - link "" [ref=e142] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e143]: 
          - row "LEAD01931 Lead_87425 CAM20573 company Open vikram@gmail.com leadPhone  " [ref=e144]:
            - cell "LEAD01931" [ref=e145]
            - cell "Lead_87425" [ref=e146]
            - cell "CAM20573" [ref=e147]
            - cell "company" [ref=e148]
            - cell "Open" [ref=e149]
            - cell "vikram@gmail.com" [ref=e150]
            - cell "leadPhone" [ref=e151]
            - cell " " [ref=e152]:
              - link "" [ref=e153] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e154]: 
              - link "" [ref=e155] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e156]: 
          - row "LEAD01930 Lead_83698 CAM20572 company Open vikram@gmail.com leadPhone  " [ref=e157]:
            - cell "LEAD01930" [ref=e158]
            - cell "Lead_83698" [ref=e159]
            - cell "CAM20572" [ref=e160]
            - cell "company" [ref=e161]
            - cell "Open" [ref=e162]
            - cell "vikram@gmail.com" [ref=e163]
            - cell "leadPhone" [ref=e164]
            - cell " " [ref=e165]:
              - link "" [ref=e166] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e167]: 
              - link "" [ref=e168] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e169]: 
          - row "LEAD01929 Lead_79772 CAM20569 company Open vikram@gmail.com leadPhone  " [ref=e170]:
            - cell "LEAD01929" [ref=e171]
            - cell "Lead_79772" [ref=e172]
            - cell "CAM20569" [ref=e173]
            - cell "company" [ref=e174]
            - cell "Open" [ref=e175]
            - cell "vikram@gmail.com" [ref=e176]
            - cell "leadPhone" [ref=e177]
            - cell " " [ref=e178]:
              - link "" [ref=e179] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e180]: 
              - link "" [ref=e181] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e182]: 
          - row "LEAD01928 Lead_95942 CAM20566 company Open vikram@gmail.com leadPhone  " [ref=e183]:
            - cell "LEAD01928" [ref=e184]
            - cell "Lead_95942" [ref=e185]
            - cell "CAM20566" [ref=e186]
            - cell "company" [ref=e187]
            - cell "Open" [ref=e188]
            - cell "vikram@gmail.com" [ref=e189]
            - cell "leadPhone" [ref=e190]
            - cell " " [ref=e191]:
              - link "" [ref=e192] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e193]: 
              - link "" [ref=e194] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e195]: 
      - list [ref=e197]:
        - listitem:
          - link "Go to first page":
            - /url: "#"
            - text: «
        - listitem:
          - link "Go to previous page":
            - /url: "#"
            - text: ⟨
        - listitem:
          - link "Go to page number 1" [ref=e198]:
            - /url: "#"
            - text: "1"
        - listitem:
          - link "Go to page number 2" [ref=e199] [cursor=pointer]:
            - /url: "#"
            - text: "2"
        - listitem:
          - link "Go to page number 3" [ref=e200] [cursor=pointer]:
            - /url: "#"
            - text: "3"
        - listitem:
          - link "Go to page number 4" [ref=e201] [cursor=pointer]:
            - /url: "#"
            - text: "4"
        - listitem:
          - link "Go to page number 5" [ref=e202] [cursor=pointer]:
            - /url: "#"
            - text: "5"
        - listitem:
          - link "Go to next page" [ref=e203] [cursor=pointer]:
            - /url: "#"
            - text: ⟩
        - listitem:
          - link "Go to last page" [ref=e204] [cursor=pointer]:
            - /url: "#"
            - text: »
  - generic [ref=e206] [cursor=pointer]:
    - alert [ref=e207]: Lead Rohini Successfully Added
    - button "close" [ref=e208]: ✖︎
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from './Login';
  3  | import { CreateLeads } from './CreateLeads';
  4  | 
  5  | test('Create, Search and Edit Lead Test', async ({ page }) => {
  6  |   const login = new LoginPage(page);
  7  |   const leads = new CreateLeads(page);
  8  | 
  9  |   // Open app + login
  10 |   await login.goto();
  11 |   await login.login('rmgyantra', 'rmgy@9999');
  12 | 
  13 |   // Create Lead
  14 |   await leads.createLead();
  15 | 
  16 |   // Fill details
  17 |   await leads.enterLeadName("Rohini");
  18 |   await leads.enterCompanyName("Qspider");
  19 |   await leads.enterLoadSource("Testing");
  20 |   await leads.enterIndustryName("IT");
  21 |   await leads.enterPhoneNumber("1010101010");
  22 |   await leads.enterLeadStatus("New");
  23 | 
  24 |   // Campaign selection
  25 |   await leads.enterCampaign();
  26 | 
  27 |   // Submit form
  28 |   await page.getByRole('button', { name: "Create Lead" }).click();
> 29 |   await expect(page.getByText("Rohini")).toBeVisible();
     |   ^ ReferenceError: expect is not defined
  30 |   await page.waitForTimeout(5000);
  31 | });
```