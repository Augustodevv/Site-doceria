import { brl } from "../data.js";

export default function CartDrawer({ open, cart, total, onClose, onQty, onRemove, onCheckout }) {
  const closeOnOverlay = (e) => e.target === e.currentTarget && onClose();

  return (
    <>
      <div className={`overlay${open ? " is-open" : ""}`} onClick={closeOnOverlay} />
      <aside
        className={`drawer${open ? " is-open" : ""}`}
        aria-label="Sua encomenda"
        aria-hidden={!open}
      >
        <div className="drawer__head">
          <h3>Sua Encomenda</h3>
          <button className="drawer__close" onClick={onClose} aria-label="Fechar encomenda">
            ✕
          </button>
        </div>

        <div className="drawer__body">
          {cart.length === 0 ? (
            <div className="drawer__empty">
              <span aria-hidden="true">🧁</span>
              Sua encomenda está vazia.
              <br />
              Explore o cardápio ou monte seu bolo!
            </div>
          ) : (
            cart.map((item) => {
              const key = item.key || item.id;
              return (
                <div className="cart-item" key={key}>
                  <span className="cart-item__thumb" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div>
                    <b>{item.name}</b>
                    {item.note && <small>{item.note}</small>}
                    <div className="cart-item__qty">
                      <button
                        type="button"
                        aria-label={`Diminuir quantidade de ${item.name}`}
                        onClick={() => onQty(key, -1)}
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        aria-label={`Aumentar quantidade de ${item.name}`}
                        onClick={() => onQty(key, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="cart-item__price">{brl(item.price * item.qty)}</span>
                    <button className="cart-item__remove" onClick={() => onRemove(key)}>
                      remover
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="drawer__foot">
          <div className="drawer__total">
            <span>Total estimado</span>
            <b>{brl(total)}</b>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--block"
            disabled={!cart.length}
            onClick={onCheckout}
          >
            Finalizar no WhatsApp →
          </button>
        </div>
      </aside>
    </>
  );
}
