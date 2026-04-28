import { expect } from '@playwright/test';

export class DeleteOpportunity {
  constructor(page) {
    this.page = page;

    // Navigation
    this.opportunitiesLink = page.getByRole('link', { name: /Opportunities/i });

    // Search
    this.searchDropdown = page.getByRole('combobox');
    this.searchInput = page.getByRole('textbox', { name: /Search by Opportunity Name/i });

    // Modal
    this.deleteModal = page.locator('#deleteProductModal');
    this.confirmDeleteBtn = page.getByRole('button', { name: 'Delete' });

    // Alerts
    this.alerts = page.getByRole('alert');
  }

  async gotoOpportunities() {
    await this.opportunitiesLink.click();
  }

  async searchOpportunity(name) {
    await this.searchDropdown.selectOption('opportunityName');
    await this.searchInput.fill(name);

    // Better than timeout → wait for row to appear
    await this.page.locator(`tr:has-text("${name}")`).first().waitFor();
  }

  // ✅ delete specific row
  async clickDeleteByName(name) {
    const row = this.page.locator(`tr:has-text("${name}")`).first();
    await row.locator('a.delete').click();
  }

  async confirmDelete(name) {
    await expect(this.deleteModal).toContainText(`delete ${name}`);
    await this.confirmDeleteBtn.click();
  }

  // ✅ FIXED: handle multiple alerts properly
  async verifyDeleted(name) {
    const deleteMsg = this.alerts.last();

    await expect(deleteMsg).toContainText(`${name} Opportunity Successfully Deleted`);

    // strong validation → row should be gone
    await expect(this.page.locator(`tr:has-text("${name}")`)).toHaveCount(0);
  }
}