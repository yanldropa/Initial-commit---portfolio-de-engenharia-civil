import { works } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";

export default function Works() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="EXECUÇÃO" title="Obras" text="[ADICIONE UMA DESCRIÇÃO SOBRE AS OBRAS ACOMPANHADAS AQUI]" /><div className="works-grid">{works.map((w,i)=><ScrollReveal key={w.id} delay={i*.06}><article className="work-card"><ImagePlaceholder src={w.image} label="[IMAGEM DA OBRA AQUI]" /><div><div className="work-top"><span>{w.type}</span><span>{w.status}</span></div><h3>{w.name}</h3><p>{w.description}</p><div className="work-info"><span>{w.location}</span><span>{w.period}</span></div></div></article></ScrollReveal>)}</div></div></div>;
}