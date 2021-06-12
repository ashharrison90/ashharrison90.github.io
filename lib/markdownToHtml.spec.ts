import markdownToHtml from './markdownToHtml'

describe('markdownToHtml', () => {
  it('converts markdown to html', async () => {
    const result = await markdownToHtml('# foo')
    expect(result).toEqual('<h1>foo</h1>\n')
  })
})
