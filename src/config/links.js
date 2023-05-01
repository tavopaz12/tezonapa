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
        slug: '/departamento/comude',
      },
      { title: 'comercio', slug: '/comercio' },
      { title: 'desarrollo social', slug: '/desarrollo-social' },
      { title: 'fomento agropecuario', slug: '/fomento-agropecuario' },
      { title: 'eduación', slug: '/educaion' },
    ],
  },
  {
    title: 'Estructura',
    slug: '/',
    link: 'estructura',
    subLinks: true,
    listLinks: [
      {
        title: 'organigrama',
        externo: true,
        slug: 'http://www.tezonapa.gob.mx/ORGANIGRAMA%20GENERAL%20CON%20ESCUDOSAL%2021-06-2022.pdf',
      },
      {
        title: 'normatividad',
        externo: true,
        slug: 'http://www.tezonapa.gob.mx/C%C3%B3digo%20de%20Conducta%20%20de%20los%20Servidores%20P%C3%BAblicos%20de%20la%20Administraci%C3%B3n%20P%C3%BAblica%20Municipal%20de%20Tezonapa%20Veracruz%202022-2025.pdf',
      },
      {
        title: 'Plan municipal de desarrollo',
        externo: true,
        slug: 'http://tezonapa.gob.mx/transparencia/fracciones/especificas/Gac2022-194%20Martes%2017%20TOMO%20I%20Ext.pdf',
      },
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
