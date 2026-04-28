import { expect } from '@playwright/test';

export class UpdateLead {
  constructor(page) {
    this.page = page;

    this.leadsLink = page.getByRole('link', { name: 'Leads' });
    this.searchDropdown = page.getByRole('combobox');
    this.searchInput = page.getByRole('textbox', { name: 'Search by Lead Name' });

    this.editButton = page.locator('table tbody tr').first().locator('a').first();

    this.cityInput = page.locator('input[name="city"]');
    this.countryInput = page.locator('input[name="country"]');
    this.statusInput = page.locator('input[name="leadStatus"]');

    this.updateBtn = page.getByRole('button', { name: 'Update Lead' });

    this.userIcon = '.user-icon';
    this.logoutText = 'text=Logout';
    this.signInBtn = this.page.getByRole('button', { name: /sign in/i });
  }

  async gotoLeads() {
    await this.leadsLink.click();
  }

  async searchLeadByName(name) {
    await this.searchDropdown.selectOption('name');
    await this.searchInput.fill(name);
  }

  async clickFirstResult() {
    await this.editButton.click();
  }

  async updateLeadDetails({ city, country, status }) {
    await this.cityInput.fill(city);
    await this.countryInput.fill(country);
    await this.statusInput.fill(status);

    await this.updateBtn.click();
  }

  async verifyStatus(status) {
    await expect(this.page.locator('tbody')).toContainText(status);
  }

 
 async logout() {
  // wait for toast to disappear
  await this.page.locator('[role="alert"]').last().waitFor({ state: 'hidden' });

  await this.page.locator(this.userIcon).click();
  await this.page.getByText('Logout').click();

  // ✅ better assertion
  await expect(this.signInBtn).toBeVisible();
}
}