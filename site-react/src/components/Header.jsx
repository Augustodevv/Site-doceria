import { useEffect, useState } from "react";
import { brand } from "../data.js";
import { useActiveSection } from "../hooks.js";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "cardapio", label: "Cardápio" },
  { id: "bolo", label: "Monte seu Bolo" },
  { id: "sobre", label: "Sobre Nós" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" }
];

const SECTION_IDS = NAV.map((n) => n.id);

export default function Header({ count, onOpenCart, wppUrl }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header${stuck ? " is-stuck" : ""}`}>
      <div className="wrap header__inner">
        <a
          className="logo"
          href="#inicio"
          onClick={(e) => go(e, "inicio")}
        >
          <span className="logo__mark" aria-hidden="true">
            🍫
          </span>
          <span className="logo__text">
            <span className="logo__name">{brand}</span>
            <span className="logo__sub">Brigadeiros &amp; Cafeteria</span>
          </span>
        </a>

        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              onClick={(e) => go(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="nav"
          >
            {open ? "✕" : "☰"}
          </button>
          <button className="icon-btn" onClick={onOpenCart} aria-label={`Abrir encomenda (${count} itens)`}>
            🛍️
            <span className={`badge${count ? "" : " is-empty"}`}>{count}</span>
          </button>
          <a className="btn btn--primary btn--sm" href={wppUrl} target="_blank" rel="noopener">
            Fazer Encomenda
          </a>
        </div>
      </div>
    </header>
  );
}
