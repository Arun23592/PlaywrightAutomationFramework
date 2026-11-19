import { test, expect } from "@playwright/test";
import { link } from "fs";

test.describe("Login (zoho crm)", () => {

    test("Valid user lands on inventory", async ({ page }) => {

        await page.goto("https://crm.zoho.in/");
        await page.getByRole('link', { name: 'Sign In' }).click();
        await page.waitForTimeout(3000);
        await page.getByPlaceholder('Email address or mobile number').fill('arunsubramani20@gmail.com');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByPlaceholder('Enter password').fill('WorkHard#2026!Go');
        await page.locator('#nextbtn').click();
        await page.waitForTimeout(3000);


    })

})