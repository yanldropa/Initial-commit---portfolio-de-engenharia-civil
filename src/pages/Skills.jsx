import { technicalSkills, professionalSkills } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

export default function Skills() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="CAPACIDADES" title="Competências" text="[ADICIONE UMA INTRODUÇÃO SOBRE SUAS COMPETÊNCIAS AQUI]" /><div className="skills-columns"><ScrollReveal><section className="skill-panel"><span className="eyebrow">01</span><h2>Competências técnicas</h2><p>[SUBSTITUA OS EXEMPLOS ABAIXO PELAS COMPETÊNCIAS REAIS]</p><div className="skill-list">{technicalSkills.map((s,i)=><span key={i}>{s}</span>)}</div></section></ScrollReveal><ScrollReveal delay={.1}><section className="skill-panel"><span className="eyebrow">02</span><h2>Competências profissionais</h2><p>[ADICIONE AS COMPETÊNCIAS COMPORTAMENTAIS REAIS]</p><div className="skill-list">{professionalSkills.map((s,i)=><span key={i}>{s}</span>)}</div></section></ScrollReveal></div></div></div>;
}