/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  
  waitOfRedirect() {
    browser.waitUntil(() => browser.getUrl().then((pageUrl) => pageUrl.indexOf('home') > -1), 5000);
  }
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
}