import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Reveal({children, delay=0, className=''}:{children:ReactNode, delay?:number, className?:string}) {
  return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.15}} transition={{duration:.6,delay}}>{children}</motion.div>
}
export function PageHero({eyebrow,title,text}:{eyebrow:string,title:string,text:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>
}
export function SectionTitle({eyebrow,title,text}:{eyebrow:string,title:string,text?:string}) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
