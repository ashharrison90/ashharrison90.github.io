describe('theming', () => {
  const themeToggleSelector = '[aria-label="Toggle theme"]'

  beforeEach(async () => {
    await page.goto('http://localhost:5000')
  })

  it('should persist across page navigation', async () => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(false)

    await page.check(themeToggleSelector)
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.click('text=about')
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })

  it('should persist in a new session', async () => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })

  it('should persist across browser refresh', async () => {
    await page.evaluate(() =>
      document.querySelector('[role="main"]')!.scrollTo(0, 100)
    )
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)

    await page.reload()
    expect(await page.isChecked(themeToggleSelector)).toEqual(true)
  })
})

// slight hack to let typescript know this is a module
export {}
