import { Page } from 'puppeteer';

export default {
  URL: 'http://0.0.0.0:3333/',
  title(page: Page): Promise<string> {
    return page.evaluate(() => document.querySelector('.title')!.innerHTML)
  },
  sayHi(page: Page): Promise<void> {
    return page.click('.title + button');
  }
}
