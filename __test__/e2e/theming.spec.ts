// hack for now
import ''

describe('theming', () => {
  const themeToggleSelector = '[aria-label="Toggle theme"]'

  beforeEach(async () => {
    await page.goto('http://localhost:5000')
  })

  it('should persist across pages', async () => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(false)

    await page.check(themeToggleSelector)
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.click('text=about')
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.click('text=posts')
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })
})
