const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { SearchPage } = require('../pages/SearchPage');
const fs = require('fs');

let browser;
let page;
let searchPage;

Given('que el usuario abre Mercado Libre', async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  searchPage = new SearchPage(page);
  await searchPage.navigate();
});

When('busca {string}', async function (producto) {
  await searchPage.searchFor(producto);
});

Then('debería ver resultados relacionados con {string}', async function () {
  try {
    await searchPage.expectResults();
  } catch (e) {
    await page.screenshot({ path: 'screenshots/fallo_resultados.png' });
    throw e;
  } finally {
    await browser.close();
  }
});

Then('debería ver un mensaje indicando que no hay resultados', async function () {
  try {
    await searchPage.expectNoResults();
  } catch (e) {
    await page.screenshot({ path: 'screenshots/fallo_sin_resultados.png' });
    throw e;
  } finally {
    await browser.close();
  }
});