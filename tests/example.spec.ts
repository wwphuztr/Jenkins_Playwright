import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  try {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  } catch (error) {
    console.error('Test failed:', error); // Logging the error
    throw error; // Rethrow the error to mark the test as failed
  }
});

test('get started link', async ({ page }) => {
  
  try {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  } catch (error) {
    console.error('Test failed:', error); // Logging the error
    throw error; // Rethrow the error to mark the test as failed
  }
});
