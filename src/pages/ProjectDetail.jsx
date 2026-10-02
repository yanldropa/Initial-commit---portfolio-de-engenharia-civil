import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "../data/portfolioData";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0];
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="page">
      <div className="container detail">
        <Link to="/projetos" className="back-link"><ArrowLeft /> Voltar para projetos</Link>
        <div className="detail-hero"><ImagePlaceholder src={project.image} label="[IMAGEM PRINCIPAL DA OBRA — SUBSTITUIR AQUI]" /></div>
        <div className="detail-header">
          <div><span className="eyebrow">{project.category}</span><h1>{project.name}</h1><p className="location"><MapPin /> {project.location}</p></div>
          <div className="detail-year">{project.year}</div>
        </div>

        <div className="project-facts">
          <div><span>Localização</span><strong>{project.location}</strong></div>
          <div><span>Ano</span><strong>{project.year}</strong></div>
          <div><span>Área construída</span><strong>{project.area}</strong></div>
          <div><span>Tipo</span><strong>{project.category}</strong></div>
          <div><span>Status</span><strong>{project.status}</strong></div>
          <div><span>Responsável</span><strong>[COLOCAR]</strong></div>
          <div><span>Participação</span><strong>{project.participation}</strong></div>
          <div><span>Tecnologias</span><strong>{project.technologies}</strong></div>
        </div>

        <div className="detail-sections">
          <ScrollReveal><section><span className="eyebrow">01 — SOBRE O PROJETO</span><p>{project.description}</p></section></ScrollReveal>
          <ScrollReveal><section><span className="eyebrow">02 — DESAFIOS</span><p>{project.challenges}</p></section></ScrollReveal>
          <ScrollReveal><section><span className="eyebrow">03 — SOLUÇÕES</span><p>{project.solutions}</p></section></ScrollReveal>
          <ScrollReveal><section><span className="eyebrow">04 — RESULTADOS</span><p>{project.results}</p></section></ScrollReveal>
        </div>

        <section className="gallery-section">
          <span className="eyebrow">05 — GALERIA</span><h2>Registro visual</h2>
          <div className="gallery">
            {project.gallery.map((img,i)=><button key={i} onClick={()=>setLightbox(img)}><ImagePlaceholder src={img} label={`[IMAGEM ${String(i+1).padStart(2,"0")}]`}/></button>)}
            {project.gallery.length === 0 && [1,2,3,4].map(i=><div key={i}><ImagePlaceholder src={`/assets/images/gallery/projeto-placeholder-${i}.jpg`} label={`[IMAGEM ${String(i).padStart(2,"0")}]`}/></div>)}
          </div>
        </section>
      </div>

      {lightbox && <div className="lightbox" onClick={()=>setLightbox(null)}><img src={lightbox} alt="Galeria" /><button aria-label="Fechar">×</button></div>}
    </div>
  );
}