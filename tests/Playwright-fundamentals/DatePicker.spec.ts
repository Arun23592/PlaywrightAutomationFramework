import { test, expect, Page } from "@playwright/test";

/**
 * Dynamically selects a date on the Delta.com date picker calendar.
 * Navigates forward month-by-month until the target month/year is visible,
 * then clicks the target day.
 */
async function selectDateFromPicker(page: Page, targetDate: Date) {
  const targetMonth = targetDate.toLocaleString("en-US", { month: "long" });
  const targetYear = targetDate.getFullYear().toString();
  const targetDay = targetDate.getDate().toString();

  const calendarHeader = page.locator(".monthYear");
  const nextMonthBtn = page.locator('button[aria-label="Next Month"]');

  // Navigate forward month-by-month until the target month/year is displayed
  for (let attempt = 0; attempt < 12; attempt++) {
    const headerText = await calendarHeader.first().textContent();
    if (headerText?.includes(targetMonth) && headerText?.includes(targetYear)) {
      break;
    }
    await nextMonthBtn.click();
    await page.waitForTimeout(300); // brief pause for calendar animation
  }

  // Click the specific day — Delta uses aria-label like "25 December 2026"
  const dayLabel = `${targetDay} ${targetMonth} ${targetYear}`;
  await page.getByLabel(dayLabel, { exact: true }).click();
}

test.describe("Delta.com Date Picker", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.delta.com/apac/en");

    // Dismiss cookie consent banner if present
    const acceptBtn = page.getByRole("button", { name: "Accept All" });
    if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await acceptBtn.click();
    }
  });

  test("should dynamically select a future departure and return date", async ({ page }) => {

    // --- Step 1: Set Origin (From) ---
    // Origin is rendered as a <button> with label "Origin, BLR, Bangalore, India"
    await page.getByRole("button", { name: /Origin/ }).click();

    // After clicking, a predictive search input appears — clear and type
    const originSearchInput = page.locator('[id^="predictive_search"]');
    await originSearchInput.fill("BLR");
    await page.getByText("BLR Bengaluru, India").click();

    // --- Step 2: Set Destination (To) ---
    // Destination button has a verbose accessible name
    await page.getByRole("button", { name: /Destination/ }).click();
    const destSearchInput = page.getByRole("textbox", { name: "Destination" });
    await destSearchInput.fill("MAA");
    await page.getByText("MAA Chennai, India", { exact: true }).click();

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

    // Click "Done" to confirm the date selection (if present)
    const doneBtn = page.getByRole("button", { name: "Done" });
    if (await doneBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await doneBtn.click();
    }

    // --- Step 6: Assertions ---
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