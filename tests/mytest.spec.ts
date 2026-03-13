import { test, expect } from "@playwright/test";

test("launch speedtest website", async ({ page }) => {

  await page.goto("https://www.speedtest.net/");

  const title = await page.title();
  console.log(title);

  await expect(page).toHaveTitle(/Speedtest by Ookla/);

});