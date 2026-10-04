export default function FloatingUI({ count, toast, onOpenCart, wppUrl }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <nav className="dock" aria-label="Menu rápido">
        <button type="button" onClick={() => go("inicio")}>
          <span aria-hidden="true">🏠</span>
          <span>Início</span>
        </button>
        <button type="button" onClick={() => go("cardapio")}>
          <span aria-hidden="true">🧁</span>
          <span>Cardápio</span>
        </button>
        <button type="button" onClick={() => go("bolo")}>
          <span aria-hidden="true">🎂</span>
          <span>Seu Bolo</span>
        </button>
        <button type="button" onClick={onOpenCart}>
          <span aria-hidden="true">🛍️</span>
          <span>Encomenda</span>
          <span className={`badge${count ? "" : " is-empty"}`}>{count}</span>
        </button>
        <a href={wppUrl} target="_blank" rel="noopener">
          <span aria-hidden="true">💬</span>
          <span>WhatsApp</span>
        </a>
      </nav>

      <a className="wpp-float" href={wppUrl} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        💬
      </a>

      <div className={`toast${toast ? " is-show" : ""}`} role="status" aria-live="polite">
        {toast?.msg}
      </div>
    </>
  );
}
