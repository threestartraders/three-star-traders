import { PageHero, Reveal } from '../components/UI';
import { news } from '../data/site';

export default function News() {
  return <>
    <PageHero eyebrow="NEWS" title="Company and trade updates" text="Follow business announcements and developments from Three Star Traders." />
    <section className="section"><div className="container news-list">{news.map((item, index) => <Reveal className="news-item" key={item.title}><span>{item.date}</span><div><small>COMPANY UPDATE</small><h2>{item.title}</h2><p>{item.excerpt}</p></div><strong>0{index + 1}</strong></Reveal>)}</div></section>
  </>;
}
