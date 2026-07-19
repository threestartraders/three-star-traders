import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2, PackageCheck, Truck, Warehouse } from 'lucide-react';
import { Reveal, SectionTitle } from '../components/UI';
import { services, stats } from '../data/site';

export default function Home() {
  return <>
    <section className="hero"><div className="hero-grid container">
      <Reveal>
        <span className="eyebrow gold">UAE TRADING &amp; DISTRIBUTION</span>
        <h1>Dependable products.<br /><em>Stronger partnerships.</em></h1>
        <p>Three Star Traders LLC supports retailers, hospitality operators and commercial customers through reliable sourcing, distribution and responsive service.</p>
        <div className="actions"><Link className="btn primary" to="/soul-parfum">Explore Soul Parfum <ArrowRight size={18} /></Link><Link className="btn ghost" to="/contact">Become a partner</Link></div>
      </Reveal>
      <Reveal delay={.15} className="hero-visual">
        <div className="visual-card main"><span>TRADE</span><strong>Built on reliability</strong><p>From product selection to final delivery, every step is designed around consistency.</p></div>
        <div className="visual-card float one"><Truck /> Efficient delivery</div>
        <div className="visual-card float two"><PackageCheck /> Quality selection</div>
      </Reveal>
    </div></section>

    <section className="stats container">{stats.map((stat, index) => <Reveal key={stat.label} delay={index * .08}><strong>{stat.value}</strong><span>{stat.label}</span></Reveal>)}</section>

    <section className="section"><div className="container split">
      <Reveal>
        <SectionTitle eyebrow="WHO WE ARE" title="A practical trading partner for growing businesses" />
        <p className="lead">We combine market understanding, disciplined fulfilment and personal service to help customers source the products they need with confidence.</p>
        <ul className="checklist"><li><CheckCircle2 /> Consistent product availability</li><li><CheckCircle2 /> Clear commercial communication</li><li><CheckCircle2 /> Flexible supply solutions</li><li><CheckCircle2 /> Long-term supplier relationships</li></ul>
        <Link className="text-link" to="/about">Discover our company <ArrowRight size={16} /></Link>
      </Reveal>
      <Reveal className="feature-panel">
        <div><Globe2 /><h3>Connected sourcing</h3><p>Products and partners selected to match market demand.</p></div>
        <div><Warehouse /><h3>Supply readiness</h3><p>Structured handling for wholesale and commercial orders.</p></div>
      </Reveal>
    </div></section>

    <section className="section alt"><div className="container">
      <SectionTitle eyebrow="OUR CAPABILITIES" title="Services that move business forward" text="A focused service portfolio for buyers and commercial partners." />
      <div className="cards three">{services.map((service, index) => <Reveal key={service.title} delay={index * .05} className="card service-card"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p></Reveal>)}</div>
    </div></section>

    <section className="brand-strip"><div className="container"><span>FEATURED BRAND</span><strong>SOUL PARFUM</strong><strong>SOUL DESERT</strong><strong>SOUL SWISS</strong><strong>SOUL NATURE</strong></div></section>

    <section className="cta"><div className="container"><Reveal><span className="eyebrow gold">LET&apos;S WORK TOGETHER</span><h2>Looking for a dependable supply or distribution partner?</h2><p>Tell us what your business needs. Our team will review your enquiry and respond with the right next step.</p><Link className="btn primary" to="/contact">Send an enquiry <ArrowRight size={18} /></Link></Reveal></div></section>
  </>;
}
