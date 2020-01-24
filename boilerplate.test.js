describe('DibsOnDinner', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4444/');
  });

  it('should be titled "DibsOnDinner"', async () => {
    await expect(page.title()).resolves.toMatch('DibsOnDinner');
  });
});
