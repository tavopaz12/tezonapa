export const links = [
  {
    title: 'Inicio',
    slug: '/',
    link: 'home',
    subLinks: false,
    listLinks: [],
  },
  {
    title: 'Sobre Nosotros',
    slug: '/about',
    link: 'about',
    subLinks: false,
    listLinks: [],
  },
  {
    title: 'Areas municipales',
    slug: '/',
    link: 'areas-municipales',
    subLinks: true,
    listLinks: [
      {
        title: 'comude',
        slug: '/comude',
      },
      { title: 'comercio', slug: '/comercio' },
      { title: 'desarrollo social', slug: '/desarrollo-social' },
      { title: 'fomento agropecuario', slug: '/fomento-agropecuario' },
      { title: 'eduación', slug: '/educaion' },
    ],
  },
  {
    title: 'Inapam',
    slug: '/inapam',
    link: 'inapam',
    subLinks: false,
    listLinks: [],
  },
  {
    title: 'Cartilla Militar',
    slug: '/cartilla-militar',
    link: 'cartilla-miliar',
    subLinks: false,
    listLinks: [],
  },
  {
    title: 'Citas',
    slug: '/citas',
    link: 'citas',
    subLinks: false,
    listLinks: [],
  },
]
