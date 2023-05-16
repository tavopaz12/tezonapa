import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Home/Layout'
import Gallery from '@/components/UI/Gallery'
import { comudeSubLinks } from 'config/comudeSubLinks'

import beis1 from '/public/images/Comude/beis1.webp'
import beis2 from '/public/images/Comude/beis2.webp'
import beis3 from '/public/images/Comude/beis3.webp'
import beis4 from '/public/images/Comude/beis4.webp'
import beis5 from '/public/images/Comude/beis5.webp'
import beis6 from '/public/images/Comude/beis6.webp'
import beis7 from '/public/images/Comude/beis7.webp'
import beis8 from '/public/images/Comude/beis8.webp'
import Title from '@/components/UI/Title'
import ArticlesPricipals from '@/components/UI/ArticlesPricipals'
import { getArticles } from '@/services/article/getArticles'
import { getEvents } from '@/services/event/getEvents'

export default function Index({ articles, events }) {
  return (
    <Layout
      title="Béisbol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="beisbol" />

      {articles.error ? null : (
        <>
          {articles.articles.length > 0 && (
            <section className="mt-8 mb-8 px-10 max-md:px-4">
              <ArticlesPricipals data={articles} events={events} />
            </section>
          )}
        </>
      )}

      <section className="text-center px-10 max-md:px-4">
        <Title title="Historia" />
        <p className="text-lg text-justify mt-4 max-md:text-base">
          Está claro que el béisbol moderno se desarrolló en Estados Unidos,
          aunque el origen exacto del juego es difícil de determinar. La mayoría
          de los estudios creen que el béisbol evolucionó desde una variedad de
          juegos similares. Una leyenda popular cuenta que Abner Doubleday,
          quién llegó a ser oficial del Ejército de la Unión durante la Guerra
          Civil estadounidense (1861-1865), inventó el béisbol en Cooperstown
          (Nueva York) en 1839.
        </p>
        <p className="text-lg mt-4 text-justify max-md:text-base">
          Existen evidencias de que se han practicado juegos con un palo y una
          bola desde los primeros albores de la civilización. Culturas antiguas,
          en Persia, Egipto y Grecia, practicaron juegos con un palo y una bola
          para divertirse y como parte de ciertas ceremonias. Juegos de este
          tipo se extendieron durante la Edad Media por toda Europa y se
          hicieron populares en variadas formas. Los europeos introdujeron
          juegos similares en sus colonias de América hacia el siglo XVI.
        </p>
      </section>

      <section className="px-10 max-md:px-4 mb-8 text-center mt-4">
        <Title title="Cañeros de Tezonapa" />
        <Gallery
          images={[beis3, beis2, beis4, beis8, beis5, beis6, beis7, beis1]}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title, 'Comude - Beisbol')
  const events = await getEvents('Comude - Beisbol')

  return {
    props: {
      articles,
      events,
    },
  }
}
