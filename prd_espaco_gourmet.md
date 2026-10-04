# Product Requirement Document (PRD)

## 1. Visão Geral do Produto

### 1.1 Nome do Produto

**Website E-commerce & Vitrine Digital – Espaço Gourmet**

### 1.2 Resumo do Produto

O website do **Espaço Gourmet** será uma plataforma web moderna, elegante e responsiva com foco no catálogo de produtos (bolos e salgados artesanais), agendamento de encomendas e comunicação direta com os clientes. O site refletirá a identidade visual sofisticada, acolhedora e afetiva da marca, traduzindo a proposta de valor *"Sabores que fazem bons momentos"*.

### 1.3 Objetivos de Negócio

- **Aumentar Conversões:** Facilitar o fluxo de encomendas de bolos, doces e salgados via integração direta com WhatsApp e checkout simplificado.
- **Fortalecimento de Marca:** Consolidar a identidade visual e o posicionamento artesanal/gourmet no ambiente digital com uma interface moderna e atrativa.
- **Centralização de Atendimento:** Reduzir dúvidas frequentes sobre cardápio, prazos de entrega e localização.

## 2. Público-Alvo e Persona

**Perfil:** Homens e mulheres de 25 a 55 anos, classes A/B/C, que valorizam gastronomia afetiva, artesanal e de alta qualidade para festas, celebrações corporativas ou momentos do dia a dia.

**Necessidades:**

- Visualizar fotos atrativas e realistas dos produtos (bolos, brigadeiros, salgados).
- Personalizar encomendas (sabores, tamanhos, toppers) de forma simples e intuitiva.
- Calcular prazos de entrega ou agendar retirada.
- Facilitar contato rápido pelo WhatsApp.

## 3. Diretrizes de Design Moderno & Identidade Visual (UI/UX)

O design do site deve seguir rigorosamente o manual da marca **Espaço Gourmet**, combinando o toque artesanal com uma estética web moderna.

### 3.1 Paleta de Cores

- **Chocolate Profundo (#512113):** Cor primária para textos principais, botões institucionais, rodapé e elementos de grande destaque.
- **Rosa Confeitaria (#ECC7BD):** Cor secundária para fundos de seções, destaques e cards secundários.
- **Rosa Suave (#E9B3BC):** Utilizada para estados de hover, badges e detalhes gráficos.
- **Creme Rosado (#F3DEDS):** Fundo principal das páginas, proporcionando leitura confortável e ambiente acolhedor.

### 3.2 Tipografia

- **Títulos e Destaques:** Playfair Display (Serifada) – Transmite elegância, sofisticação e tradição.
- **Corpo de Texto e Interface:** Montserrat (Sans-Serif) – Garante legibilidade em telas de qualquer tamanho.
- **Acentos / Detalhes de Apoio:** Fonte Cursiva Caligráfica (para frases afetivas e subtítulos curtos).

### 3.3 Elementos Visuais e Estética Moderna

- **Glassmorphism & Camadas:** Uso discreto de transparências com efeito de vidro fosco em menus e cards flutuantes sobre fotografias imersivas.
- **Microinterações:**
  - Animações suaves de hover nos cards de produtos (elevação com sombra suave e leve zoom na foto).
  - Transições fluidas ao navegar entre categorias e abrir a ferramenta "Monte seu Bolo".
- **Espaçamento e Layout Limpo:** Uso generoso de espaços em branco (white space) para criar uma sensação de luxo e organização visual.
- **Corações e Linhas Finas:** Incorporação sutil dos ícones da marca (batedor de arame e corações flutuantes) como elementos decorativos em divisorias de seções.

## 4. Requisitos Funcionais

### 4.1 Navegação e Estrutura de Páginas

#### A. Cabeçalho (Header)

- Logo Principal ("Espaço Gourmet - Bolos e Salgados").
- Menu de Navegação: Início, Cardápio, Monte seu Bolo, Sobre Nós, Depoimentos, Contato.
- Ícone do Carrinho de Compras com badge de contador.
- Botão de Ação Rápida (CTA): "Fazer Encomenda" (Com link direto para WhatsApp).

#### B. Página Inicial (Home)

- **Hero Section (Moderno e Imersivo):**
  - Carrossel de imagens em alta definição com efeito de transição suave (fade).
  - Frase em Playfair Display: "Sabores que fazem bons momentos".
  - Botões de ação com cantos arredondados: **[Ver Cardápio]** e **[Monte seu Bolo]**.
- **Carrossel de Categorias:**
  - Destaques em cards circulares ou de cantos suavemente arredondados: Bolos por Encomenda, Bolo no Pote, Salgados Assados, Kits Festas.
- **Seção Institucional / Histórias:**
  - Foto em estilo lifestyle com a frase: "Mais que comida, são boas histórias".
- **Calculadora Rápida de Festas:**
  - Widget intuitivo para estimar quantidade de doces e salgados com base no número de convidados.
- **Galeria Viva (Instagram):**
  - Grid dinâmico das fotos do Instagram trazendo prova social e estética atualizada.
- **Rodapé (Footer):**
  - Logo Negativa sobre fundo Chocolate Profundo (#512113).
  - Horários de funcionamento, endereço com mapa interativo, links sociais e direitos autorais.

#### C. Cardápio Online (Página de Produtos)

- Filtros interativos por categoria sem recarregamento de página (AJAX/React tabs): Todos, Bolos, Salgados, Doces & Potes, Kits.
- **Cards de Produtos:**
  - Foto de alta definição com iluminação quente.
  - Nome do produto em Playfair Display.
  - Descrição detalhada dos ingredientes.
  - Tag de preço clara.
  - Botão "Adicionar à Encomenda".

#### D. Customizador "Monte seu Bolo" (Passo a Passo Visual)

Interface interativa por etapas:

1. Tamanho / Rendimento (ex.: 15 fatias, 25 fatias).
2. Massa (ex.: Baunilha, Cacau 50%, Red Velvet).
3. Recheio (até 2 opções: Ninho, Brigadeiro Gourmet, Doce de Leite).
4. Cobertura & Finalização (Chantininho, Ganache, Granulado Gourmet).
5. Topper / Observações.

> Resumo lateral flutuante atualizado em tempo real com o valor estimado e imagem representativa.

#### E. Checkout Simplificado via WhatsApp

Modal/Formulário para preenchimento rápido:

- Nome Completo.
- Telefone / WhatsApp.
- Data e Horário desejados para Retirada ou Entrega.
- Endereço (para entrega).
- **Botão "Enviar Pedido no WhatsApp":** Formata automaticamente a mensagem com os itens escolhidos e dados do cliente para a atendente.

## 5. Requisitos Não Funcionais

- **Performance:** Carregamento ultra-rápido (abaixo de 2 segundos) através da otimização de imagens (formatos WebP/AVIF).
- **Experiência Mobile-First:** Design completamente otimizado para dispositivos móveis, incluindo menu inferior flutuante estilo aplicativo.
- **Acessibilidade:**
  - Contraste de cor adequado conforme diretrizes WCAG AAA (especialmente com textos sobre #F3DEDS e #ECC7BD).
  - Textos alternativos (alt) em todas as imagens de produtos.
- **SEO Local:** Otimização para mecanismos de busca para capturar clientes da região da doceria.
- **Segurança:** Protocolo HTTPS obrigatório e conformidade com a LGPD para armazenamento de dados de contato.

## 6. Arquitetura de Informação & Layout de Referência

```
[ HEADER: Logo | Navegação | Botão WhatsApp | Carrinho ]
--------------------------------------------------------
[ HERO SECTION: Foto Imersiva + Título Serifado + CTAs ]
--------------------------------------------------------
[ CATEGORIAS: Cards Círculos em Rosa Suave + Borda ]
--------------------------------------------------------
[ SOBRE A MARCA: "Mais que comida, são boas histórias" ]
--------------------------------------------------------
[ WIDGET: Monte seu Bolo em Passos Interativos ]
--------------------------------------------------------
[ INSTAGRAM FEED: Galeria Fotográfica Dinâmica ]
--------------------------------------------------------
[ FOOTER: Fundo Chocolate Profundo + Redes + Endereço ]
```

## 7. Métricas de Sucesso (KPIs)

- **Taxa de Conversão para WhatsApp:** Porcentagem de visitantes que iniciam um pedido via botão de checkout.
- **Tempo Médio de Permanência:** Engajamento dos usuários com a ferramenta interativa "Monte seu Bolo".
- **Taxa de Rejeição (Bounce Rate):** Manter abaixo de 35% graças ao design atrativo e à navegação fluida.
