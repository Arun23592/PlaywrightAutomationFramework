import { test, expect, Page } from "@playwright/test";

test('Select cheapest flight date on makeMyTrip', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/", {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
    });



    await page.waitForTimeout(5000);


    const popupSelectors = [
        '[data-cy="closeModal"]',
        '.commonModal__close',
        'span[class*="close"]'


    ];


    for (const selectors of popupSelectors) {

        const closeBtn = page.locator(selectors).first();
        const isVisible = await closeBtn.isVisible().catch(() => false);

        if (isVisible) {
            console.log(`Closing popup with selector: ${selectors}`);
            await closeBtn.click();
            await page.waitForTimeout(1000);
            break;
        }
    }



    await expect(page).toHaveURL("https://www.makemytrip.com/");
    console.log(`Step 1 Complete: Page loaded, popups handled`);











});