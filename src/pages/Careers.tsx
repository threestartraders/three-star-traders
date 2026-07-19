import { Mail } from 'lucide-react';
import { PageHero, Reveal } from '../components/UI';
import { site } from '../data/site';

export default function Careers() {
  return <>
    <PageHero eyebrow="CAREERS" title="Build your next chapter with us" text="Learn about future opportunities with Three Star Traders." />
    <section className="section"><div className="container"><Reveal className="empty"><Mail size={34} /><h2>No positions are currently advertised</h2><p>For future career enquiries, send your profile to our company email address.</p><a className="btn primary" href={`mailto:${site.email}?subject=Career enquiry`}>Email your profile</a></Reveal></div></section>
  </>;
}
