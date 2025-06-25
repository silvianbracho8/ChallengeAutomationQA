class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input[name="as_word"]';
    this.results = '.ui-search-result';
    this.noResultsMessage = '.ui-search-search-result__content-wrapper';
  }

  async navigate() {
    await this.page.goto('https://www.mercadolibre.com.ar/');
  }

  async searchFor(product) {
    await this.page.fill(this.searchInput, product);
    await this.page.keyboard.press('Enter');
  }

  async expectResults() {
    await this.page.waitForSelector(this.results);
    const count = await this.page.locator(this.results).count();
    if (count === 0) throw new Error('No results found');
  }

  async expectNoResults() {
    await this.page.waitForSelector(this.noResultsMessage);
    const message = await this.page.locator(this.noResultsMessage).textContent();
    if (!message.includes('No encontramos resultados')) throw new Error('Results were found unexpectedly');
  }
}

module.exports = { SearchPage };