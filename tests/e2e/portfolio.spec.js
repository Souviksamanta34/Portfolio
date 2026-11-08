import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("case study tags and actions align across columns", async ({ page }) => {
  for (const width of [850, 1200]) {
    await page.setViewportSize({ width, height: 900 });
    const cards = page.locator(".case-card");
    const tagPositions = await cards.locator(".case-body > .tags").evaluateAll(
      (elements) => elements.map((element) => element.getBoundingClientRect().top),
    );
    const actionPositions = await cards.locator(".case-bottom").evaluateAll(
      (elements) => elements.map((element) => element.getBoundingClientRect().top),
    );
    expect(Math.abs(tagPositions[0] - tagPositions[1]), `tags at ${width}px`).toBeLessThan(2);
    expect(Math.abs(actionPositions[0] - actionPositions[1]), `actions at ${width}px`).toBeLessThan(2);
  }
});

test("loads current professional content without browser errors or horizontal overflow", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Engineering AI.Delivering impact.",
  );
  await expect(
    page.getByRole("heading", { name: "System Engineer", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("2 years", { exact: true })).toBeVisible();
  await expect(page.locator("#projects article")).toHaveCount(3);
  for (const id of [
    "home",
    "work",
    "projects",
    "experience",
    "about",
    "contact",
  ]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
      `overflow at ${id}`,
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("filters public projects and restores the complete list", async ({
  page,
}) => {
  const filters = page.getByRole("group", { name: "Filter projects" });
  for (const [category, title] of [
    ["Web", "Gruham"],
    ["Mobile", "StokiGen"],
    ["ML", "Neural classification"],
  ]) {
    await filters.getByRole("button", { name: category, exact: true }).click();
    await expect(page.locator("#projects article")).toHaveCount(1);
    await expect(
      page.locator("#projects").getByRole("heading", { name: title }),
    ).toBeVisible();
    await expect(
      filters.getByRole("button", { name: category, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  await filters.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator("#projects article")).toHaveCount(3);
});

test("case studies support keyboard activation, modal focus, Escape and scroll restoration", async ({
  page,
}) => {
  const trigger = page.getByRole("button", {
    name: "View Agentic incident remediation",
    exact: true,
  });
  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", {
    name: "Agentic incident remediation",
  });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Close case study" }),
  ).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() => !!document.activeElement.closest("dialog")),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await page
    .getByRole("button", {
      name: "View Financial document intelligence",
      exact: true,
    })
    .click();
  await expect(page.getByRole("dialog")).toContainText("10-record test set");
  await page.getByRole("button", { name: "Close case study" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("mobile menu supports toggle, Escape and section navigation", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "desktop-chrome",
    "Mobile navigation case",
  );
  const toggle = page.getByRole("button", { name: /Open menu|Close menu/ });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("navigation").getByRole("link", { name: "Selected work" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Experience", exact: true })
    .click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("legacy project bookmarks reach selected work", async ({ page }) => {
  await page.goto("/#/projects");
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test("download serves a real PDF and all external links use HTTPS and opener protection", async ({
  page,
  request,
}) => {
  const download = page.getByRole("link", { name: /Download résumé/ });
  const href = await download.getAttribute("href");
  expect(await download.getAttribute("download")).not.toBeNull();
  const response = await request.get(href);
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const external = await page
    .locator('a[target="_blank"]')
    .evaluateAll((links) => links.map((a) => ({ href: a.href, rel: a.rel })));
  expect(external.length).toBeGreaterThan(3);
  for (const link of external) {
    expect(new URL(link.href).protocol).toBe("https:");
    expect(link.rel).toContain("noopener");
    expect(link.rel).toContain("noreferrer");
  }
});

test("clipboard success and denied access have readable status feedback", async ({
  page,
}) => {
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.__copiedEmail = text;
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByText("Email copied", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => window.__copiedEmail)).toBe(
    "souviksamanta059@gmail.com",
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("denied");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(
    page.getByText("Copy unavailable. Use the email link to get in touch."),
  ).toBeVisible();
});

test("reduced-motion users can navigate and inspect case studies", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  expect(
    await page.evaluate(
      () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    ),
  ).toBe(true);
  const animation = await page
    .locator("html")
    .evaluate((el) => getComputedStyle(el).scrollBehavior);
  expect(animation).not.toBe("smooth");
  await page
    .getByRole("button", {
      name: "Read case study: Agentic incident remediation",
    })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("page and open dialog have no critical or serious axe violations", async ({
  page,
}) => {
  const pageResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    pageResults.violations.filter((v) =>
      ["critical", "serious"].includes(v.impact),
    ),
  ).toEqual([]);
  await page
    .getByRole("button", {
      name: "View Agentic incident remediation",
      exact: true,
    })
    .click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    dialogResults.violations.filter((v) =>
      ["critical", "serious"].includes(v.impact),
    ),
  ).toEqual([]);
});
