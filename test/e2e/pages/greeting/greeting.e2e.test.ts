import pageObject from './greeting.po';

describe('greeting page', () => {
  beforeAll(async () => {
    await page.goto(pageObject.URL);
  });

  it('should show welcome', async () => {
    const title = await pageObject.title(page);
    expect(title).toBe('Hello, Sddtc.');
  });

  it('should react greeting', async () => {
    await pageObject.sayHi(page);
    expect(pageObject.title(page)).resolves.toBe('Hello, Sddtc, again.');
  });

  it('should not double react greeting', async () => {
    await pageObject.sayHi(page);
    expect(pageObject.title(page)).resolves.toBe('Hello, Sddtc, again.');
  });
});
