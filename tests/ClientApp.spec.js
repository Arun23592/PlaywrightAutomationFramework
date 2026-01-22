const {test, expect} = require('@playwright/test');
const { assert } = require('console');

test.skip('Browser context Playwright', async ({page})=>{

        // const context =  await browser.newContext();
        // const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client");
        console.log(await page.title());
        await page.locator('#userEmail').fill("anshika@gmail.com");
        await page.locator('#userPassword').fill("Iamking@000");
        await page.locator('#login').click();
        await page.waitForLoadState('networkidle');

        await page.locator('.card-body b').first().waitFor();

        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);
        //console.log(await page.locator("[style*='block']").textContent());

        //await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");

        await page.close();

});

test.only('UI controls test', async ({page})=>{

    // const context =   browser.newContext();
    // const page = await context.newPage();

    await test.step("1. Enter the details and Login to the application", async() => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.locator("#username").fill("rahulshettyacademy");
        await page.locator("#password").fill("learning");
        // await page.locator("//span[normalize-space()='User']").click();

        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        console.log(await page.locator(".radiotextsty").last().isChecked());
        expect(await page.locator(".radiotextsty").last()).toBeChecked();

        const dropdown =  page.locator("select.form-control");
        await dropdown.selectOption("consult");

        await page.locator("#terms").click();
        // await expect(page.locator("#terms")).toBeChecked();
        
        await expect(page.locator("#terms")).toBeChecked();

        await page.locator("#terms").uncheck();

        expect(await page.locator("#terms").isChecked()).toBeFalsy();

        await expect(documentLink).toHaveAttribute("class", "blinkingText");

        //assertion
        
        await page.pause();

    })
    
});


test('Child window handle', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])  //new page is opened

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
    await page.pause();
})