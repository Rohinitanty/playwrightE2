import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.loginBtn = page.getByRole('button', { name: /sign in/i });
    this.leadsLink = page.getByRole('link', { name: /Leads/i });
  }

  async goto() {
    await this.page.goto('http://49.249.28.218:8098/');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();

    await expect(this.leadsLink).toBeVisible();
  }
}