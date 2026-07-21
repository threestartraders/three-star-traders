import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://threestartraders.com';

const pages: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Three Star Traders UAE | Trading & Distribution',
    description: 'Three Star Traders is a Dubai-based trading and distribution company supporting retailers, commercial buyers and business partners across the UAE.',
    canonical: '/',
  },
  '/about': {
    title: 'About Three Star Traders | Dubai, UAE',
    description: 'Learn about Three Star Traders, a Dubai-based trading and distribution company focused on dependable supply and commercial partnerships.',
    canonical: '/about/',
  },
  '/soul-parfum': {
    title: 'Soul Parfum Collection | Desert, Swiss & Nature',
    description: 'Explore Soul Parfum, including Soul Desert, Soul Swiss and Soul Nature Eau de Parfum, brand imagery and UAE business supply information.',
    canonical: '/soul-parfum/',
  },
  '/services': {
    title: 'Trading & Distribution Services UAE | Three Star Traders',
    description: 'Explore wholesale trading, distribution, import and export support, brand representation and commercial supply services in the UAE.',
    canonical: '/services/',
  },
  '/distribution': {
    title: 'Business Distribution UAE | Three Star Traders',
    description: 'Business-focused distribution and order coordination for retailers and supported commercial channels in the UAE.',
    canonical: '/distribution/',
  },
  '/news': {
    title: 'News & Updates | Three Star Traders',
    description: 'Read company, supply and commercial updates from Three Star Traders in Dubai, UAE.',
    canonical: '/news/',
  },
  '/careers': {
    title: 'Careers | Three Star Traders Dubai',
    description: 'View career information and future opportunities with Three Star Traders in Dubai, UAE.',
    canonical: '/careers/',
  },
  '/contact': {
    title: 'Contact Three Star Traders | Dubai, UAE',
    description: 'Contact Three Star Traders about sourcing, wholesale supply, distribution and commercial partnerships in the UAE.',
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
