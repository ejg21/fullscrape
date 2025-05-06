const puppeteer = require('puppeteer');

async function scrapePage(url) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium-browser',  // Ensure this is correct for your environment
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.goto(url);

  // Scrape the page title as an example
  const pageTitle = await page.title();

  await browser.close();

  return pageTitle;
}

module.exports = { scrapePage };
