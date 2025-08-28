import { expect } from '@playwright/test';
import { Given, When, Then } from './.fixtures/fixtures';
import { CPURL } from './.lib/env';

Given('I am on DLink login page', async ({ page }) => {
  await page.goto(CPURL);
});

When('I click on {string} button', async ({ page }, name: string) => {
  await page.getByText(name, { exact: true }).click();
//  await page.getByRole('button', { name }).click();
});

Then('I see the message {string}', async ({ page }, text: string) => {
  await expect(page.getByText(text)).toBeVisible();
});
