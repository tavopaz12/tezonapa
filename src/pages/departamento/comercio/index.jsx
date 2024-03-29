import Layout from '@/components/Home/Layout'

import Card from '@/components/Comercio/Card'

import solicitudAlta from '/public/images/comercio/solicitud_alta.webp'
import solicitudBaja from '/public/images/comercio/solicitud_baja.webp'
import solicitudRefrendo from '/public/images/comercio/padron.webp'
import ArticlesPricipals from '@/components/UI/ArticlesPricipals'
import { getArticles } from '@/services/article/getArticles'
import { getEvents } from '@/services/event/getEvents'

export default function Index({ articles, events }) {
  return (
    <Layout
      activeLink="areas-municipales"
      title="Comercio - H. Ayuntamiento, Tezonapa">
      {articles.error ? null : (
        <>
          {articles.articles.length > 0 && (
            <section className="mt-8 mb-8 px-10 max-md:px-4">
              <ArticlesPricipals data={articles} events={events} />
            </section>
          )}
        </>
      )}
      <section className="px-10 max-md:flex-col flex gap-4 justify-between max-md:px-4 mb-6">
        <Card
          title="Solicitud de alta"
          img={solicitudAlta}
          namePdf="solicitud_alta_comercio"
          requisitos={[
            'Solicitud en formato único proporcionado por la coordinación de comercio',
            'Copia de identificación oficial',
            'Copia de comprobante de domicilio(No mayor a dos meses)',
            'Contrato de arrendamiento (copia del ultimo predial)',
            'Copia del rfc y alta en hacienda (si lo tramito ante el sat)',
            'Copia de acta constitutiva y poderes(si es persona moral)',
            'Tramite ante la secretaria de salubridad(si el giro lo requiere)',
            'Constancia de uso de suelo expedida por obras públicas(si el giro lo requiere)',
            'Dictamen de protección civil (si el giro lo requiere)',
            'Anuencia de 10 vecinos de la cuadra con copia del ife (si venden bebidas alcohólicas)',
            'Efectuar el pago de los derechos correspondientes en la tesorería municipal',
          ]}
        />
        <Card
          title="Solicitud de baja"
          img={solicitudBaja}
          namePdf="solicitud_baja_comercio"
          requisitos={[
            'Solicitud en formato único proporcionado por la coordinación de comercio',
            'Original de la licencia de funcionamiento anterior',
          ]}
        />
        <Card
          title="Solicitud de refrendo"
          img={solicitudRefrendo}
          namePdf="solicitud_baja_comercio"
          requisitos={[
            'Solicitud en formato único proporcionado por coordinación de comercio',
            'Original de la licencia de funcionamiento anterior',
            'Carta bajo protesta de decir verdad que no ha efectuado cambio de domicilio, de giro de propietario, de razón social o algún otro cambio importante en su establecimiento',
            'Efectuar el pago de los derechos correspondientes en la tesorería municipal',
          ]}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title, 'Comercio')
  const events = await getEvents('Comercio')

  return {
    props: {
      articles,
      events,
    },
  }
}
