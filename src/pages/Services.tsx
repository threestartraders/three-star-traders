import { PageHero, Reveal } from '../components/UI';
import { services } from '../data/site';

export default function Services() {
  return <>
    <PageHero eyebrow="SERVICES" title="Practical support for modern trade" text="From wholesale sourcing and distribution coordination to market development and commercial supply." />
    <section className="section"><div className="container service-list">{services.map((service, index) => <Reveal key={service.title} className="service-row"><strong>0{index + 1}</strong><div><h2>{service.title}</h2><p>{service.text}</p></div><span>THREE STAR</span></Reveal>)}</div></section>
  </>;
}
