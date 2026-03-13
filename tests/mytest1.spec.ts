import { test, expect } from "@playwright/test";

test("launch speedtest website", async ({ page }) => {

  await page.goto("https://www.speedtest.net/");

  console.log(await page.url())

  await expect(page).toHaveURL("https://www.speedtest.net/")


});