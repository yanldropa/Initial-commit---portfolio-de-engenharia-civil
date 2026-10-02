import { about, professional, trajectory } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <div className="page">
      <div className="container"><SectionTitle eyebrow="PERFIL" title="Sobre mim" text="[ADICIONE UMA FRASE DE APRESENTAÇÃO PROFISSIONAL AQUI]" /></div>
      <section className="section">
        <div className="container split about-grid">
          <ScrollReveal direction="left"><ImagePlaceholder src={professional.photo} label="[INSERIR FOTO PROFISSIONAL AQUI]" className="portrait" /></ScrollReveal>
          <ScrollReveal direction="right">
            <span className="eyebrow">BIOGRAFIA</span>
            <h2>[SOBRE O PROFISSIONAL]</h2>
            <p className="lead">{about.biography}</p>
            <div className="info-grid">
              <div><span>Formação</span><strong>{about.formation}</strong></div>
              <div><span>Especialidade</span><strong>{about.specialty}</strong></div>
              <div><span>Experiência</span><strong>{about.experience}</strong></div>
              <div><span>Localização</span><strong>{about.location}</strong></div>
              <div><span>CREA</span><strong>{about.crea}</strong></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <span className="eyebrow">TRAJETÓRIA</span><h2>Minha trajetória</h2>
          <div className="timeline">
            {trajectory.map((item, i) => <ScrollReveal key={i} delay={i*.08}><div className="timeline-item"><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div></ScrollReveal>)}
          </div>
        </div>
      </section>
    </div>
  );
}