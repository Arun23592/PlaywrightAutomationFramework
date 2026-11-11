import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Login (zoho crm)", () => {

    test("Valid user lands on inventory", async ({ page }) => {

        await page.goto("https://crm.zoho.in/");
        await page.getByRole('link', { name: 'Sign In' }).click();
    })
})