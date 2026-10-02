import { education } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

export default function Education() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="FORMAÇÃO" title="Formação" text="[ADICIONE UMA FRASE SOBRE SUA FORMAÇÃO ACADÊMICA]" /><div className="education-card"><ScrollReveal><span className="eyebrow">GRADUAÇÃO</span><h2>{education.graduation.course}</h2><p>{education.graduation.institution}</p><div className="education-meta"><span>{education.graduation.period}</span><span>{education.graduation.status}</span></div></ScrollReveal></div><section className="education-section"><h2>Pós-graduação e especializações</h2>{education.postgraduate.map((x,i)=><div className="simple-row" key={i}>{x}</div>)}</section><section className="education-section"><h2>Cursos e certificações</h2>{education.courses.map((x,i)=><div className="course-row" key={i}><div><h3>{x.name}</h3><p>{x.institution}</p></div><span>{x.year}</span><a href={x.certificate}>Certificado ↗</a></div>)}</section></div></div>;
}