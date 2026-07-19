import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://threestartraders.com';

const pages: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Soul Parfum UAE | Three Star Traders',
    description: 'Discover Soul Parfum in the UAE through Three Star Traders. Wholesale, retail, emerging channel and health club perfume supply enquiries.',
    canonical: '/',
  },
  '/about': {
    title: 'About Three Star Traders | Soul Parfum UAE',
    description: 'Learn about Three Star Traders, a Dubai-based business presenting Soul Parfum to supported commercial channels in the UAE.',
    canonical: '/about/',
  },
  '/perfumes': {
    title: 'Soul Parfum Collection | Desert, Swiss & Nature',
    description: 'Explore the Soul Parfum collection, including Soul Desert, Soul Swiss and Soul Nature Eau de Parfum editions.',
    canonical: '/perfumes/',
  },
  '/soul-parfum': {
    title: 'Soul Parfum Brand | Three Star Traders UAE',
    description: 'Explore the visual world and current fragrance collection of Soul Parfum, presented in the UAE by Three Star Traders.',
    canonical: '/soul-parfum/',
  },
  '/services': {
    title: 'Soul Parfum Wholesale & Supply Services UAE',
    description: 'Wholesale, distribution, emerging channel and health club supply support for Soul Parfum in the UAE.',
    canonical: '/services/',
  },
  '/distribution': {
    title: 'Soul Parfum Distribution UAE | Three Star Traders',
    description: 'Business-focused Soul Parfum distribution and order coordination for supported UAE sales channels.',
    canonical: '/distribution/',
  },
  '/news': {
    title: 'Soul Parfum & Three Star Traders News',
    description: 'Read Soul Parfum collection, supply and company updates from Three Star Traders in Dubai, UAE.',
    canonical: '/news/',
  },
  '/careers': {
    title: 'Careers | Three Star Traders Dubai',
    description: 'View career information and future opportunities with Three Star Traders in Dubai, UAE.',
    canonical: '/careers/',
  },
  '/contact': {
    title: 'Contact Three Star Traders | Soul Parfum UAE',
    description: 'Contact Three Star Traders about Soul Parfum availability, wholesale supply, retail and supported UAE business channels.',
    canonical: '/contact/',
  },
  '/privacy': {
    title: 'Privacy Policy | Three Star Traders',
    description: 'Read the Three Star Traders website privacy policy and analytics information.',
    canonical: '/privacy/',
  },
  '/terms': {
    title: 'Terms and Conditions | Three Star Traders',
    description: 'Read the terms and conditions for the Three Star Traders website.',
    canonical: '/terms/',
  },
};

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = location.pathname !== '/' ? location.pathname.replace(/\/$/, '') : '/';
    const page = pages[normalizedPath] || pages['/'];
    const canonicalUrl = `${siteUrl}${page.canonical}`;

    document.title = page.title;
    setMeta('meta[name="description"]', page.description);
    setMeta('meta[property="og:title"]', page.title);
    setMeta('meta[property="og:description"]', page.description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', page.title);
    setMeta('meta[name="twitter:description"]', page.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}
