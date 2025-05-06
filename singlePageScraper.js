const { scrapePage } = require('./lib/scraper');

(async () => {
  const url = 'https://example.com'; // Replace this with the URL you want to test
  try {
    const pageTitle = await scrapePage(url);
    console.log('Scraped title:', pageTitle);
  } catch (error) {
    console.error('Error scraping page:', error);
  }
})();
