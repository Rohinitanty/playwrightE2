# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NinjaCRM.spec.js >> Create, Search and Edit Lead Test
- Location: Project\NinjaCRM.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Create Lead' })
    - locator resolved to <button class="btn btn-info">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li class="nav-item">…</li> from <div>…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <li class="nav-item">…</li> from <div>…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="container-fluid container-color">…</div> from <div>…</div> subtree intercepts pointer events
  6 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li class="nav-item">…</li> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li class="nav-item">…</li> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="container-fluid container-color">…</div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="container-fluid container-color">…</div> from <div>…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li class="nav-item">…</li> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="container-fluid container-color">…</div> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - navigation [ref=e6]:
    - generic [ref=e7]:
      - button "Toggle navigation" [ref=e8] [cursor=pointer]
      - generic [ref=e9]:
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Dashboard" [ref=e12] [cursor=pointer]:
              - /url: /dashboard-graphs
          - listitem [ref=e13]:
            - link "Campaigns" [ref=e14] [cursor=pointer]:
              - /url: /campaigns
          - listitem [ref=e15]:
            - link "Contacts" [ref=e16] [cursor=pointer]:
              - /url: /contacts
          - listitem [ref=e17]:
            - link "Leads" [active] [ref=e18] [cursor=pointer]:
              - /url: /leads
          - listitem [ref=e19]:
            - link "Opportunities" [ref=e20] [cursor=pointer]:
              - /url: /opportunities
          - listitem [ref=e21]:
            - link "Products" [ref=e22] [cursor=pointer]:
              - /url: /products
          - listitem [ref=e23]:
            - link "Quotes" [ref=e24] [cursor=pointer]:
              - /url: /quotes
          - listitem [ref=e25]:
            - link "Purchase Order" [ref=e26] [cursor=pointer]:
              - /url: /purchase-order
          - listitem [ref=e27]:
            - link "Sales Order" [ref=e28] [cursor=pointer]:
              - /url: /sales-order
          - listitem [ref=e29]:
            - link "Invoice" [ref=e30] [cursor=pointer]:
              - /url: /invoice
          - listitem [ref=e31]:
            - listitem [ref=e34]: Admin Console
        - img [ref=e38] [cursor=pointer]
  - generic [ref=e40]:
    - generic [ref=e42]:
      - generic [ref=e44]:
        - heading "Leads" [level=2] [ref=e46]
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
          - row "LEAD01919 Test Lead CAM09593 Test Company New test@gmail.com 9876543210  " [ref=e66]:
            - cell "LEAD01919" [ref=e67]
            - cell "Test Lead" [ref=e68]
            - cell "CAM09593" [ref=e69]
            - cell "Test Company" [ref=e70]
            - cell "New" [ref=e71]
            - cell "test@gmail.com" [ref=e72]
            - cell "9876543210" [ref=e73]
            - cell " " [ref=e74]:
              - link "" [ref=e75] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e76]: 
              - link "" [ref=e77] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e78]: 
          - row "LEAD01913 Test Lead CAM09593 Test Company New test@gmail.com 9876543210  " [ref=e79]:
            - cell "LEAD01913" [ref=e80]
            - cell "Test Lead" [ref=e81]
            - cell "CAM09593" [ref=e82]
            - cell "Test Company" [ref=e83]
            - cell "New" [ref=e84]
            - cell "test@gmail.com" [ref=e85]
            - cell "9876543210" [ref=e86]
            - cell " " [ref=e87]:
              - link "" [ref=e88] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e89]: 
              - link "" [ref=e90] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e91]: 
          - row "LEAD01912 Lead_66737 CAM20425 company Open vikram@gmail.com leadPhone  " [ref=e92]:
            - cell "LEAD01912" [ref=e93]
            - cell "Lead_66737" [ref=e94]
            - cell "CAM20425" [ref=e95]
            - cell "company" [ref=e96]
            - cell "Open" [ref=e97]
            - cell "vikram@gmail.com" [ref=e98]
            - cell "leadPhone" [ref=e99]
            - cell " " [ref=e100]:
              - link "" [ref=e101] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e102]: 
              - link "" [ref=e103] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e104]: 
          - row "LEAD01911 Lead_57459 CAM20424 company Open vikram@gmail.com leadPhone  " [ref=e105]:
            - cell "LEAD01911" [ref=e106]
            - cell "Lead_57459" [ref=e107]
            - cell "CAM20424" [ref=e108]
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
          - row "LEAD01910 Lead_71872 CAM20420 company Open vikram@gmail.com leadPhone  " [ref=e118]:
            - cell "LEAD01910" [ref=e119]
            - cell "Lead_71872" [ref=e120]
            - cell "CAM20420" [ref=e121]
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
          - row "LEAD01909 Lead_36538 CAM20419 company Open vikram@gmail.com leadPhone  " [ref=e131]:
            - cell "LEAD01909" [ref=e132]
            - cell "Lead_36538" [ref=e133]
            - cell "CAM20419" [ref=e134]
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
          - row "LEAD01908 Leadmnzvbim CAM09593 Test Company New test@gmail.com 9876543210  " [ref=e144]:
            - cell "LEAD01908" [ref=e145]
            - cell "Leadmnzvbim" [ref=e146]
            - cell "CAM09593" [ref=e147]
            - cell "Test Company" [ref=e148]
            - cell "New" [ref=e149]
            - cell "test@gmail.com" [ref=e150]
            - cell "9876543210" [ref=e151]
            - cell " " [ref=e152]:
              - link "" [ref=e153] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e154]: 
              - link "" [ref=e155] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e156]: 
          - row "LEAD01907 Lead_76452 CAM20408 company Open vikram@gmail.com leadPhone  " [ref=e157]:
            - cell "LEAD01907" [ref=e158]
            - cell "Lead_76452" [ref=e159]
            - cell "CAM20408" [ref=e160]
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
          - row "LEAD01906 Test Lead CAM09593 Test Company New test@gmail.com 9876543210  " [ref=e170]:
            - cell "LEAD01906" [ref=e171]
            - cell "Test Lead" [ref=e172]
            - cell "CAM09593" [ref=e173]
            - cell "Test Company" [ref=e174]
            - cell "New" [ref=e175]
            - cell "test@gmail.com" [ref=e176]
            - cell "9876543210" [ref=e177]
            - cell " " [ref=e178]:
              - link "" [ref=e179] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e180]: 
              - link "" [ref=e181] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e182]: 
          - row "LEAD01905 Leadmnzcchu CAM09593 Test Company New test@gmail.com 9876543210  " [ref=e183]:
            - cell "LEAD01905" [ref=e184]
            - cell "Leadmnzcchu" [ref=e185]
            - cell "CAM09593" [ref=e186]
            - cell "Test Company" [ref=e187]
            - cell "New" [ref=e188]
            - cell "test@gmail.com" [ref=e189]
            - cell "9876543210" [ref=e190]
            - cell " " [ref=e191]:
              - link "" [ref=e192] [cursor=pointer]:
                - /url: ""
                - generic "Edit" [ref=e193]: 
              - link "" [ref=e194] [cursor=pointer]:
                - /url: /leads#deleteProductModal
                - generic "Delete" [ref=e195]: 
      - list [ref=e197]:
        - listitem [ref=e198]:
          - link "Go to first page" [ref=e199] [cursor=pointer]:
            - /url: "#"
            - text: «
        - listitem [ref=e200]:
          - link "Go to previous page" [ref=e201] [cursor=pointer]:
            - /url: "#"
            - text: ⟨
        - listitem [ref=e202]:
          - link "Go to page number 1" [ref=e203] [cursor=pointer]:
            - /url: "#"
            - text: "1"
        - listitem [ref=e204]:
          - link "Go to page number 2" [ref=e205] [cursor=pointer]:
            - /url: "#"
            - text: "2"
        - listitem [ref=e206]:
          - link "Go to page number 3" [ref=e207] [cursor=pointer]:
            - /url: "#"
            - text: "3"
        - listitem [ref=e208]:
          - link "Go to page number 4" [ref=e209] [cursor=pointer]:
            - /url: "#"
            - text: "4"
        - listitem [ref=e210]:
          - link "Go to page number 5" [ref=e211] [cursor=pointer]:
            - /url: "#"
            - text: "5"
        - listitem [ref=e212]:
          - link "Go to next page" [ref=e213] [cursor=pointer]:
            - /url: "#"
            - text: ⟩
        - listitem [ref=e214]:
          - link "Go to last page" [ref=e215] [cursor=pointer]:
            - /url: "#"
            - text: »
    - generic [ref=e219]:
      - generic [ref=e220]:
        - heading "Edit Product" [level=4] [ref=e221]
        - button [ref=e222] [cursor=pointer]: ×
      - generic [ref=e223]:
        - generic [ref=e224]:
          - generic [ref=e225]: Product Name
          - textbox [ref=e226]
        - generic [ref=e227]:
          - generic [ref=e228]: Quantity
          - textbox [ref=e229]
      - generic [ref=e230]:
        - button "Cancel" [ref=e231]
        - button "Save" [ref=e232]
    - generic [ref=e236]:
      - generic [ref=e237]:
        - heading "Delete Lead" [level=4] [ref=e238]
        - button [ref=e239] [cursor=pointer]: ×
      - generic [ref=e240]:
        - paragraph [ref=e241]: Are you sure you want to delete lead?
        - paragraph [ref=e242]: This action cannot be undone.
      - generic [ref=e243]:
        - button "Cancel" [ref=e244]
        - button "Delete" [ref=e245]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class CreateLeads {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.leadsLink = page.getByRole('link', { name: 'Leads' });
  8  |     this.createBtn = page.getByRole('button', { name: 'Create Lead' });
  9  |     this.submitBtn = page.getByRole('button', { name: 'Create Lead' });
  10 |   }
  11 | 
  12 |   async goToLeads() {
  13 |     await this.leadsLink.click();
  14 |     await expect(this.page).toHaveURL(/leads/);
  15 |   }
  16 | 
  17 |   async openCreateForm() {
> 18 |     await this.createBtn.click();
     |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |   }
  20 | 
  21 |   // safer input strategy (based on DOM structure)
  22 |   async fillField(labelText, value) {
  23 |     await this.page
  24 |       .locator(`text=${labelText}`)
  25 |       .locator('..')
  26 |       .locator('input')
  27 |       .first()
  28 |       .fill(value);
  29 |   }
  30 | 
  31 |   async enterLeadName(name) {
  32 |     await this.fillField('Lead Name*', name);
  33 |   }
  34 | 
  35 |   async enterCompanyName(company) {
  36 |     await this.fillField('Company*', company);
  37 |   }
  38 | 
  39 |   async enterLeadSource(source) {
  40 |     await this.fillField('Lead Source*', source);
  41 |   }
  42 | 
  43 |   async enterIndustry(industry) {
  44 |     await this.fillField('Industry*', industry);
  45 |   }
  46 | 
  47 |   async enterPhone(phone) {
  48 |     await this.fillField('Phone*', phone);
  49 |   }
  50 | 
  51 |   async enterLeadStatus(status) {
  52 |     await this.fillField('Lead Status*', status);
  53 |   }
  54 | 
  55 |   async selectFirstCampaign() {
  56 |     // FIX: NOT combobox — it's input + button UI
  57 |     await this.page.locator('input').nth(5).click();
  58 |     await this.page.keyboard.press('ArrowDown');
  59 |     await this.page.keyboard.press('Enter');
  60 |   }
  61 | 
  62 |   async clickCreateLead() {
  63 |     await this.submitBtn.click();
  64 |   }
  65 | }
```