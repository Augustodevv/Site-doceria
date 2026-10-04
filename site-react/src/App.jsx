import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import About from "./components/About.jsx";
import MenuSection from "./components/MenuSection.jsx";
import CakeBuilder from "./components/CakeBuilder.jsx";
import Calculator from "./components/Calculator.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import CheckoutModal from "./components/CheckoutModal.jsx";
import FloatingUI from "./components/FloatingUI.jsx";
import { useReveal, useToast } from "./hooks.js";
import { brand, wppURL } from "./data.js";

const DEFAULT_WPP = `Olá, ${brand}! Vim pelo site e gostaria de fazer uma encomenda. 🍫`;

export default function App() {
  useReveal();
  const [toast, showToast] = useToast();

  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        setCheckoutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const count = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);
  const total = useMemo(
    () => cart.reduce((n, i) => n + i.price * i.qty, 0),
    [cart]
  );

  const addToCart = useCallback(
    (item) => {
      setCart((prev) => {
        const key = item.key || item.id;
        const found = prev.find((i) => (i.key || i.id) === key);
        if (found)
          return prev.map((i) =>
            (i.key || i.id) === key ? { ...i, qty: i.qty + (item.qty || 1) } : i
          );
        return [...prev, { ...item, qty: item.qty || 1 }];
      });
      showToast(`${item.name} adicionado à encomenda ✓`);
    },
    [showToast]
  );

  const changeQty = useCallback((key, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          (i.key || i.id) === key ? { ...i, qty: i.qty + delta } : i
        )
        .filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback(
    (key) => setCart((prev) => prev.filter((i) => (i.key || i.id) !== key)),
    []
  );

  const openCheckout = useCallback(() => {
    if (!cart.length) return showToast("Sua encomenda está vazia 🙂");
    setDrawerOpen(false);
    setCheckoutOpen(true);
  }, [cart.length, showToast]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const applyFilter = (id) => {
    setFilter(id);
    goTo("cardapio");
  };

  const finishOrder = () => {
    setCheckoutOpen(false);
    setDrawerOpen(false);
    showToast("Pedido formatado! Só enviar no WhatsApp 💬");
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header
        count={count}
        onOpenCart={() => setDrawerOpen(true)}
        wppUrl={wppURL(DEFAULT_WPP)}
      />

      <main id="conteudo">
        <Hero wppUrl={wppURL(DEFAULT_WPP)} />
        <Categories onPick={applyFilter} />
        <About onCta={() => goTo("bolo")} />
        <MenuSection filter={filter} onFilter={setFilter} onAdd={addToCart} />
        <CakeBuilder
          onAdd={addToCart}
          onOpenCart={() => setDrawerOpen(true)}
          showToast={showToast}
        />
        <Calculator />
        <Testimonials />
        <Gallery />
        <Contact showToast={showToast} />
      </main>

      <SiteFooter wppUrl={wppURL(DEFAULT_WPP)} onFilter={applyFilter} />

      <CartDrawer
        open={drawerOpen}
        cart={cart}
        total={total}
        onClose={() => setDrawerOpen(false)}
        onQty={changeQty}
        onRemove={removeItem}
        onCheckout={openCheckout}
      />

      <CheckoutModal
        open={checkoutOpen}
        cart={cart}
        total={total}
        onClose={() => setCheckoutOpen(false)}
        onDone={finishOrder}
        showToast={showToast}
      />

      <FloatingUI
        count={count}
        toast={toast}
        onOpenCart={() => setDrawerOpen(true)}
        wppUrl={wppURL(DEFAULT_WPP)}
      />
    </>
  );
}
