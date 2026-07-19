import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';
import { trackPageView } from '../analytics';

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/brands', 'Brands'],
  ['/services', 'Services'], ['/distribution', 'Distribution'], ['/news', 'News'], ['/careers', 'Careers'], ['/contact', 'Contact'],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackPageView(location.pathname);
  }, [location.pathname]);
  return <div className="site-shell">
    <header className="header">
      <div className="topbar container">
        <span><Phone size={14}/> {site.phone}</span><span><Mail size={14}/> {site.email}</span>
      </div>
      <div className="nav container">
        <Link to="/" className="logo" aria-label="Three Star Traders home">
          <img className="site-logo header-logo" src="/assets/logos/logo-horizontal-white.svg" alt="Three Star Traders" />
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([to,label]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
    <main><Outlet/></main>
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Link to="/" aria-label="Three Star Traders home"><img className="footer-logo" src="/assets/logos/logo-stacked-no-tagline.svg" alt="Three Star Traders" /></Link><p>{site.tagline}. We connect dependable products with businesses that value consistency, service and long-term partnership.</p></div>
        <div><h4>Quick links</h4><Link to="/about">Company profile</Link><Link to="/products">Product portfolio</Link><Link to="/services">Our services</Link><Link to="/contact">Contact us</Link></div>
        <div><h4>Contact</h4><p><MapPin size={16}/> {site.address}</p><p><Phone size={16}/> {site.phone}</p><p><Mail size={16}/> {site.email}</p></div>
        <div><h4>Business enquiries</h4><p>Speak with our team about supply, distribution or brand partnership opportunities.</p><Link className="text-link" to="/contact">Start an enquiry <ArrowUpRight size={16}/></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Three Star Traders LLC. All rights reserved.</span><span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span></div>
    </footer>
    <a className="whatsapp" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
  </div>
}
