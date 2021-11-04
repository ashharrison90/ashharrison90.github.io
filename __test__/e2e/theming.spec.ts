import { test, expect } from '@playwright/test'

test.describe('theming', () => {
  const themeToggleSelector = '[aria-label="Toggle theme"]'

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should persist across page navigation', async ({ page }) => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(false)

    await page.check(themeToggleSelector)
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.click('text=about')
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })

  test('should persist across browser refresh', async ({ page }) => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(false)

    await page.check(themeToggleSelector)
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.reload()
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })
})

// slight hack to let typescript know this is a module
export {}
