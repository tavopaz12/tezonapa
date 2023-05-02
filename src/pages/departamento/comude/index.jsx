import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import futbol from '@/assets/images/Comude/futbol.jpg'
import beisbol from '@/assets/images/Comude/beisbol.jpg'
import volleyball from '@/assets/images/Comude/voll.jpg'
import visoria from '@/assets/images/Comude/visoria.jpg'
import visoria1 from '@/assets/images/Comude/visoria1.jpg'

import NavComude from '@/components/Comude/NavComude'
import Title from '@/components/UI/Title'
import Image from 'next/image'

import { comudeSubLinks } from 'config/comudeSubLinks'

const images = [
  {
    src: futbol,
    title: 'Futbol',
    desc: 'El fútbol es considerado un deporte de cooperación y oposición cuyo nombre toma su raíz de la palabra inglés británica football, en español balompié, El fútbol es considerado un deporte de cooperación y oposición cuyo nombre toma su raíz de la palabra inglés británica football, en español balompié',
    link: 'comude/futbol',
    titleLink: 'saber más...',
  },
  {
    src: beisbol,
    title: 'Beisbol',
    desc: 'Deporte de competición que se practica con una bola dura y un bate entre dos equipos de nueve jugadores cada uno. Se considera el deporte nacional de Estados Unidos, Debido a su fuerte tradición y gran popularidad; también se juega en muchas partes del mundo por personas de todas las edades.',
    link: 'comude/beisbol',
    titleLink: 'saber más...',
  },
  {
    src: volleyball,
    title: 'Volleyball',
    desc: 'Es un deporte donde dos equipos se enfrentan sobre un terreno de juego liso separados por una red central tratando de pasar el balón por encima de la red hacia el suelo del campo contrario. El balón puede ser tocado o impulsado con golpes limpios, pero no puede ser parado, sujetado, retenido o acompañado.',
    link: 'comude/voleibol',
    titleLink: 'saber más...',
  },
]

export default function Comude() {
  return (
    <Layout
      activeLink="areas-municipales"
      title="Comude - H. Ayuntamiento, Tezonapa">
      <NavComude menuLinks={comudeSubLinks} />

      <section className="mb-8">
        <Carousel
          images={images}
          autoPlay={true}
          showButtons={true}
          delay="8000"
        />
      </section>

      <section className="px-10 mb-8 gap-8 flex justify-between max-md:flex-col max-md:gap-8">
        <div className="w-2/4 text-center max-md:w-full">
          <Title title="Misión" />

          <div className="grid place-items-center">
            <p className="text-left mt-2 text-lg max-md:text-base">
              Estimular, promover y apoyar la enseñanza del deporte para todos
              los habitantes del Municipio en espacios deportivos con
              infraestructura necesaria y personal calificado
            </p>
            <Image
              loading="lazy"
              alt="vision"
              src={visoria}
              className="h-[300px] w-[300px] object-cover mt-4"
            />
          </div>
        </div>

        <div className="w-2/4 text-center max-md:w-full">
          <Title title="Visión" />

          <div className="grid place-items-center">
            <p className="text-left mt-2 text-lg max-md:text-base">
              Ser un referente de la Gestión Municipal del deporte; con un
              compromiso de ofrecer y garantizar a los ciudadanos servicios
              profesionales y especializados de activación física como Política
              de Calidad. Así como Crear torneos en las diferentes categorías
              con una estructura sólida dando el realce que se requiere, dando
              la oportunidad a jóvenes de participar en eventos oficiales más
              allá del municipio.
            </p>
            <Image
              loading="lazy"
              alt="vision"
              src={visoria1}
              className="h-[300px] w-[300px] object-cover mt-4"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
