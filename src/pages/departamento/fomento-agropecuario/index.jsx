import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import fomento from '/public/images/fomento_agropecuario/fomento_agro.webp'
import fomento1 from '/public/images/fomento_agropecuario/fomento_agro1.webp'
import fomento2 from '/public/images/fomento_agropecuario/fomento_agro2.webp'

import fomentoG1 from '/public/images/fomento_agropecuario/fomento-g-1.webp'
import fomentoG2 from '/public/images/fomento_agropecuario/fomento-g-2.webp'
import fomentoG3 from '/public/images/fomento_agropecuario/fomento-g-3.webp'
import fomentoG4 from '/public/images/fomento_agropecuario/fomento-g-4.webp'
import fomentoG5 from '/public/images/fomento_agropecuario/fomento-g-5.webp'
import fomentoG6 from '/public/images/fomento_agropecuario/fomento-g-6.webp'
import fomentoG7 from '/public/images/fomento_agropecuario/fomento-g-7.webp'
import fomentoG8 from '/public/images/fomento_agropecuario/fomento-g-8.webp'
import fomentoG9 from '/public/images/fomento_agropecuario/fomento-g-9.webp'
import fomentoG10 from '/public/images/fomento_agropecuario/fomento-g-10.webp'
import fomentoG11 from '/public/images/fomento_agropecuario/fomento-g-11.webp'
import fomentoG12 from '/public/images/fomento_agropecuario/fomento-g-12.webp'
import fomentoG13 from '/public/images/fomento_agropecuario/fomento-g-13.webp'
import fomentoG14 from '/public/images/fomento_agropecuario/fomento-g-14.webp'
import fomentoG15 from '/public/images/fomento_agropecuario/fomento-g-15.webp'

import verdeCampo from '/public/images/fomento_agropecuario/verde_es_campo.webp'

import Title from '@/components/UI/Title'
import Image from 'next/image'
import Hr from '@/components/UI/Hr'
import Gallery from '@/components/UI/Gallery'

const galleryImages = [
  fomentoG1,
  fomentoG2,
  fomentoG3,
  fomentoG4,
  fomentoG5,
  fomentoG6,
  fomentoG7,
  fomentoG8,
  fomentoG9,
  fomentoG10,
  fomentoG11,
  fomentoG12,
  fomentoG13,
  fomentoG14,
  fomentoG15,
]

const images = [
  {
    src: fomento2,
    title: 'Entrega de plantas',
  },
  {
    src: fomento,
  },
  {
    src: fomento1,
  },
]

export default function Index() {
  return (
    <Layout
      activeLink="areas-municipales"
      title="Fomento Agropecuario - H. Ayuntamiento, Tezonapa">
      <section className="mb-4">
        <Carousel images={images} autoPlay showButtons delay="5000" />
      </section>

      <section className="mt-8 px-10 max-md:px-4 mb-4">
        <Hr />
      </section>

      <section className="px-10 max-md:px-4 text-center mb-4">
        <Title title="Verde es el campo" />
        <div className="flex max-md:flex-col gap-5 items-center justify-center mt-4">
          <div className="w-2/4 max-md:w-full">
            <p className="text-left max-md:text-base max-md:text-justify text-gray-600 text-lg mt-4 max-md:mt-0 font-semibold">
              Tezonapa representa una parte fundamental para empresas de talla
              internacional en cuanto a producción de café hablamos.
            </p>
            <p className="text-left max-md:text-justify max-md:text-base text-lg mt-4">
              Presidenta Municipal Claudia Rosales Colina en coordinación con la
              Dirección de Fomento Agropecuario, se dio entrega de 200,000
              plantas totalmente gratuitas de café robusta de diferentes clones
              de alto rendimiento. Con esta acción logramos un total de 155
              beneficiados correspondientes a más de 35 comunidades, impulsando
              de esta manera el trabajo y esfuerzo de nuestros productores
              Tezonapeños a través de un importante ahorro con el fin de un
              beneficio directo en su economía
            </p>
          </div>

          <figure className="w-2/4 max-md:w-full">
            <Image
              className="h-[300px] object-cover"
              alt="verde es el campo"
              src={verdeCampo}
            />
          </figure>
        </div>
      </section>

      <section className='px-10 max-md:px-4 mt-8 mb-6'>
        <Hr/>
      </section>

      <section className="px-10 max-md:px-4 mb-6 text-center">
        <Title title="Gestión 2022 - 2025" />
        <Gallery images={galleryImages} />
      </section>
    </Layout>
  )
}
