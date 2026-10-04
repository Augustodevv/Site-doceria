import { useEffect, useRef, useState } from "react";

/** Anima as seções com o efeito "reveal" ao entrar na tela. */
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Destaca o link da seção atual no menu. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

/** Toast temporizado (mensagem + chave para re-render). */
export function useToast() {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);
  const show = (msg) => {
    setToast({ msg, id: Date.now() });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2600);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return [toast, show];
}
