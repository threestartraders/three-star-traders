import { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHero, Reveal } from '../components/UI';
import { site } from '../data/site';

export default function Contact() {
  const [status, setStatus] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (endpoint) {
      setStatus('Sending...');
      try {
        const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error();
        form.reset();
        setStatus('Thank you. Your Soul Parfum enquiry has been sent.');
      } catch {
        setStatus('The online form could not send. Please email us directly.');
      }
    } else {
      const subject = encodeURIComponent(`Soul Parfum enquiry: ${data.get('enquiryType')}`);
      const body = encodeURIComponent(`Name: ${data.get('name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('Your email application should now open.');
    }
  }

  return <>
    <PageHero eyebrow="CONTACT" title="Start a Soul Parfum conversation" text="Contact our team about availability, wholesale supply, retail opportunities or supported business channels." />
    <section className="section"><div className="container contact-grid"><Reveal><div className="contact-card"><h2>Contact information</h2><p><MapPin /> <span><strong>Office</strong>{site.address}</span></p><p><Phone /> <span><strong>Telephone</strong>{site.phone}</span></p><p><Mail /> <span><strong>Email</strong>{site.email}</span></p><hr /><small>Tell us about your business and the Soul Parfum products or supply channel you are interested in.</small></div></Reveal><Reveal><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Full name<input name="name" required /></label><label>Company<input name="company" /></label></div><div className="form-row"><label>Email<input type="email" name="email" required /></label><label>Phone<input name="phone" required /></label></div><label>Enquiry type<select name="enquiryType"><option>Soul Parfum product enquiry</option><option>Wholesale account</option><option>Retail supply</option><option>Emerging channel supply</option><option>Health club supply</option><option>General enquiry</option></select></label><label>Message<textarea name="message" rows={6} required /></label><button className="btn primary" type="submit">Submit enquiry</button>{status && <p className="form-status">{status}</p>}</form></Reveal></div></section>
  </>;
}
