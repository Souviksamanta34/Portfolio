import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("certifications navigate, reload, and return without overflow", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".certification-card")).toHaveCount(3);
  await page.getByRole("link", { name: "View all certifications", exact: true }).click();
  await expect(page).toHaveURL(/#\/certifications$/);
  await expect(page.locator("h1")).toBeFocused();
  await expect(page.locator(".certification-card")).toHaveCount(8);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("All certifications.");
  await expect(page).toHaveTitle("Certifications | Souvik Samanta");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole("link", { name: /Back to portfolio/ }).click();
  await expect(page.locator(".certification-card")).toHaveCount(3);
  await expect(page.locator("#certifications-title")).toBeInViewport();
  await page.goBack();
  await expect(page.locator(".certification-card")).toHaveCount(8);
  await page.goForward();
  await expect(page.locator(".certification-card")).toHaveCount(3);
});
