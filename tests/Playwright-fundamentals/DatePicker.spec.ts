import { test, expect, Page } from "@playwright/test";


test('Datepicker handling', async ({ page }) => {

    await page.goto("https://www.delta.com/apac/en");

    await page.getByLabel('BLR').click();
})