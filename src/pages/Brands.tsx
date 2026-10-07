import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';
import { perfumes, solBrandImages, solLandingImages } from '../data/site';

export default function Brands() {
  return <>
    <PageHero eyebrow="OUR BRAND" title="Soul Parfum" text="A focused fragrance identity expressed through Desert, Swiss, Nature and Botanica presentations." />
    <section className="section"><div className="container split">
      <Reveal><SectionTitle eyebrow="THE SOUL IDENTITY" title="A collection with a clear visual character" /><p className="lead">Soul Parfum brings together confident presentation, distinctive bottles and expressive campaign imagery across its current collection.</p><p>Three Star Traders supports business enquiries for Soul Parfum in the UAE, including wholesale, retail, emerging channel and health club opportunities.</p><a className="text-link" href="#collection">Explore the collection <ArrowRight size={16} /></a></Reveal>
      <Reveal className="sol-story-image tall"><img src={solBrandImages[6].src} alt={solBrandImages[6].alt} /></Reveal>
    </div></section>
    <section className="section alt" id="collection"><div className="container">
      <SectionTitle eyebrow="CURRENT EDITIONS" title="Meet the Soul collection" text="Availability, pack configuration and commercial terms are confirmed directly by our team." />
      <div className="collection-list">{perfumes.map((perfume, index) => <Reveal key={perfume.id} className="collection-item">
        <div className="collection-image"><img src={perfume.image} alt={`${perfume.name} ${perfume.format}`} style={{ objectFit: perfume.imageFit }} loading="lazy" /></div>
        <div className="collection-copy"><span>0{index + 1} · {perfume.format}</span><h2>{perfume.name}</h2><p>{perfume.description}</p><dl><div><dt>Brand</dt><dd>Soul Parfum</dd></div><div><dt>Format</dt><dd>{perfume.format}</dd></div><div><dt>Size</dt><dd>{perfume.size || 'Confirm on enquiry'}</dd></div></dl><Link className="btn primary" to="/contact">Enquire about {perfume.name} <ArrowRight size={17} /></Link></div>
      </Reveal>)}</div>
    </div></section>
    <section className="section"><div className="container sol-wide-feature"><img src={solLandingImages[3].src} alt={solLandingImages[3].alt} /><div><span className="eyebrow">SOUL SWISS</span><h2>Designed to stand out in a focused fragrance selection.</h2><p>Contact Three Star Traders for current availability, wholesale discussions and supported sales channels.</p><Link className="text-link" to="/contact">Discuss supply <ArrowRight size={16} /></Link></div></div></section>
    <section className="section alt"><div className="container"><SectionTitle eyebrow="SOUL IN FOCUS" title="The visual world of Soul Parfum" text="Product and campaign imagery from the current Soul Parfum collection." /><div className="sol-editorial-grid">{solBrandImages.map((image, index) => <Reveal key={image.src} className={`sol-editorial-item item-${index + 1}`}><img src={image.src} alt={image.alt} loading="lazy" /></Reveal>)}</div></div></section>
    <section className="cta small"><div className="container"><Reveal><h2>Bring Soul Parfum to your business.</h2><p>Speak with Three Star Traders about product availability, supported channels and commercial supply.</p><Link className="btn primary" to="/contact">Make a Soul Parfum enquiry <ArrowRight size={17} /></Link></Reveal></div></section>
  </>;
}
