import { experiences } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

export default function Experience() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="CARREIRA" title="Experiência profissional" text="[ADICIONE UMA BREVE INTRODUÇÃO SOBRE SUA EXPERIÊNCIA PROFISSIONAL]" /><div className="experience-list">{experiences.map((e,i)=><ScrollReveal key={i} delay={i*.07}><article className="experience-item"><div className="experience-date">{e.period}</div><div className="experience-main"><span className="eyebrow">{e.location}</span><h2>{e.company}</h2><h3>{e.role}</h3><p>{e.description}</p><h4>Principais responsabilidades</h4><ul>{e.responsibilities.map((r,j)=><li key={j}>{r}</li>)}</ul><h4>Resultados</h4><p>{e.results}</p></div></article></ScrollReveal>)}</div></div></div>;
}