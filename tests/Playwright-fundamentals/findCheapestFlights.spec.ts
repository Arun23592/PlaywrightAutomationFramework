import { test, expect, Page } from "@playwright/test";
import { count } from "console";

test('Select cheapest flight date on makeMyTrip', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/", {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
    });



    await page.waitForTimeout(2000);


    const popupSelectors = [
        '[data-cy="closeModal"]',
        '.commonModal__close',
        'span[class*="close"]',
        '.modal__close'


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
    console.log(`Step 1 Completed: Page loaded, popups handled`);



    const oneWaySelectors = [
        "li[data-cy='oneWayTrip']",
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

    if (!oneWayClicked) {

        await page.evaluate(() => {
            const tabS = Array.from(document.querySelectorAll('li button, span'));
            const oneWay = tabS.find(el => el.textContent?.trim() === 'One Way');
            if (oneWay) (oneWay as HTMLElement).click();
        });

        console.log(`Clicked One Way via Javascript fallback`);
    }

    console.log(`Step 2 completed: One way Selected`)




    //STEP 3: Set From (Delhi) and To (Mumbai)

    const fromFeild = page.locator('[data-cy= "fromCity"]').first();
    await fromFeild.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Delhi', { delay: 100 });
    await page.waitForSelector('[class*="autoSuggest"]', { state: 'visible', timeout: 5000 });
    await page.locator('[class*="autoSuggest"]').first().click();
    await page.waitForTimeout(500);


    const toFeild = page.locator('[data-cy="toCity"]').first();
    await toFeild.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Chennai', { delay: 100 });
    await page.waitForSelector('[class*="autoSuggest"]', { state: 'visible', timeout: 5000 });
    await page.locator('[class*="autoSuggest"]').first().click();
    await page.waitForTimeout(500);





});

//--Type definition--------
interface DayPrice {
    element: ReturnType<Page['locator']>;
    price: number;
    dateText: string;
    index: number;
}
async function findCheapestDate(page: Page): Promise<DayPrice> {

    const daySelectors = [
        '.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker--outside)',


    ]

    // Locate all calendar day cells that are not disabled/past
    let dayCells = page.locator(daySelectors[0]);

    let dayCount = 0;

    console.log(`Total avaiable dates: ${dayCount}`);

    for (const selector of daySelectors) {
        dayCells = page.locator(selector);
        dayCount = await dayCells.count().catch(() => 0);

        if (dayCount > 0) {
            break;
        }

        if (dayCount === 0) throw new Error('No available days found');



    }

}