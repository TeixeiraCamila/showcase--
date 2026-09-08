const products = [
  {
    id: 1,
    name: "Primavera",
    description: "Buquê com flores da estação, tons pastel.",
    category: "buques",
    price: 120,
    image: "./assets/images/products/product_01.webp",
    alt: "Buquê de flores pastel sobre fundo neutro"
  },
  {
    id: 2,
    name: "Aurora",
    description: "Buquê delicado em tons rosados.",
    category: "buques",
    price: 140,
    image: "./assets/images/products/product_02.webp",
    alt: "Buquê de flores rosas e brancas"
  },
  {
    id: 3,
    name: "Noiva",
    description: "Arranjo elegante para casamentos.",
    category: "casamentos",
    price: 260,
    image: "./assets/images/products/product_03.webp",
    alt: "Buquê de noiva com flores brancas"
  },
  {
    id: 4,
    name: "Presente Lírio",
    description: "Lírios com embalagem para presentear.",
    category: "presentes",
    price: 180,
    image: "./assets/images/products/product_05.webp",
    alt: "Arranjo de lírios em vaso de presente"
  },
  {
    id: 5,
    name: "Campo Seco",
    description: "Flores secas e texturas naturais.",
    category: "flores-secas",
    price: 95,
    image: "./assets/images/products/product_06.webp",
    alt: "Arranjo de flores secas"
  },
  {
    id: 6,
    name: "Verde Casa",
    description: "Planta em vaso para decorar.",
    category: "plantas",
    price: 110,
    image: "./assets/images/products/product_07.webp",
    alt: "Planta verde em vaso cerâmico"
  },
  {
    id: 7,
    name: "Assinatura Mensal",
    description: "Flores frescas entregues todo mês.",
    category: "assinaturas",
    price: 199,
    image: "./assets/images/products/product_04.webp",
    alt: "Flores frescas em arranjo mensal"
  },
  {
    id: 8,
    name: "Pétalas",
    description: "Buquê compacto e romântico.",
    category: "buques",
    price: 135,
    image: "./assets/images/products/product_08.webp",
    alt: "Buquê compacto de flores em tons suaves"
  }
];

const categories = [
  { id: "todos", label: "Todos", count: products.length },
  { id: "buques", label: "Buquês", count: products.filter((p) => p.category === "buques").length },
  { id: "presentes", label: "Presentes", count: products.filter((p) => p.category === "presentes").length },
  { id: "casamentos", label: "Casamentos", count: products.filter((p) => p.category === "casamentos").length },
  { id: "flores-secas", label: "Flores secas", count: products.filter((p) => p.category === "flores-secas").length },
  { id: "plantas", label: "Plantas", count: products.filter((p) => p.category === "plantas").length },
  { id: "assinaturas", label: "Assinaturas", count: products.filter((p) => p.category === "assinaturas").length }
];
