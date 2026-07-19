import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';
import { solBrandImages } from '../data/site';

export default function Brands() {
  return <>
    <PageHero eyebrow="OUR BRAND" title="Soul Parfum" text="A focused fragrance identity expressed through Desert, Swiss and Nature presentations." />
    <section className="section"><div className="container split">
      <Reveal><SectionTitle eyebrow="THE SOUL IDENTITY" title="A collection with a clear visual character" /><p className="lead">Soul Parfum brings together confident presentation, distinctive bottles and expressive campaign imagery across its current collection.</p><p>Three Star Traders supports business enquiries for Soul Parfum in the UAE, including wholesale, retail, emerging channel and health club opportunities.</p><Link className="text-link" to="/perfumes">Explore the collection <ArrowRight size={16} /></Link></Reveal>
      <Reveal className="sol-story-image tall"><img src={solBrandImages[6].src} alt={solBrandImages[6].alt} /></Reveal>
    </div></section>
    <section className="section alt"><div className="container"><SectionTitle eyebrow="SOUL IN FOCUS" title="The visual world of Soul Parfum" text="Product and campaign imagery from the current Soul Parfum collection." /><div className="sol-editorial-grid">{solBrandImages.map((image, index) => <Reveal key={image.src} className={`sol-editorial-item item-${index + 1}`}><img src={image.src} alt={image.alt} loading="lazy" /></Reveal>)}</div></div></section>
    <section className="cta small"><div className="container"><Reveal><h2>Bring Soul Parfum to your business.</h2><p>Speak with Three Star Traders about product availability, supported channels and commercial supply.</p><Link className="btn primary" to="/contact">Make a Soul Parfum enquiry <ArrowRight size={17} /></Link></Reveal></div></section>
  </>;
}
