const{test, expect} = require('@playwright/test');


test('user registration', async({page})=> {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("//a[normalize-space()='Register here']").click();
  console.log(await page.title());

  await page.locator("#firstName").fill("arun");
  await page.locator("#lastName").fill("23592");
  await page.locator("#userEmail").fill("arunsubramani20@gmail.com");
  await page.locator("#userMobile").fill("9831070364");

  const dropdown = await page.getByRole('combobox');
  await dropdown.selectOption("Engineer");

   await page.getByRole('radio').last().click();
  console.log(await page.getByRole('radio').last().isChecked());
  expect(await page.getByRole('radio').last()).toBeChecked();

  await page.locator('#userPassword').fill("Pass@1234");
  await page.locator('#confirmPassword').fill("Pass@1234");

  await page.getByRole('checkbox').click();
  expect(await page.getByRole('checkbox')).toBeChecked();


  await page.getByRole('button').click();

  const accountCreated = await page.locator("h1.headcolor").textContent()
  await expect(accountCreated).toMatch("Account Created Successfully");


  await page.locator("button.btn.btn-primary").click();

  await page.waitForLoadState('networkidle');

  console.log(await page.title());

  await page.pause();
  
})


test.only('Login to the client app', async ({page})=>{
    page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.locator("#userEmail").fill("arunsubramani20@gmail.com");
    await page.locator("#userPassword").fill("Pass@1234");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');

    await page.locator('.card-body b').first().waitFor();

    const products = await page.locator('.card-body b');
    const productName = await page.locator('ZARA COAT 3');

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);


    const count = await products.count();

    for(let i=0; i<count; i++){
     if(await products.nth(i).locator("b").textContent() === productName){
        await products.nth(i).locator("text=Add To Cart").click();
        break;
     }
    }




});