import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <article className="project-card">
        <Link to={`/projetos/${project.id}`} className="project-image">
          <ImagePlaceholder src={project.image} label="[COLOCAR IMAGEM DO PROJETO AQUI]" />
          <span className="project-overlay">Ver projeto <ArrowUpRight /></span>
        </Link>
        <div className="project-content">
          <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
          <h3>{project.name}</h3>
          <p className="location"><MapPin /> {project.location}</p>
          <p>{project.description}</p>
          <Link className="text-link" to={`/projetos/${project.id}`}>Ver projeto <ArrowUpRight /></Link>
        </div>
      </article>
    </ScrollReveal>
  );
}