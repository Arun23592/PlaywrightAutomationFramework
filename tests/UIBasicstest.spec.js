const {test, expect} = require('@playwright/test');

test('Browser context Playwright', async ({browser})=>{

        const context =  await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());

});

test('Page Playwright test', async ({page})=>{

    // const context =   browser.newContext();
    // const page = await context.newPage();

    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});