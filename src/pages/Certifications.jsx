import { certifications } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";

export default function Certifications() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="CREDENCIAIS" title="Certificações" text="[ADICIONE UMA DESCRIÇÃO DAS SUAS CERTIFICAÇÕES]" /><div className="cert-grid">{certifications.map((c,i)=><ScrollReveal key={i} delay={i*.07}><article className="cert-card"><ImagePlaceholder src={c.image} label="[ÍCONE OU IMAGEM DO CERTIFICADO]" /><div><span className="eyebrow">{c.year}</span><h3>{c.name}</h3><p>{c.institution}</p><a className="text-link" href={c.link}>Ver certificado ↗</a></div></article></ScrollReveal>)}</div></div></div>;
}