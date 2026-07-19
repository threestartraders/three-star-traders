import { PageHero, Reveal } from '../components/UI';
import { services } from '../data/site';

export default function Services() {
  return <>
    <PageHero eyebrow="SERVICES" title="Commercial support for Soul Parfum" text="From wholesale enquiries and distribution coordination to emerging channel and health club supply." />
    <section className="section"><div className="container service-list">{services.map((service, index) => <Reveal key={service.title} className="service-row"><strong>0{index + 1}</strong><div><h2>{service.title}</h2><p>{service.text}</p></div><span>SOUL PARFUM</span></Reveal>)}</div></section>
  </>;
}
