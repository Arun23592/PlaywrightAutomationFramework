import { Page, test } from "@playwright/test";


test("test airtel slider", async ({ page }) => {
    await page.goto('https://www.airtel.in/');

    const texts = await page.locator("//div[contains(@class,'slider') or contains(@class,'carousel')]//div[contains(@class,'slide')]//h1 | //h2 | //p").allTextContents();
    console.log(texts);

})