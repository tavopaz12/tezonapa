import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import futbol from '@/assets/images/Comude/futbol.jpg'
import beisbol from '@/assets/images/Comude/beisbol.jpg'
import volleyball from '@/assets/images/Comude/voll.jpg'

const images = [
  {
    src: futbol,
    title: 'Futbol',
    desc: 'El fútbol es considerado un deporte de cooperación y oposición cuyo nombre toma su raíz de la palabra inglés británica football, en español balompié, El fútbol es considerado un deporte de cooperación y oposición cuyo nombre toma su raíz de la palabra inglés británica football, en español balompié',
    link: '/',
    titleLink: 'saber más...',
  },
  {
    src: beisbol,
    title: 'Beisbol',
    desc: 'Deporte de competición que se practica con una bola dura y un bate entre dos equipos de nueve jugadores cada uno. Se considera el deporte nacional de Estados Unidos, Debido a su fuerte tradición y gran popularidad; también se juega en muchas partes del mundo por personas de todas las edades.',
  },
  {
    src: volleyball,
    title: 'Volleyball',
    desc: 'Es un deporte donde dos equipos se enfrentan sobre un terreno de juego liso separados por una red central tratando de pasar el balón por encima de la red hacia el suelo del campo contrario. El balón puede ser tocado o impulsado con golpes limpios, pero no puede ser parado, sujetado, retenido o acompañado.',
  },
]

export default function comude() {
  return (
    <Layout
      activeLink="areas-municipales"
      title="Comude - H. Ayuntamiento, Tezonapa">
      <section className="mb-8">
        <Carousel
          images={images}
          autoPlay={true}
          showButtons={true}
          delay="8000"
        />
      </section>
    </Layout>
  )
}
