import assert from 'node:assert/strict';
const { initializeAnalytics, trackPageView } = await import('../src/analytics.ts');

// Importing and initializing without a browser should remain safe.
initializeAnalytics();

const scripts = [];
const window = { location: { href: 'https://threestartraders.com/' } };
const document = {
  title: 'Three Star Traders',
  createElement: () => ({}),
  head: { appendChild: (script) => scripts.push(script) },
};
globalThis.window = window;
globalThis.document = document;

// The Google loader distinguishes Arguments objects from ordinary arrays.
function commands() {
  return window.dataLayer.map((entry) => {
    assert.equal(Object.prototype.toString.call(entry), '[object Arguments]');
    return Array.from(entry);
  });
}

initializeAnalytics();
initializeAnalytics();
assert.equal(scripts.length, 1, 'Initialize the tag only once');
assert.equal(scripts[0].async, true);
assert.equal(scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-6M9SP3KBVP');
assert.equal(commands().length, 2);
assert.equal(commands()[0][0], 'js');
assert.equal(commands()[1][0], 'config');
assert.equal(commands()[1][1], 'G-6M9SP3KBVP');
assert.equal(commands()[1][2].send_page_view, false);

trackPageView('/');
trackPageView('/'); // React StrictMode repeats effects in development.
window.location.href = 'https://threestartraders.com/contact';
document.title = 'Contact Three Star Traders';
trackPageView('/contact');
window.location.href = 'https://threestartraders.com/';
document.title = 'Three Star Traders';
trackPageView('/'); // Returning to a previously visited route must count again.

const pageViews = commands().slice(2);
assert.deepEqual(pageViews.map(([command, name, parameters]) => [command, name, parameters.page_path]), [
  ['event', 'page_view', '/'],
  ['event', 'page_view', '/contact'],
  ['event', 'page_view', '/'],
]);
assert.equal(pageViews[1][2].page_title, 'Contact Three Star Traders');
assert.equal(pageViews[1][2].page_location, 'https://threestartraders.com/contact');

delete globalThis.window;
delete globalThis.document;

console.log('Analytics verification passed: Google command format, initialization, and route page views.');
