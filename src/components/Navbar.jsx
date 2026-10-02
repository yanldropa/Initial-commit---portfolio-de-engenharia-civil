import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { professional } from "../data/portfolioData";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/projetos", "Projetos"],
  ["/obras", "Obras"],
  ["/experiencia", "Experiência"],
  ["/competencias", "Competências"],
  ["/formacao", "Formação"],
  ["/contato", "Contato"]
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">YD</span>
        <span>
          <strong>{professional.name}</strong>
          <small>ENGENHARIA CIVIL</small>
        </span>
      </Link>

      <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}