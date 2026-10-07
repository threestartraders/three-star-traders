import { mkdir, readFile, writeFile } from 'node:fs/promises';

const siteUrl = 'https://threestartraders.com';
const distDir = new URL('../dist/', import.meta.url);

const pages = [
  { path: '', title: 'Three Star Traders UAE | Trading & Distribution', description: 'Three Star Traders is a Dubai-based trading and distribution company supporting retailers, commercial buyers and business partners across the UAE.', canonical: '/' },
  { path: 'about', title: 'About Three Star Traders | Dubai, UAE', description: 'Learn about Three Star Traders, a Dubai-based trading and distribution company focused on dependable supply and commercial partnerships.', canonical: '/about/' },
  { path: 'soul-parfum', title: 'Soul Parfum Collection | Desert, Swiss, Nature & Botanica', description: 'Explore Soul Parfum, including Soul Desert, Soul Swiss, Soul Nature and Soul Botanica Eau de Parfum, brand imagery and UAE business supply information.', canonical: '/soul-parfum/' },
  { path: 'services', title: 'Trading & Distribution Services UAE | Three Star Traders', description: 'Explore wholesale trading, distribution, import and export support, brand representation and commercial supply services in the UAE.', canonical: '/services/' },
  { path: 'distribution', title: 'Business Distribution UAE | Three Star Traders', description: 'Business-focused distribution and order coordination for retailers and supported commercial channels in the UAE.', canonical: '/distribution/' },
  { path: 'news', title: 'News & Updates | Three Star Traders', description: 'Read company, supply and commercial updates from Three Star Traders in Dubai, UAE.', canonical: '/news/' },
  { path: 'careers', title: 'Careers | Three Star Traders Dubai', description: 'View career information and future opportunities with Three Star Traders in Dubai, UAE.', canonical: '/careers/' },
  { path: 'contact', title: 'Contact Three Star Traders | Dubai, UAE', description: 'Contact Three Star Traders about sourcing, wholesale supply, distribution and commercial partnerships in the UAE.', canonical: '/contact/' },
  { path: 'privacy', title: 'Privacy Policy | Three Star Traders', description: 'Read the Three Star Traders website privacy policy and analytics information.', canonical: '/privacy/' },
  { path: 'terms', title: 'Terms and Conditions | Three Star Traders', description: 'Read the terms and conditions for the Three Star Traders website.', canonical: '/terms/' },
];

const aliases = [
  { path: 'perfumes', canonical: '/soul-parfum/' },
  { path: 'products', canonical: '/soul-parfum/' },
  { path: 'brands', canonical: '/soul-parfum/' },
];

const template = await readFile(new URL('index.html', distDir), 'utf8');

function render(page, noindex = false) {
  const canonicalUrl = `${siteUrl}${page.canonical}`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${page.title || 'Three Star Traders'}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${page.description || 'Trading and distribution in the UAE by Three Star Traders.'}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${page.title || 'Three Star Traders'}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${page.description || 'Trading and distribution in the UAE by Three Star Traders.'}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${page.title || 'Three Star Traders'}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${page.description || 'Trading and distribution in the UAE by Three Star Traders.'}" />`);
}

for (const page of pages) {
  if (!page.path) continue;
  const pageDir = new URL(`${page.path}/`, distDir);
  await mkdir(pageDir, { recursive: true });
  await writeFile(new URL('index.html', pageDir), render(page));
}

for (const alias of aliases) {
  const aliasDir = new URL(`${alias.path}/`, distDir);
  await mkdir(aliasDir, { recursive: true });
  await writeFile(new URL('index.html', aliasDir), render(alias, true));
}

await writeFile(new URL('404.html', distDir), template);
