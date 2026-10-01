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



    const oneWaySelectors = [
        "li[data-cy="oneWayTrip"]",
        '[class*="oneWay"]',
        'li:has-text("One Way")'


    ];

    let oneWayClicked = false;

    for (const selectors of oneWaySelectors) {
        const element = page.locator(selectors).first();

        const exists = element.isVisible().catch(() => false);

        if (exists) {
            const classes = await element.getAttribute('class') ?? '';

            const isAlreadyActive = classes.includes('active') ||
                classes.includes('selected') ||
                classes.includes('tabSelected');


            if (isAlreadyActive) {
                await element.click();
                console.log(`Cliecked one way with : ${selectors}`);

                await page.waitForTimeout(500);

            } else {
                console.log(`One way already selected - skipping clicking`);

            }
            oneWayClicked = true;
            break;
        }


    }

    // if(!oneWayClicked){
    //         await page.evaluate(() => {

    //         })
    // }









});