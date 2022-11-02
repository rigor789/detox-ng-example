describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Sergio'))).toBeVisible()
  })

  it('should be able to navigate', async () => {
    await element(by.text('Sergio')).tap()
    await expect(element(by.text('Details'))).toBeVisible()
    await expect(element(by.text('Sergio'))).toBeVisible()
    await expect(element(by.text('Midfielder'))).toBeVisible()

    // navigate back
    await element(by.text('My App')).tap()
  })

  it('shoudl be able to scroll', async () => {
    const lv = element(by.id('listView'));
    await expect(lv).toBeVisible()
    await lv.scroll(200, 'down')

    await expect(element(by.text('Masip'))).toBeVisible()
  })
})
