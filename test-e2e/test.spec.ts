// hack for now
import ''

describe('e2e test', () => {
  it('Home page should have the correct title', async () => {
    await page.goto('http://localhost:5000')
    expect(await page.title()).toBe("hi, i'm ash")
  })
})
