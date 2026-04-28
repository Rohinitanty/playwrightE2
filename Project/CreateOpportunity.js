import { expect } from '@playwright/test';

export class CreateOpportunity {
  constructor(page) {
    this.page = page;

    // Navigation
    this.opportunitiesLink = page.getByRole('link', { name: /Opportunities/i });
    this.createOpportunityBtn = page.getByRole('button', { name: /Create Opportunity/i });

    // Form fields
    this.opportunityName = page.locator("input[name='opportunityName']");
    this.amount = page.locator("input[name='amount']");
    this.businessType = page.locator("input[name='businessType']");
    this.nextStep = page.locator("input[name='nextStep']");
    this.salesStage = page.locator("input[name='salesStage']");

    // ✅ FIXED: Stable locator for Lead select (+) button
    this.leadSelectBtn = page
      .getByText('Lead*')
      .locator('xpath=ancestor::div[1]')
      .locator('button');

    // Submit
    this.submitBtn = page.getByRole('button', { name: /Create Opportunity/i });

    // Success message
    this.successMsg = page.getByRole('alert');
  }

  async gotoOpportunities() {
    await this.opportunitiesLink.click();
  }

  async clickCreateOpportunity() {
    await this.createOpportunityBtn.click();
    await this.opportunityName.waitFor();
  }

  async fillOpportunityDetails(data) {
    await this.opportunityName.fill(data.name);
    await this.amount.fill(data.amount);
    await this.businessType.fill(data.businessType);
    await this.nextStep.fill(data.nextStep);
    await this.salesStage.fill(data.salesStage);
  }

  async selectLead() {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.leadSelectBtn.click()
    ]);

    await popup.waitForLoadState();

    await expect(popup.getByRole('heading')).toContainText('Select a Lead');

    // Select first available lead
    await popup.locator('table tbody tr').first().getByRole('button').click();

    await popup.close();
  }

  async submitOpportunity() {
    await this.submitBtn.click();
  }

  async verifyOpportunityCreated(name) {
    await expect(this.successMsg).toContainText(`Opportunity ${name} Successfully Added`);
  }
}