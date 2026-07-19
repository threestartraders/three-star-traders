import { MapPin, PackageCheck, Route, Store } from 'lucide-react';
import { PageHero, Reveal, SectionTitle } from '../components/UI';
import { site } from '../data/site';

export default function Distribution() {
  return <>
    <PageHero eyebrow="DISTRIBUTION" title="Soul Parfum supply for supported UAE channels" text="A focused approach to business enquiries, order coordination and market supply." />
    <section className="section"><div className="container split"><Reveal>
      <SectionTitle eyebrow="OUR APPROACH" title="From enquiry to coordinated supply" />
      <p className="lead">We work directly with business customers to understand channel requirements, confirm availability and coordinate the appropriate supply process.</p>
      <div className="mini-grid"><div><Store /><h3>Retail supply</h3><p>Support for perfume retailers and developing concepts.</p></div><div><Route /><h3>Channel coordination</h3><p>Clear communication across supported UAE channels.</p></div><div><PackageCheck /><h3>Order confirmation</h3><p>Availability and terms confirmed before fulfilment.</p></div><div><MapPin /><h3>UAE focus</h3><p>Business enquiries centred on the UAE market.</p></div></div>
    </Reveal><Reveal className="map-frame"><iframe title="Three Star Traders location" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Reveal></div></section>
  </>;
}
