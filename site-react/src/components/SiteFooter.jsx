import { brand, categories, info } from "../data.js";

const NAV = [
  ["inicio", "Início"],
  ["cardapio", "Cardápio"],
  ["bolo", "Monte seu Bolo"],
  ["sobre", "Sobre Nós"],
  ["depoimentos", "Depoimentos"]
];

export default function SiteFooter({ wppUrl, onFilter }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="logo" href="#inicio" onClick={(e) => { e.preventDefault(); go("inicio"); }}>
              <span className="logo__mark" aria-hidden="true">🍫</span>
              <span className="logo__text">
                <span className="logo__name">{brand}</span>
                <span className="logo__sub" style={{ color: "var(--pink)" }}>
                  Brigadeiros &amp; Cafeteria
                </span>
              </span>
            </a>
            <p>
              O melhor brigadeiro do litoral. Brigadeiros, bolos e doces artesanais feitos
              na Praia do Camburizinho, 744 — em Camburi desde 2018.
            </p>
            <div className="socials">
              <a
                href={info.instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label={`Instagram ${info.instagram}`}
              >
                📸
              </a>
              <a href={wppUrl} target="_blank" rel="noopener" aria-label="WhatsApp">
                💬
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Praia+do+Camburizinho+744+S%C3%A3o+Sebasti%C3%A3o+SP"
                target="_blank"
                rel="noopener"
                aria-label="Como chegar"
              >
                🗺️
              </a>
            </div>
          </div>

          <div>
            <h3>Navegação</h3>
            <ul>
              {NAV.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Categorias</h3>
            <ul>
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href="#cardapio"
                    onClick={(e) => {
                      e.preventDefault();
                      onFilter(c.id);
                    }}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contato</h3>
            <ul>
              <li>{info.address}</li>
              <li>{info.hours}</li>
              <li>
                <a href={wppUrl} target="_blank" rel="noopener">
                  Pedir pelo WhatsApp →
                </a>
              </li>
              <li>
                <a href={info.instagramUrl} target="_blank" rel="noopener">
                  Instagram {info.instagram}
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => { e.preventDefault(); go("contato"); }}>
                  Formulário de contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand} — Camburizinho, São Sebastião/SP. Todos os
            direitos reservados.
          </span>
          <span>
            Feito com ♥ · O melhor brigadeiro do litoral · Foto da praia:{" "}
            <a
              href="https://github.com/augusto0108/Site-doceria/blob/main/CREDITS.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikimedia Commons (CC BY-SA 3.0)
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
