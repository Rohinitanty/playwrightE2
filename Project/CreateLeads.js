export class CreateLeads {
  constructor(page) {
    this.page = page;

    // Locators
    this.leadNameInput = "input[name='name']";
    this.companyName = "input[name='company']";
    this.leadSource = "input[name='leadSource']";
    this.industryName = "input[name='industry']";
    this.phoneNumber = "input[name='phone']";
    this.leadStatus = "input[name='leadStatus']";
    this.campaignInput = "input[placeholder='Campaign']";
  }

  async createLead() {
    await this.page.getByRole('link', { name: /Leads/i }).click();
    await this.page.getByRole('button', { name: /Create Lead/i }).click();

    // wait for form
    await this.page.locator(this.leadNameInput).waitFor();
  }

  async enterLeadName(name) {
    await this.page.locator(this.leadNameInput).fill(name);
  }

  async enterCompanyName(name) {
    await this.page.locator(this.companyName).fill(name);
  }

  async enterLoadSource(name) {
    await this.page.locator(this.leadSource).fill(name);
  }

  async enterIndustryName(name) {
    await this.page.locator(this.industryName).fill(name);
  }

  async enterPhoneNumber(number) {
    await this.page.locator(this.phoneNumber).fill(number);
  }

  async enterLeadStatus(status) {
    await this.page.locator(this.leadStatus).fill(status);
  }

  async enterCampaign() {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),

      // safer locator for campaign button
      this.page.getByText('Campaign', { exact: false })
        .locator('xpath=ancestor::div[1]')
        .locator('button')
        .click()
    ]);

    await popup.waitForLoadState();

    await popup.getByRole('button', { name: 'Select' }).first().click();

    await popup.close();
  }

  
  async submitLead() {
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.getByRole('button', { name: /Create Lead/i }).click()
    ]);
  }
}