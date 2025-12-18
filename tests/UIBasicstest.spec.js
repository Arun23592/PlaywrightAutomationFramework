const {test, expect} = require('@playwright/test');
const { assert } = require('console');

test('Browser context Playwright', async ({browser})=>{

        const context =  await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await page.locator('#username').fill("rahulshettyacademy");
        await page.locator("[type='password']").fill("learnings");
        await page.locator('#signInBtn').click();
        console.log(await page.locator("[style*='block']").textContent());

        await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");
        
        await context.close();

});

test('Page Playwright test', async ({page})=>{

    // const context =   browser.newContext();
    // const page = await context.newPage();

    await test.step("1. Navigate to google home page", async() => {
        await page.goto("https://www.google.com/");
        console.log(await page.title());
    })
    
    await test.step("2. Verify the page title", async() => {
        await expect(page).toHaveTitle("Google");
        
    })
    


});