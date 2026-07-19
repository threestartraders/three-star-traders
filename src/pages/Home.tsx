import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Gem, PackageCheck } from 'lucide-react';
import { Reveal, SectionTitle } from '../components/UI';
import { perfumes, services, solBrandImages, solLandingImages, stats } from '../data/site';

export default function Home() {
  return <>
    <section className="hero sol-hero"><div className="hero-grid container">
      <Reveal>
        <span className="eyebrow gold">SOUL PARFUM · UAE SUPPLY</span>
        <h1>One perfume brand.<br /><em>A distinct presence.</em></h1>
        <p>Three Star Traders presents Soul Parfum for retailers, emerging channels, health clubs and commercial buyers seeking a confident fragrance offering.</p>
        <div className="actions"><Link className="btn primary" to="/perfumes">Explore Soul Parfum <ArrowRight size={18} /></Link><Link className="btn ghost" to="/contact">Make a supply enquiry</Link></div>
      </Reveal>
      <Reveal delay={.15} className="sol-hero-feature">
        <figure><img src={solLandingImages[2].src} alt={solLandingImages[2].alt} /><figcaption><span>Soul Nature</span><strong>Eau de Parfum</strong></figcaption></figure>
      </Reveal>
    </div></section>

    <section className="stats container">{stats.map((stat, index) => <Reveal key={stat.label} delay={index * .08}><strong>{stat.value}</strong><span>{stat.label}</span></Reveal>)}</section>

    <section className="section"><div className="container split">
      <Reveal>
        <SectionTitle eyebrow="OUR FOCUS" title="A dedicated fragrance portfolio built around Soul" />
        <p className="lead">Our perfume business is intentionally focused: one brand, a clear collection and direct support for commercial supply enquiries.</p>
        <ul className="checklist"><li><CheckCircle2 /> Soul Parfum collection</li><li><CheckCircle2 /> Wholesale and retail supply</li><li><CheckCircle2 /> Emerging channel support</li><li><CheckCircle2 /> Health club supply enquiries</li></ul>
        <Link className="text-link" to="/soul-parfum">Discover the Soul brand <ArrowRight size={16} /></Link>
      </Reveal>
      <Reveal className="sol-story-image"><img src={solBrandImages[3].src} alt={solBrandImages[3].alt} /></Reveal>
    </div></section>

    <section className="section alt"><div className="container">
      <div className="title-row"><SectionTitle eyebrow="SOUL COLLECTION" title="Three distinctive presentations" text="Explore the current Soul Parfum editions and contact our team for availability and commercial terms." /><Link className="text-link" to="/perfumes">View the collection <ArrowRight size={16} /></Link></div>
      <div className="cards three perfume-grid">{perfumes.map((perfume, index) => <Reveal key={perfume.id} delay={index * .06} className="card perfume-card"><img src={perfume.image} alt={perfume.name} /><div className="perfume-card-body"><small>{perfume.format}</small><h3>{perfume.name}</h3><p>{perfume.description}</p><span className="brand-pill">{perfume.size || 'Size on enquiry'}</span></div></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <SectionTitle eyebrow="BUSINESS SUPPORT" title="From perfume enquiry to dependable supply" text="Commercial support shaped around the channels we currently serve." />
      <div className="cards three">{services.map((service, index) => <Reveal key={service.title} delay={index * .05} className="card service-card"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p></Reveal>)}</div>
    </div></section>

    <section className="sol-brand-band"><div className="container"><Gem /><span>FOCUSED PERFUME PORTFOLIO</span><strong>SOUL PARFUM</strong><span>UAE BUSINESS SUPPLY</span><PackageCheck /></div></section>

    <section className="cta"><div className="container"><Reveal><span className="eyebrow gold">SOUL PARFUM ENQUIRIES</span><h2>Interested in supplying Soul Parfum to your customers?</h2><p>Tell us about your business, preferred channel and requirements. Our team will respond with availability and the appropriate next step.</p><Link className="btn primary" to="/contact">Start an enquiry <ArrowRight size={18} /></Link></Reveal></div></section>
  </>;
}
