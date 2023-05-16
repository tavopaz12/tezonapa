import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Home/Layout'
import Carousel from '@/components/UI/Carousel'
import { comudeSubLinks } from 'config/comudeSubLinks'

import futbolFemenil from '/public/images/Comude/futbol_femenil.jpg'
import img from '/public/images/Comude/futtez.jpg'

import Title from '@/components/UI/Title'
import Gallery from '@/components/UI/Gallery'

import fut1 from '/public/images/Comude/fut1-10.webp'
import fut2 from '/public/images/Comude/fut1.webp'
import fut3 from '/public/images/Comude/fut-2.webp'
import fut4 from '/public/images/Comude/fut-3.webp'
import Hr from '@/components/UI/Hr'
import { getArticles } from '@/services/article/getArticles'
import { getEvents } from '@/services/event/getEvents'
import ArticlesPricipals from '@/components/UI/ArticlesPricipals'

const images = [
  {
    src: futbolFemenil,
  },
  {
    src: img,
  },
]

const imagesGallery = [fut2, fut1, futbolFemenil, fut3, fut4]

export default function Index({ articles, events }) {
  console.log(articles)
  return (
    <Layout
      title="Fútbol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="futbol" />

      <Carousel images={images} autoPlay showButtons delay="5000" />

      {articles.error ? null : (
        <>
          {articles.articles.length > 0 && (
            <section className="mt-8 mb-8 px-10 max-md:px-4">
              <ArticlesPricipals data={articles} events={events} />
            </section>
          )}
        </>
      )}

      <section className="px-10 max-md:px-4 mt-10 mb-5 grid place-items-center">
        <Hr />

        <Title title="Historia del fútbol" />
        <p className="text-lg max-md:text-justify mt-5 max-md:text-base">
          El Futbol como hoy lo conocemos tiene su origen en las Islas
          Británicas. En las diferentes regiones, el deporte se jugaba con sus
          propias reglas y eso era un verdadero relajo. Fue hasta 1848 cuando
          dos estudiantes de la Universidad de Cambridge reunieron a otras
          escuelas para establecer unas reglas únicas de juego. En 1863 en
          Londres se reúnen en la taberna Free Masson´s para definir si se juega
          con manos y pies, o con sólo los pies. De esta reunión el Rugby tomó
          su camino propio y allí mismo se funda la Football Association,
          teniendo como base las reglas de Cambridge. Las únicas diferencias
          fueron que las reglas de la Futbol Asociación no permitían el juego
          brusco y la utilización de las manos para trasladar el balón.
          Pretendiendo organizar y unificar el Futbol del Reino Unido bajo un
          mismo reglamento, en 1886 se celebró la primera reunión oficial de la
          Internacional Football Association Board (IFAB). En el siglo XX, el 21
          de mayo de 1904 en París se funda la Federación Internacional del
          Futbol Asociado, la FIFA, por representantes de siete países, y en
          1913 la FIFA se sumó como miembro de la IFAB. Actualmente las reglas
          de juego a nivel de la FIFA, son las que rigen el Futbol en todo el
          mundo. Desde entonces el crecimiento de la FIFA ha sido imparable,
          llegando a tener 208 asociaciones divididas en seis confederaciones.
          La Copa Mundial de Futbol que organiza la FIFA es el evento con mayor
          audiencia en el mundo. En Juegos Panamericanos el Futbol masculino ha
          sido deporte oficial desde la primera edición en 1951 en Buenos Aires,
          Argentina
        </p>
      </section>
      <section className="mb-8 grid place-items-center mt-4 px-10 max-md:px-4">
        <Hr />

        <Title title="Liga de Tezonapa" />

        <Gallery images={imagesGallery} />
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title, 'Comude - Futbol')
  const events = await getEvents('Comude - Futbol')

  return {
    props: {
      articles,
      events,
    },
  }
}
