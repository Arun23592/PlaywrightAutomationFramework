import { test, expect } from "@playwright/test";

test.describe("Login (zoho crm)", () => {

    test("Valid user lands on inventory", async ({ page }) => {

        await page.goto("https://crm.zoho.in/");

    })
})