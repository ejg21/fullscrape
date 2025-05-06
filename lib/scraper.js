const puppeteer = require('puppeteer');

async function scrapePage(url) {
  // Launch the browser with required arguments
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium-browser',  // Ensure this is correct for your environment
    args: ['--no-sandbox', '--disable-gpu'],
  });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url);

  // Scrape the page title as an example
  const pageTitle = await page.title();

  // Close the browser
  await browser.close();

  // Return the scraped title
  return pageTitle;
}

// Export the scrapePage function so it can be imported in other files
module.exports = { scrapePage };

// Example usage:
async function main() {
  const url = 'https://example.com';  // Replace with the URL you want to scrape
  const title = await scrapePage(url);
  console.log('Page Title:', title);
}

main();
