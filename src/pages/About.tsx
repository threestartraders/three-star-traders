import { CheckCircle2 } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';

export default function About() {
  return <>
    <PageHero eyebrow="ABOUT THREE STAR" title="Built for dependable trade" text="An original corporate profile template ready to be customised with your company history, leadership and certifications." />
    <section className="section">
      <div className="container split">
        <Reveal>
          <SectionTitle eyebrow="OUR STORY" title="Commercial experience with a partnership mindset" />
          <p className="lead">Three Star Traders LLC is positioned as a UAE-based trading and distribution company serving businesses with carefully selected products, responsive service and disciplined fulfilment.</p>
          <p>This project currently uses editable placeholder content. Replace it with the company’s exact year of establishment, ownership story, markets served, licences and operational milestones.</p>
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
        <SectionTitle eyebrow="MILESTONES" title="A timeline ready for your real history" />
        <div className="timeline">{[['Foundation', 'Company established and initial trading operations began.'], ['Portfolio Growth', 'Product and supplier relationships expanded.'], ['Distribution Development', 'Structured fulfilment and customer coverage strengthened.'], ['Next Chapter', 'Digital platform and new partnership programme introduced.']].map((x, i) => <Reveal key={x[0]} className="timeline-item"><strong>0{i + 1}</strong><div><h3>{x[0]}</h3><p>{x[1]}</p></div></Reveal>)}</div>
      </div>
    </section>
  </>;
}
