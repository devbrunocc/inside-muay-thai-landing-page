export const siteConfig = {
  name: "Inside Muay Thai",
  unit: "Bruno Marques",
  city: "Piracicaba",
  rating: "5,0",
  reviewCount: 72,
  phone: "(19) 3927-7970",
  phoneHref: "tel:+551939277970",
  instagram: "https://www.instagram.com/insidemuaythaipiracicaba/",
  whatsappBase: "https://wa.me/message/GSEHTGZDQNSKP1",
  address: {
    street: "R. Leogildo Salvagni, 370",
    district: "Água Branca",
    cityState: "Piracicaba — SP",
    zip: "13425-130",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Leogildo%20Salvagni%2C%20370%2C%20Piracicaba%2C%20SP",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Leogildo%20Salvagni%2C%20370%2C%20Piracicaba%2C%20SP&output=embed",
  services: [
    {
      title: "Muay Thai adulto",
      copy: "Técnica, condicionamento e evolução no seu ritmo — para quem está começando ou já treina.",
      message: "Olá! Vi o site da Inside Muay Thai e gostaria de saber mais sobre o Muay Thai adulto.",
    },
    {
      title: "Muay Thai infantil",
      copy: "Uma prática esportiva que trabalha coordenação, disciplina, respeito e confiança.",
      message: "Olá! Vi o site da Inside Muay Thai e gostaria de saber mais sobre o Muay Thai infantil.",
    },
    {
      title: "Personal Fight",
      copy: "Treino individual para objetivos específicos, com atenção dedicada durante toda a aula.",
      message: "Olá! Vi o site da Inside Muay Thai e gostaria de saber mais sobre o Personal Fight.",
    },
    {
      title: "Condicionamento",
      copy: "Treinos intensos e dinâmicos para gastar energia, ganhar resistência e cuidar do corpo.",
      message: "Olá! Vi o site da Inside Muay Thai e gostaria de saber mais sobre os treinos de condicionamento.",
    },
  ],
  testimonials: [
    "Excelente estabelecimento, proprietário e instrutor excelente pessoa. Nota 10.",
    "Muito boa! Ótimo professor e ótimos alunos, ambiente com uma energia excelente!",
    "Está sempre com um sorriso no rosto para receber. A melhor recomendação que poderia fazer.",
  ],
  photos: [
    {
      src: "/academia/3.jpg",
      alt: "Fachada preta do Centro de Treinamento Inside Muay Thai Bruno Marques em Piracicaba",
      label: "Fachada",
    },
    {
      src: "/academia/2.jpg",
      alt: "Área ampla de treino da Inside Muay Thai com tatame azul e sacos de pancada",
      label: "Área de treino",
    },
    {
      src: "/academia/1.jpg",
      alt: "Recepção e área de equipamentos da Inside Muay Thai",
      label: "Estrutura",
    },
  ],
} as const;

export function whatsappUrl(message: string) {
  return `${siteConfig.whatsappBase}?text=${encodeURIComponent(message)}`;
}
