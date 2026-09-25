import { test, expect, Page } from "@playwright/test";

/**
 * Dynamically selects a date on the Delta.com date picker calendar.
 * The calendar shows two months side-by-side with h2 headings (e.g. "September 2026").
 * Days are gridcells with accessible names like "October 1, 2026".
 * Navigates forward month-by-month until the target month/year is visible,
 * then clicks the target day.
 */
async function selectDateFromPicker(page: Page, targetDate: Date) {
    const targetMonth = targetDate.toLocaleString("en-US", { month: "long" });   // "October"
    const targetYear = targetDate.getFullYear().toString();                       // "2026"
    const targetDay = targetDate.getDate().toString();                            // "1"
    const monthYearLabel = `${targetMonth} ${targetYear}`;                        // "October 2026"

    // The calendar dialog shows two months with h2 headings
    const calendarDialog = page.getByRole("dialog", { name: "Choose Dates" });
    const nextMonthBtn = calendarDialog.getByRole("button", { name: /Next month/i });

    // Navigate forward until the target month heading is visible (max 12 clicks)
    for (let attempt = 0; attempt < 12; attempt++) {
        const monthHeading = calendarDialog.getByRole("heading", { name: monthYearLabel });
        if (await monthHeading.isVisible().catch(() => false)) {
            break;
        }
        await nextMonthBtn.click();
        await page.waitForTimeout(300);
    }

    // Click the target day button — each day has a wrapper div + button, both with role="gridcell"
    // Target the <button> specifically via its aria-label (e.g. "October 1, 2026")
    const dayLabel = `${targetMonth} ${targetDay}, ${targetYear}`;
    await calendarDialog.locator(`button[aria-label="${dayLabel}"]`).click();
}

test.describe("Delta.com Date Picker", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.delta.com/apac/en");

        // Dismiss cookie consent banner if present
        const acceptBtn = page.getByRole("button", { name: "Accept All" });
        await acceptBtn.click({ timeout: 5000 }).catch(() => { });
    });

    test("should dynamically select a future departure and return date", async ({ page }) => {

        // --- Step 1: Set Origin (From) ---
        await page.getByRole("button", { name: /Origin/ }).click();
        const originSearchInput = page.getByRole("textbox", { name: "Origin" });
        await originSearchInput.fill("BLR");
        await page.getByRole("option", { name: /BLR.*Bangalore/ }).click();

        // --- Step 2: Set Destination (To) ---
        await page.getByRole("button", { name: /Destination/ }).click();
        const destSearchInput = page.getByRole("textbox", { name: /Destination/i });
        await destSearchInput.fill("MAA");
        await page.getByRole("option", { name: /MAA.*Chennai/ }).click();

        // --- Step 3: Dynamically compute target dates ---
        const today = new Date();

        const departureDate = new Date(today);
        departureDate.setDate(today.getDate() + 7); // 1 week from today

        const returnDate = new Date(departureDate);
        returnDate.setDate(departureDate.getDate() + 5); // 5 days after departure

        // --- Step 4: Open date picker and select departure date ---
        await page.getByRole("button", { name: /Depart/ }).click();
        await selectDateFromPicker(page, departureDate);

        // --- Step 5: Select return date (calendar stays open after departure) ---
        await selectDateFromPicker(page, returnDate);

        // --- Step 6: Click "Done" to confirm ---
        await page.getByRole("button", { name: "Done" }).click();

        // --- Step 7: Assertions ---
        const departureDayFormatted = departureDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
        const returnDayFormatted = returnDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });

        // Verify the selected dates are reflected on the booking widget
        await expect(page.getByText(departureDayFormatted).first()).toBeVisible();
        await expect(page.getByText(returnDayFormatted).first()).toBeVisible();
    });
});