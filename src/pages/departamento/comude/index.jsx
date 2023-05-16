import Layout from '@/components/Home/Layout'
import Carousel from '@/components/UI/Carousel'

import futbol from '/public/images/Comude/futbol.webp'
import beisbol from '/public/images/Comude/beisbol.webp'
import volleyball from '/public/images/Comude/voll.webp'
import visoria from '/public/images/Comude/visoria.webp'
import visoria1 from '/public/images/Comude/visoria1.webp'

import NavComude from '@/components/Comude/NavComude'
import Title from '@/components/UI/Title'
import Image from 'next/image'

import { comudeSubLinks } from 'config/comudeSubLinks'
import { getArticles } from '@/services/article/getArticles'
import { getEvents } from '@/services/event/getEvents'
import ArticlesPricipals from '@/components/UI/ArticlesPricipals'

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

export default function Comude({ articles, events }) {
  console.log(articles)
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

      {articles.error ? null : (
        <>
          {articles.articles.length > 0 && (
            <section className="mt-8 mb-8 px-10 max-md:px-4">
              <ArticlesPricipals data={articles} events={events} />
            </section>
          )}
        </>
      )}

      <section className="px-10 max-md:px-4 mb-8 gap-8 flex justify-between max-md:flex-col max-md:gap-8">
        <div className="w-2/4 text-center max-md:w-full">
          <Title title="Misión" />

          <div className="grid place-items-center">
            <p className="text-left max-md:text-justify mt-2 text-lg max-md:text-base">
              Estimular, promover y apoyar la enseñanza del deporte para todos
              los habitantes del Municipio en espacios deportivos con
              infraestructura necesaria y personal calificado
            </p>
            <Image
              priority
              alt="vision"
              src={visoria}
              className="h-[300px] w-[300px] object-cover mt-4"
            />
          </div>
        </div>

        <div className="w-2/4 text-center max-md:w-full">
          <Title title="Visión" />

          <div className="grid place-items-center">
            <p className="text-left max-md:text-justify mt-2 text-lg max-md:text-base">
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

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title, 'comude')
  const events = await getEvents('comude')

  return {
    props: {
      articles,
      events,
    },
  }
}
