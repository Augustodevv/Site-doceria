/* Ceres Brigadeiros — dados do catálogo (compartilhado por toda a UI)
   Fontes: cardápio do salão (foto), iFood oficial e Google Maps (out/2026).
   Bolos inteiros = preços do salão; unidades/fatias = iFood (no delivery podem variar).
   Kits e cafeteria: valores da casa — confirme no WhatsApp antes de publicar. */
window.EG_DATA = {
  whatsapp: "5512981210916", // (12) 98121-0916 — link oficial do WhatsApp
  brand: "Ceres Brigadeiros",
  tagline: "O melhor brigadeiro do litoral",

  categories: [
    { id: "brigadeiros", label: "Brigadeiros Gourmet", emoji: "🍫", tone: "chocolate" },
    { id: "bolos", label: "Bolos por Encomenda", emoji: "🎂", tone: "pink" },
    { id: "doces", label: "Doces & Potes", emoji: "🍮", tone: "cream" },
    { id: "kits", label: "Kits & Caixinhas", emoji: "🎁", tone: "rose" },
    { id: "cafeteria", label: "Cafeteria", emoji: "☕", tone: "cream" }
  ],

  /* `img` = foto real do cardápio oficial (iFood da loja). Sem `img` o card
     usa o emoji + gradiente do design system. */
  products: [
    // --- Brigadeiros (unidades e caixas — preços do iFood oficial) ---
    { id: "br1", cat: "brigadeiros", name: "Caixinha da Felicidade", desc: "3 brigadeiros gourmet à sua escolha: Ninho com Nutella, clássico e sabores da casa. Perfeita para presentear.", price: 22, emoji: "🎁", tag: "Mais vendido", img: "assets/img/produtos/brigadeiro-caixa-3.jpg" },
    { id: "br2", cat: "brigadeiros", name: "Brigadeiro Ninho com Nutella", desc: "O sabor queridinho da casa: creme de leite Ninho com recheio de Nutella. Serve 1 pessoa.", price: 10, emoji: "🍫", tag: "Predileto da praia", img: "assets/img/produtos/brigadeiro-ninho-nutella.jpg" },
    { id: "br3", cat: "brigadeiros", name: "Brigadeiro Tradicional", desc: "Chocolate, leite condensado e granulado — o gosto de sempre, feito artesanalmente.", price: 13, emoji: "🍡", tag: "", img: "assets/img/produtos/brigadeiro-80-cacau.jpg" },
    { id: "br4", cat: "brigadeiros", name: "Brigadeiro Caramelo com Cacau", desc: "Caramelo com cacau e amêndoa salgada — agridoce na medida certa.", price: 13, emoji: "🍩", tag: "", img: "assets/img/produtos/brigadeiro-caramelo-cacau.jpg" },
    { id: "br5", cat: "brigadeiros", name: "Caixa com 20 Brigadeiros Gourmet", desc: "Escolha os sabores: tradicional, Ninho, beijinho, diet, vegano, pistache e mais. Ideal para presentear ou servir na festa.", price: 130, emoji: "📦", tag: "", img: "assets/img/produtos/brigadeiro-caixa-6.jpg" },

    // --- Bolos inteiros (preços do salão — servem até 16 pessoas; menor sai por 70%) ---
    { id: "b1", cat: "bolos", name: "Bolo de Ninho com Morango", desc: "Recheio de brigadeiro de Ninho, morangos e chantilly. O mais vendido da casa.", price: 220, emoji: "🎂", tag: "Mais vendido", img: "assets/img/produtos/bolo-morango-ninho.jpg" },
    { id: "b2", cat: "bolos", name: "Bolo de Brigadeiro Belga", desc: "Muito brigadeiro, finalizado com granulado. Massa de chocolate com recheio cremoso.", price: 200, emoji: "🍫", tag: "", img: "assets/img/produtos/fatia-chocolate-doce-leite.jpg" },
    { id: "b3", cat: "bolos", name: "Cheesecake de Frutas Vermelhas", desc: "Receita da mãe da Ceres, com calda de frutas vermelhas feita na casa.", price: 290, emoji: "❤️", tag: "", img: "assets/img/produtos/cheesecake-frutas-vermelhas.jpg" },
    { id: "b4", cat: "bolos", name: "Bolo de Cenoura com Brigadeiro Belga", desc: "Massa fofinha de cenoura com calda generosa de brigadeiro belga.", price: 130, emoji: "🍰", tag: "", img: "assets/img/produtos/fatia-bolo-cenoura.jpg" },

    // --- Fatias e doces (preços do iFood oficial) ---
    { id: "d1", cat: "doces", name: "Pedaço Banoffe", desc: "Fatia generosa de banoffee com doce de leite, banana e chantilly.", price: 29, emoji: "🍮", tag: "Mais vendido", img: "assets/img/produtos/fatia-banoffe.jpg" },
    { id: "d2", cat: "doces", name: "Beijinho", desc: "O clássico de coco da casa, cremoso e artesanal.", price: 13, emoji: "🥄", tag: "", img: "assets/img/produtos/brigadeiro-beijinho.jpg" },
    { id: "d3", cat: "doces", name: "Pedaço de Torta de Limão", desc: "Elaborada pela chef Lina Borges — uma das tortas mais tradicionais da casa, doce na medida certa.", price: 26, emoji: "🍨", tag: "", img: "assets/img/produtos/fatia-torta-limao.jpg" },
    { id: "d4", cat: "doces", name: "Brownie com Frutas e Calda Quente", desc: "Brownie de chocolate com frutas e calda quente de chocolate.", price: 35, emoji: "🧁", tag: "", img: "assets/img/produtos/brownie-frutas-calda.jpg" },

    // --- Kits & Caixinhas ---
    { id: "k1", cat: "kits", name: "Kit Festa Mini", desc: "30 doces variados + 1 bolo de 15 fatias. Ideal para até 25 convidados.", price: 190, emoji: "🎈", tag: "", img: "assets/img/produtos/brigadeiro-caixa-3.jpg" },
    { id: "k2", cat: "kits", name: "Kit Festa Médio", desc: "60 doces variados + 1 bolo de 35 fatias. Ideal para até 50 convidados.", price: 330, emoji: "🎉", tag: "Mais vendido", img: "assets/img/produtos/brigadeiro-caixa-6.jpg" },
    { id: "k3", cat: "kits", name: "Kit Caixinhas para Presentear", desc: "10 Caixinhas da Felicidade com laço, prontas para presentear.", price: 250, emoji: "🎀", tag: "", img: "assets/img/produtos/brigadeiro-pistache.jpg" },
    { id: "k4", cat: "kits", name: "Kit Café da Tarde", desc: "20 doces variados + café coado para 20 pessoas.", price: 160, emoji: "☕", tag: "", img: "assets/img/produtos/brownie.jpg" },

    // --- Cafeteria (valores da casa) ---
    { id: "c1", cat: "cafeteria", name: "Café Coado da Casa", desc: "Café coado na hora, servido na xícara ou no copo.", price: 8, emoji: "☕", tag: "", img: "assets/img/hero-doce.jpg" },
    { id: "c2", cat: "cafeteria", name: "Cappuccino Ceres", desc: "Espresso, leite vaporizado e cacau — com granulado por cima.", price: 15, emoji: "☕", tag: "Predileto", img: "assets/img/hero-brigadeiros.jpg" },
    { id: "c3", cat: "cafeteria", name: "Suco Natural de Laranja", desc: "Laranja espremida na hora, sem açúcar adicionado.", price: 14, emoji: "🍊", tag: "" },
    { id: "c4", cat: "cafeteria", name: "Chá Gelado da Casa", desc: "Chá preto gelado com limão siciliano e hortelã.", price: 12, emoji: "🧊", tag: "" },
    { id: "c5", cat: "cafeteria", name: "Milk-shake de Ninho com Nutella", desc: "Nutella e leite Ninho batidos — simplesmente maravilhoso, super cremoso.", price: 39, emoji: "🥤", tag: "Novidade", img: "assets/img/produtos/milkshake-ninho-nutella.jpg" }
  ],

  /* --- Customizador "Monte seu Bolo" --- */
  builder: {
    steps: [
      {
        key: "tamanho",
        title: "Tamanho / Rendimento",
        hint: "Escolha quantas fatias o seu bolo terá.",
        options: [
          { id: "t15", label: "15 fatias", detail: "≈ 15 cm", price: 90 },
          { id: "t25", label: "25 fatias", detail: "≈ 20 cm", price: 130 },
          { id: "t35", label: "35 fatias", detail: "≈ 25 cm", price: 170 },
          { id: "t50", label: "50 fatias", detail: "≈ 30 cm", price: 220 }
        ]
      },
      {
        key: "massa",
        title: "Massa",
        hint: "A base que dá o sabor ao seu bolo.",
        options: [
          { id: "m1", label: "Baunilha", detail: "Massa baeta de baunilha", price: 0 },
          { id: "m2", label: "Cacau 50%", detail: "Chocolate meio amargo", price: 0 },
          { id: "m3", label: "Red Velvet", detail: "Aveludada e intensa", price: 15 },
          { id: "m4", label: "Chocolate Belga", detail: "Cacau belga premium", price: 10 }
        ]
      },
      {
        key: "recheio",
        title: "Recheio (até 2 opções)",
        hint: "Selecione até dois recheios.",
        max: 2,
        options: [
          { id: "r1", label: "Ninho com Nutella", detail: "O predileto da casa", price: 10 },
          { id: "r2", label: "Brigadeiro Clássico", detail: "Chocolate artesanal", price: 8 },
          { id: "r3", label: "Doce de Leite", detail: "Cremoso e levemente salgado", price: 5 },
          { id: "r4", label: "Belga com Granulado", detail: "Cacau 50% e granulado crocante", price: 12 }
        ]
      },
      {
        key: "cobertura",
        title: "Cobertura & Finalização",
        hint: "O acabamento do seu bolo.",
        options: [
          { id: "c1", label: "Chantininho", detail: "Chantilly estabilizado", price: 0 },
          { id: "c2", label: "Ganache", detail: "Chocolate derretido", price: 15 },
          { id: "c3", label: "Granulado Gourmet", detail: "Belga crocante", price: 8 }
        ]
      },
      {
        key: "topper",
        title: "Topper / Observações",
        hint: "Personalização final do seu bolo.",
        options: [
          { id: "p1", label: "Sem topper", detail: "Apenas finalização", price: 0 },
          { id: "p2", label: "Topper personalizado", detail: "Com nome ou data", price: 20 }
        ],
        notes: true
      }
    ]
  },

  /* --- Calculadora rápida de festas --- */
  calculator: {
    brigadeirosPerGuest: 6,
    slicesPerGuest: 1,
    tip: "Regra da casa: 6 brigadeiros por convidado e 1 fatia de bolo para cada um."
  },

  /* Avaliações reais do Google Maps (out/2026) — 4,9 ★ em 1.362 avaliações.
     Textos transcritos ipsis litteris; trechos cortados pelo Google foram
     mantidos até a última frase completa visível. */
  testimonials: [
    { name: "Angela Fonte", role: "Avaliação no Google · Local Guide", text: "Delícia de lugar! Tudo é bom, comi uma torta de banana, eles tem o capricho de dar uma esquentadinha, isso deixa a experiência mais confortável.", stars: 5 },
    { name: "Tatiane Braga", role: "Avaliação no Google", text: "Ambiente delicioso! Muito bem cuidados! Café uma delícia e os bolinhos maravilhosos!", stars: 5 },
    { name: "Guia Local Google", role: "Avaliação no Google · 1.808 avaliações", text: "Cafeteria super simpática na praia de Camburi. A decoração é muito fofa e acolhedora, as toalhinhas de crochê nas mesas dão um ar caseiro e aconchegante. Os brigadeiros — de diversos sabores — devem ser ótimos… optamos pelo tradicional que estava muito bom.", stars: 4 }
  ],

  /* Galeria: fotos reais da loja (Google Maps / iFood) */
  gallery: [
    { img: "assets/img/produtos/bolo-morango-ninho.jpg", label: "Bolo de Ninho com Morango" },
    { img: "assets/img/hero-doce.jpg", label: "Tortas e café da casa" },
    { img: "assets/img/produtos/brigadeiro-ninho-nutella.jpg", label: "Brigadeiro Ninho com Nutella" },
    { img: "assets/img/mesa-cafe.jpg", label: "Café da tarde na Ceres" },
    { img: "assets/img/produtos/brownie-frutas-calda.jpg", label: "Brownie com calda quente" },
    { img: "assets/img/loja-interior.jpg", label: "Salão e vitrine da Ceres" },
    { img: "assets/img/produtos/brigadeiro-caixa-6.jpg", label: "Caixa de brigadeiros gourmet" },
    { img: "assets/img/hero-brigadeiros.jpg", label: "Brigadeiros e café da casa" }
  ],

  info: {
    address: "Praia do Camburizinho, 744 — Camburizinho, São Sebastião/SP",
    cep: "CEP 11619-393",
    hours: "Seg a Qui: 10h–20h · Sex a Dom: 10h–22h",
    phone: "(12) 98121-0916",
    instagram: "@ceresbrigadeiros",
    instagramUrl: "https://www.instagram.com/ceresbrigadeiros/",
    ifood: "https://www.ifood.com.br/delivery/sao-sebastiao-sp/ceres-brigadeiros-praia-de-camburi/a0d54796-c9e0-4902-9f58-fea2f2638034",
    ifoodNote: "Delivery pelo WhatsApp e pelo iFood (link na bio do Instagram)",
    since: "8 anos em Camburi",
    priceNote: "Bolos inteiros: preços do salão (servem até 16 pessoas). Unidades e fatias: preços do iFood — no delivery podem variar.",
    mapsRating: "4,9",
    mapsReviews: "1.362",
    mapsUrl: "https://www.google.com/maps/place/Ceres+Brigadeiros/@-23.7755785,-45.6466811,17z",
    mapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Ceres+Brigadeiros+Camburizinho+S%C3%A3o+Sebasti%C3%A3o"
  }
};
