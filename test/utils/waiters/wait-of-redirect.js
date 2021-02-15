export default function waitOfRedirect(partOfWaitingUrl) {
   browser.waitUntil(() => browser.getUrl().then((pageUrl) => pageUrl.indexOf(partOfWaitingUrl) > -1), 5000);
}