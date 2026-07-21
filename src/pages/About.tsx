import { CheckCircle2 } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';

export default function About() {
  return <>
    <PageHero eyebrow="ABOUT THREE STAR" title="Built for dependable trade" text="Three Star Traders connects products, partners and business customers through responsive service in the UAE." />
    <section className="section">
      <div className="container split">
        <Reveal>
          <SectionTitle eyebrow="OUR STORY" title="Commercial experience with a partnership mindset" />
          <p className="lead">Three Star Traders LLC is a UAE-based trading and distribution company committed to dependable sourcing, coordinated supply and lasting commercial relationships.</p>
          <p>We support wholesale, retail and other business enquiries through responsive communication and practical service.</p>
        </Reveal>
        <Reveal className="about-brand-panel">
          <img src="/assets/logos/logo-primary-stacked-gold.svg" alt="Three Star Traders – Built on Trust, Driven by Excellence" />
          <div className="about-purpose"><span>OUR PURPOSE</span><blockquote>To make business supply simpler, more dependable and more valuable for every partner we serve.</blockquote></div>
        </Reveal>
      </div>
    </section>
    <section className="section alt">
      <div className="container">
        <SectionTitle eyebrow="DIRECTION" title="Vision, mission and values" />
        <div className="cards three">
          <Reveal className="card"><h3>Vision</h3><p>To become a trusted trading and distribution partner recognised for reliability, market understanding and responsible growth.</p></Reveal>
          <Reveal className="card"><h3>Mission</h3><p>To connect quality products with customers through efficient supply, transparent communication and strong commercial relationships.</p></Reveal>
          <Reveal className="card"><h3>Values</h3><ul className="plain-list"><li><CheckCircle2 /> Integrity</li><li><CheckCircle2 /> Reliability</li><li><CheckCircle2 /> Service</li><li><CheckCircle2 /> Continuous improvement</li></ul></Reveal>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="OUR APPROACH" title="How we create value for partners" />
        <div className="timeline">{[['Understand', 'We begin with the customer, market and commercial requirement.'], ['Source', 'We evaluate suitable products and supply arrangements with care.'], ['Coordinate', 'We keep availability, terms and fulfilment communication clear.'], ['Support', 'We remain responsive as relationships and business needs develop.']].map((x, i) => <Reveal key={x[0]} className="timeline-item"><strong>0{i + 1}</strong><div><h3>{x[0]}</h3><p>{x[1]}</p></div></Reveal>)}</div>
      </div>
    </section>
  </>;
}
