import { test, expect, Page } from "@playwright/test";

test('Select cheapest flight date on makeMyTrip', async ({ page }) => {

    //Navigate to Makemytrip homepage

    await page.goto("https://www.makemytrip.com/", {
        waitUntil: 'domcontentloaded',
        timeout: 60_000,
    });



    await page.waitForTimeout(2000);

    //Close Popup
    const popupSelectors = [
        '[data-cy="closeModal"]',
        '.commonModal__close',
        'span[class*="close"]',
        '.modal__close'


    ];


    for (const selectors of popupSelectors) {

        const closeBtn = page.locator(selectors).first();

        try {
            await closeBtn.waitFor({
                state: 'visible',
                timeout: 8000
            });
            console.log(` popup found : ${selectors}`);

            await closeBtn.click();

            console.log("Popup closed successfully");
            break;
        } catch {
            console.log(`Pop not found with this selector`);
        }


    }




    //Verify makemytrip URL
    await expect(page).toHaveURL("https://www.makemytrip.com/");
    console.log(`Step 1 Completed: Page loaded, popups handled`);


    //Ensure "One Way" is selected
    const oneWaySelectors = [
        "li[data-cy='oneWayTrip']",
        '[class*="oneWay"]',
        'li:has-text("One Way")'
    ];

    let oneWayClicked = false;

    for (const selectors of oneWaySelectors) {
        const element = page.locator(selectors).first();

        const exists = await element.isVisible().catch(() => false);

        if (exists) {
            const classes = await element.getAttribute('class') ?? '';

            const isAlreadyActive = classes.includes('active') ||
                classes.includes('selected') ||
                classes.includes('tabSelected');


            if (isAlreadyActive) {
                await element.click();
                console.log(`Clicked one way with : ${selectors}`);

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




    //STEP 3: Set From (Delhi) and To (Chennai)

    // --- FROM city ---
    const fromField = page.locator('[data-cy="fromCity"]').first();
    await fromField.click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Delhi', { delay: 100 });

    // Wait for dropdown suggestions and click the first OPTION (not a banner/paragraph)
    const fromOption = page.getByRole('option').first();
    await fromOption.waitFor({ state: 'visible', timeout: 10_000 });
    await page.waitForTimeout(300);
    const fromText = await fromOption.textContent();
    await fromOption.click();
    console.log(`FROM selected : ${fromText}`);
    await page.waitForTimeout(500);


    // --- TO city ---
    const toField = page.locator('[data-cy="toCity"]').first();
    await toField.click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.keyboard.type('Chennai', { delay: 100 });

    const toOption = page.getByRole('option').first();
    await toOption.waitFor({ state: 'visible', timeout: 10_000 });
    await page.waitForTimeout(300);
    const toText = await toOption.textContent();
    await toOption.click();
    console.log(`TO selected : ${toText}`);
    await page.waitForTimeout(1000);


    //STEP 4: select calender date
    const cheapestDate = await findCheapestDate(page);
    console.log(`Cheapest date found:`)


});

//--Type definition--------
interface DayPrice {
    element: ReturnType<Page['locator']>;
    price: number;
    dateText: string;
    index: number;
}

async function findCheapestDate(page: Page): Promise<DayPrice | null> {

    // After selecting To city, MakeMyTrip usually auto-opens the calendar.
    // If not, click the Departure field wrapper (use force to bypass the <span> label overlay).
    const calendarSelectors = [
        '.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)',
        '[class*="dateInnerCell"]:not([class*="disabled"])',
        '.DayPicker-Body .DayPicker-Day',
        '[class*="calendarDay"]',
    ];

    // Check if calendar is already open (auto-opened after To city selection)
    let calendarAlreadyOpen = false;
    for (const selector of calendarSelectors) {
        const count = await page.locator(selector).count();
        if (count > 0) {
            calendarAlreadyOpen = true;
            console.log(`Calendar already open (found ${count} cells with "${selector}")`);
            break;
        }
    }

    // If not auto-opened, click Departure to open it
    if (!calendarAlreadyOpen) {
        console.log('Calendar not auto-opened, clicking Departure field...');
        const departureField = page.locator('[data-cy="departureDate"], [data-cy="departure"]').first();
        await departureField.click({ force: true });
        await page.waitForTimeout(1000);
    }

    // Wait for calendar day cells to appear
    let dayCells = page.locator(calendarSelectors[0]);
    let dayCount = 0;

    for (const selector of calendarSelectors) {
        try {
            await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
        } catch {
            continue;
        }
        dayCells = page.locator(selector);
        dayCount = await dayCells.count();
        console.log(`Selector "${selector}" found ${dayCount} day cells`);
        if (dayCount > 0) break;
    }

    if (dayCount === 0) {
        console.log('No available day cells found with any selector');
        throw new Error('No available days found in calendar');
    }

    console.log(`Total available dates: ${dayCount}`);

    // Step 3: Iterate through all day cells and find the cheapest fare
    let cheapest: DayPrice | null = null;

    for (let i = 0; i < dayCount; i++) {
        const cell = dayCells.nth(i);

        // MakeMyTrip shows prices inside day cells - look for price text
        const priceEl = cell.locator('[class*="fare"], [class*="price"], [class*="Price"], p').last();
        const priceText = await priceEl.textContent().catch(() => null);

        if (!priceText) continue;

        // Extract numeric value from price text like "₹4,523" or "4523"
        const numericStr = priceText.replace(/[^\d]/g, '');
        const price = parseInt(numericStr, 10);

        if (isNaN(price) || price === 0) continue;

        const dateText = await cell.textContent().catch(() => '') ?? '';

        console.log(`  Day ${i}: ${dateText.trim()} -> Rs.${price}`);

        if (!cheapest || price < cheapest.price) {
            cheapest = { element: cell, price, dateText: dateText.trim(), index: i };
        }
    }

    if (cheapest) {
        console.log(`Cheapest: "${cheapest.dateText}" at Rs.${cheapest.price}`);
        await cheapest.element.click();
        await page.waitForTimeout(500);
    } else {
        console.log('No prices found in calendar cells..');
    }

    return cheapest;
}