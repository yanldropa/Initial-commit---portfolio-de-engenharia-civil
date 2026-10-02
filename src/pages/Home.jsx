import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Building2, Ruler, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { professional, projects, works } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image-wrap">
          <ImagePlaceholder src={professional.heroImage} label="[IMAGEM PRINCIPAL DO HERO — SUBSTITUIR AQUI]" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.span className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}>PORTFÓLIO PROFISSIONAL</motion.span>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.25}}>
            {professional.name}
          </motion.h1>
          <motion.div className="hero-role" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.35}}>
            {professional.role}
          </motion.div>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.45}}>
            {professional.headline}
          </motion.p>
          <motion.p className="hero-bio" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.55}}>
            {professional.bio}
          </motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.65}}>
            <Link className="btn btn-gold" to="/projetos">Conheça meu trabalho <ArrowRight /></Link>
            <Link className="btn btn-outline-light" to="/contato">Entre em contato</Link>
          </motion.div>
        </div>
        <div className="hero-scroll"><ArrowDown /> SCROLL</div>
      </section>

      <section className="intro section">
        <div className="container split">
          <div>
            <span className="eyebrow">VISÃO PROFISSIONAL</span>
            <h2>Engenharia pensada para transformar projetos em realidade.</h2>
          </div>
          <div>
            <p className="lead">[ADICIONE AQUI UMA FRASE OU TEXTO INSTITUCIONAL DO PROFISSIONAL]</p>
            <Link className="text-link" to="/sobre">Conheça minha trajetória <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="stats section-dark">
        <div className="container stats-grid">
          <div><Building2 /><strong>[00]</strong><span>Projetos</span></div>
          <div><Ruler /><strong>[00]</strong><span>Obras</span></div>
          <div><HardHat /><strong>[00]</strong><span>Anos de experiência</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div><span className="eyebrow">SELEÇÃO</span><h2>Projetos em destaque</h2></div>
            <Link className="text-link" to="/projetos">Ver todos <ArrowRight /></Link>
          </div>
          <div className="project-grid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <span className="eyebrow">POSICIONAMENTO</span>
          <h2>“[INSIRA AQUI UMA FRASE PROFISSIONAL, PRINCÍPIO OU VALOR DO ENGENHEIRO]”</h2>
        </div>
      </section>
    </>
  );
}