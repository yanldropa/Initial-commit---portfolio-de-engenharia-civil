import { projects } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return <div className="page"><div className="container"><SectionTitle eyebrow="PORTFÓLIO" title="Projetos" text="[ADICIONE UMA DESCRIÇÃO GERAL DOS PROJETOS AQUI]" /><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div></div></div>;
}