import { Link } from "react-router-dom";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { professional } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">{professional.name}</div>
          <p>Engenharia Civil</p>
          <span className="muted">[SUBSTITUA ESTA DESCRIÇÃO POR UMA FRASE PROFISSIONAL]</span>
        </div>
        <div>
          <h4>Navegação</h4>
          <div className="footer-links">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/obras">Obras</Link>
            <Link to="/experiencia">Experiência</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>
        <div>
          <h4>Conecte-se</h4>
          <div className="socials">
            <a href={professional.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
            <a href={professional.instagram} target="_blank" rel="noreferrer"><Instagram /> Instagram <ArrowUpRight /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {professional.name}. Todos os direitos reservados.</span>
        <span>Portfólio profissional</span>
      </div>
    </footer>
  );
}