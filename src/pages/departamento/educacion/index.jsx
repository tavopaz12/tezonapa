import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import educacion from '/public/images/educacion/educacion.webp'
import educacion1 from '/public/images/educacion/educacion1.webp'
import educacion2 from '/public/images/educacion/educacion2.webp'
import educacion3 from '/public/images/educacion/educacion3.webp'
import educacion4 from '/public/images/educacion/educacion4.webp'
import educacion5 from '/public/images/educacion/educacion5.webp'
import educacion6 from '/public/images/educacion/educacion6.webp'
import educacion7 from '/public/images/educacion/educacion7.webp'
import educacion8 from '/public/images/educacion/educacion8.webp'
import educacion9 from '/public/images/educacion/educacion9.webp'

import biblioteca from '/public/images/educacion/bibliotecas/biblioteca.webp'
import biblioteca1 from '/public/images/educacion/bibliotecas/biblioteca1.webp'
import biblioteca2 from '/public/images/educacion/bibliotecas/biblioteca2.webp'
import biblioteca3 from '/public/images/educacion/bibliotecas/biblioteca3.webp'
import biblioteca4 from '/public/images/educacion/bibliotecas/biblioteca4.webp'
import biblioteca5 from '/public/images/educacion/bibliotecas/biblioteca5.webp'
import biblioteca6 from '/public/images/educacion/bibliotecas/biblioteca6.webp'
import biblioteca7 from '/public/images/educacion/bibliotecas/biblioteca7.webp'
import biblioteca8 from '/public/images/educacion/bibliotecas/biblioteca8.webp'
import biblioteca9 from '/public/images/educacion/bibliotecas/biblioteca9.webp'
import biblioteca10 from '/public/images/educacion/bibliotecas/biblioteca10.webp'

import Title from '@/components/UI/Title'
import Hr from '@/components/UI/Hr'
import Image from 'next/image'
import Gallery from '@/components/UI/Gallery'
import Modal from '@/components/UI/Modal'
import { useState } from 'react'

const images = [
  {
    src: educacion,
    title: 'Entrega de pizarrones',
    desc: 'Entrega de dos pizarrones para escuelas de las comunidades de Independencia y Motzorongo.',
  },
  {
    src: educacion1,
  },
  {
    src: educacion2,
  },
]

export default function Index() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Layout
      activeLink="areas-municipales"
      title="Educación - H. Ayuntamiento, Tezonapa">
      <section className="mb-4">
        <Carousel images={images} autoPlay showButtons delay="5000" />
      </section>

      <section className="mt-8 mb-8 px-10 max-md:px-4">
        <Hr />
      </section>

      <section className="px-10 max-md:px-4 text-center mb-6">
        <Title title="Educación" />
        <p className="text-lg max-md:text-justify max-md:text-base text-left mt-4 mb-4">
          La educación es un derecho básico de todos los niños, niñas y
          adolescentes, que les proporciona habilidades y conocimientos
          necesarios para desarrollarse como adultos y además les da
          herramientas para conocer y ejercer sus otros derechos.
        </p>
        <p className="text-lg max-md:text-justify max-md:text-base text-left">
          La educación es uno de los factores que más influye en el avance y
          progreso de personas y sociedades. Además de proveer conocimientos, la
          educación enriquece la cultura, el espíritu, los valores y todo
          aquello que nos caracteriza como seres humanos.
        </p>
      </section>

      <section className="mt-8 mb-8 px-10 max-md:px-4">
        <Hr />
      </section>

      <section className="px-10 text-center mb-10 max-md:px-4">
        <Title title="Sobre Nosotros" />

        <div className="flex items-center mt-6 justify-center gap-3 max-md:flex-col">
          <figure className="w-2/4 grid place-items-center max-md:w-full">
            <Image
              className="h-[350px] max-md:h-[250px] rounded-2xl w-[600px] object-cover"
              alt="educacion"
              src={educacion3}
            />
          </figure>

          <div className="w-2/4 max-md:w-full">
            <p className="text-lg text-left mt-4 mb-4">
              Somos un área encargada de dar apoyo a centros educativos de
              manera moral y participativa desde niños de preescolar a hasta
              alumnos de Universidad para lograr un cambio. Estamos
              comprometidos con la educación, impartimos platicas, talleres en
              las diferentes escuelas, bibliotecas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 text-center mb-6 max-sm:px-4">
        <Hr />
        <Title title="Galeria" />
        <Gallery
          images={[
            educacion4,
            educacion5,
            educacion6,
            educacion7,
            educacion8,
            educacion9,
          ]}
        />
      </section>

      <section className="mt-8 mb-8 px-10 max-md:px-4">
        <Hr />
      </section>

      <section className="px-10 text-center mb-6">
        <Title title="Bibliotecas" />
        <p className="text-left text-xl font-bold mt-2">
          Las bibliotecas desempeñan una labor esencial en el fomento de la
          alfabetización y el aprendizaje, el establecimiento de las bases para
          el desarrollo y la custodia del patrimonio cultural y científico
          universal
        </p>
        <div className="text-left mt-4">
          <button
            className="bg-blue-700 text-white font-bold px-4 py-2 rounded-2xl"
            onClick={() => setShowModal(!showModal)}>
            Ver Horarios
          </button>
        </div>

        {showModal && (
          <Modal title="Horarios" onClose={() => setShowModal(!showModal)}>
            <Horarios />
          </Modal>
        )}

        <Gallery
          images={[
            biblioteca,
            biblioteca1,
            biblioteca2,
            biblioteca3,
            biblioteca4,
            biblioteca5,
            biblioteca6,
            biblioteca7,
            biblioteca8,
            biblioteca9,
            biblioteca10,
          ]}
        />
      </section>
    </Layout>
  )
}

function Horarios() {
  const horarios = [
    {
      lugar: 'Tezonapa',
      horario: 'Martes a sábado de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'Motzorongo',
      horario: 'Martes a sábado de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'Paraiso',
      horario: 'Lunes a viernes de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'Presidio',
      horario: 'Lunes - Viernes de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'Laguna Chica',
      horario: 'Martes a sábado de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'San Agustin',
      horario: 'Martes a sábado de 10:00 AM a 4:00 PM',
    },
    {
      lugar: 'Ixtacapa el chico',
      horario: 'Lunes a viernes de 10:00 AM a 4:00 PM',
    },
  ]
  return (
    <ul class="my-1">
      <li>
        {horarios.map(({ lugar, horario }, index) => (
          <div
            key={index}
            className="text-left m-3 rounded-2xl px-4 py-1 leading-6 text-black">
            <p className="font-bold text-lg capitalize">{lugar}</p>
            <span className="capitalize text-gray-700">{horario}</span>
          </div>
        ))}
      </li>
    </ul>
  )
}
