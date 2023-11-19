import { test, expect } from '@playwright/test'

test.describe('theming', () => {
  const themeToggleSelector = '[aria-label="Toggle theme"]'

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should persist across page navigation and browser refresh', async ({
    page,
  }) => {
    const mainPage = page.locator('[role="main"]')
    await expect(mainPage).toBeVisible()
    await page.evaluate(() => window.scrollTo(0, 100))
    expect(await page.isChecked(themeToggleSelector)).toEqual(false)

    await page.check(themeToggleSelector)
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.click('text=about')
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.reload()
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })
})
