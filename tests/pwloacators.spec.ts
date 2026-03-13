import {test,expect, Locator} from "@playwright/test"

test("verify playwright locators", async ({page})=>{

  await page.goto("https://demo.nopcommerce.com/");


  //get by alt text
  const logo:Locator =  page.getByAltText("nopCommerce demo store")

  await expect(logo).toBeVisible();
  
// get by text

await expect(page.getByText("Welcome to our store")).toBeVisible()

//await expect(page.getByRole('link',{name:'Register'}).click())

await page.getByRole('link', { name: 'Register' }).click();

//await expect(page.getByRole('heading',{name:'Register'})).toBeVisible()

//await expect(page.getByText("Register")).toBeVisible()
//await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
//cawait expect(page.getByRole('heading', { name: /Register/ })).toBeVisible();

await expect(page.getByText("Your Personal Details")).toBeVisible()

await page.getByLabel('First name:').fill("test")

await page.getByLabel('Last name:').fill("testimg last")

await page.getByLabel('Email:').fill("last@gmail.com")

await page.getByPlaceholder("Search store").fill("mobile")


})