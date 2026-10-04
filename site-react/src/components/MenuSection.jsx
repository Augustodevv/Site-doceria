import { categories, products, brl } from "../data.js";

const TONE_BY_CAT = {
  brigadeiros: "chocolate",
  bolos: "pink",
  doces: "",
  kits: "rose",
  cafeteria: "cream"
};

export default function MenuSection({ filter, onFilter, onAdd }) {
  const tabs = [{ id: "todos", label: "Todos" }].concat(
    categories.map((c) => ({ id: c.id, label: c.label }))
  );
  const visible = products.filter((p) => filter === "todos" || p.cat === filter);

  return (
    <section className="section" id="cardapio" aria-labelledby="card-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            🍰 ♥ 🍰
          </div>
          <span className="eyebrow">Cardápio online</span>
          <h2 id="card-title">Delícias fresquinhas do dia</h2>
          <p>
            Filtre por categoria e adicione direto à sua encomenda. Depois é só enviar tudo
            pelo WhatsApp.
          </p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="Filtrar cardápio por categoria">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              className={`tab${filter === t.id ? " is-active" : ""}`}
              aria-selected={filter === t.id}
              onClick={() => onFilter(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid-products" aria-live="polite">
          {visible.map((p) => (
            <article key={p.id} className="card">
              <div
                className="card__media"
                data-tone={TONE_BY_CAT[p.cat]}
                role="img"
                aria-label={`${p.name} — ${p.desc}`}
              >
                <span aria-hidden="true">{p.emoji}</span>
                {p.tag && <span className="card__tag">{p.tag}</span>}
              </div>
              <div className="card__body">
                <h3>{p.name}</h3>
                <p className="card__desc">{p.desc}</p>
                <div className="card__foot">
                  <span className="price">{brl(p.price)}</span>
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    onClick={() => onAdd({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, note: p.desc })}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
