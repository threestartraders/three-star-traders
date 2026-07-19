import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';
import { perfumes, solLandingImages } from '../data/site';

export default function Products() {
  return <>
    <PageHero eyebrow="SOUL PARFUM" title="The Soul Parfum collection" text="A focused Eau de Parfum portfolio for wholesale, retail, emerging channel and health club supply enquiries." />
    <section className="section"><div className="container">
      <SectionTitle eyebrow="CURRENT EDITIONS" title="Meet the Soul collection" text="Availability, pack configuration and commercial terms are confirmed directly by our team." />
      <div className="collection-list">{perfumes.map((perfume, index) => <Reveal key={perfume.id} className="collection-item">
        <div className="collection-image"><img src={perfume.image} alt={perfume.name} /></div>
        <div className="collection-copy"><span>0{index + 1} · {perfume.format}</span><h2>{perfume.name}</h2><p>{perfume.description}</p><dl><div><dt>Brand</dt><dd>Soul Parfum</dd></div><div><dt>Format</dt><dd>{perfume.format}</dd></div><div><dt>Size</dt><dd>{perfume.size || 'Confirm on enquiry'}</dd></div></dl><Link className="btn primary" to="/contact">Enquire about {perfume.name} <ArrowRight size={17} /></Link></div>
      </Reveal>)}</div>
    </div></section>
    <section className="section alt"><div className="container sol-wide-feature"><img src={solLandingImages[3].src} alt={solLandingImages[3].alt} /><div><span className="eyebrow">SOUL SWISS</span><h2>Designed to stand out in a focused fragrance selection.</h2><p>Contact Three Star Traders for current availability, wholesale discussions and supported sales channels.</p><Link className="text-link" to="/contact">Discuss supply <ArrowRight size={16} /></Link></div></div></section>
  </>;
}
