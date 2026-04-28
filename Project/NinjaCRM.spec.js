import { test, expect } from '@playwright/test';
import { LoginPage } from './Login';
import { CreateLeads } from './CreateLeads';
import { CreateOpportunity } from './CreateOpportunity';
import { DeleteOpportunity } from './DeleteOpportunity';
import { UpdateLead } from './UpdateLead';

test('Create Lead + Create & Delete Opportunity Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const leads = new CreateLeads(page);
  const opportunity = new CreateOpportunity(page);
  const deleteOpp = new DeleteOpportunity(page);
  const update = new UpdateLead(page); // for logout reuse

  const leadName = 'Rohini';
  const oppName = 'Testing';

  // ---------- LOGIN ----------
  await login.goto();
  await login.login('rmgyantra', 'rmgy@9999');

  // ---------- CREATE LEAD ----------
  await leads.createLead();

  await leads.enterLeadName(leadName);
  await leads.enterCompanyName('Qspider');
  await leads.enterLoadSource('Testing');
  await leads.enterIndustryName('IT');
  await leads.enterPhoneNumber('1010101010');
  await leads.enterLeadStatus('New');

  await leads.enterCampaign();
  await leads.submitLead();

  await expect(page.locator('table')).toContainText(leadName);

  // ---------- CREATE OPPORTUNITY ----------
  await opportunity.gotoOpportunities();
  await opportunity.clickCreateOpportunity();

  await opportunity.fillOpportunityDetails({
    name: oppName,
    amount: '500',
    businessType: 'Service',
    nextStep: 'Open',
    salesStage: 'primary'
  });

  await opportunity.selectLead();
  await opportunity.submitOpportunity();
  await opportunity.verifyOpportunityCreated(oppName);

  // ---------- DELETE OPPORTUNITY ----------
  await deleteOpp.gotoOpportunities();
  await deleteOpp.searchOpportunity(oppName);
  await deleteOpp.clickDeleteByName(oppName);
  await deleteOpp.confirmDelete(oppName);
  await deleteOpp.verifyDeleted(oppName);

  // ---------- LOGOUT ----------
  await update.logout();
});