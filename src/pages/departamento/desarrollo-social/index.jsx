import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import desarrolloSocial1 from '@/assets/images/desarrollo_social/desarrollo_social1.webp'
import desarrolloSocial2 from '@/assets/images/desarrollo_social/desarrollo_social2.webp'
import desarrolloSocial3 from '@/assets/images/desarrollo_social/desarrollo_social3.webp'
import desarrolloSocial4 from '@/assets/images/desarrollo_social/desarrollo_social4.webp'

import Title from '@/components/UI/Title'
import Hr from '@/components/UI/Hr'

import { useState } from 'react'
import Content from '@/components/DesarrolloSocial/Content'
import {
  articleCalleMatias,
  articleLaguna,
  articleLaminas,
  articleRotoplas,
} from 'config/desarrolloSocial'

const steps = [
  {
    title: 'Rotoplas',
    content: articleRotoplas,
  },
  {
    title: 'Laminas',
    content: articleLaminas,
  },
  {
    title: 'Laguna Chica',
    content: articleLaguna,
  },
  {
    title: 'Calle Matias',
    content: articleCalleMatias,
  },
  {
    title: 'Caxapa',
  },
  {
    title: 'Guadalupe Victoria',
  },
]

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleStepSelect = (step) => {
    setCurrentStep(step)
  }

  return (
    <Layout
      activeLink="areas-municipales"
      title="Desarrollo Social - H. Ayuntamiento, Tezonapa">
      <section className="mb-4">
        <Carousel
          images={[
            desarrolloSocial1,
            desarrolloSocial2,
            desarrolloSocial3,
            desarrolloSocial4,
          ]}
          autoPlay={true}
          showButtons={true}
          delay="8000"></Carousel>
      </section>

      <section className="mt-8 mb-8 px-10">
        <Hr />
      </section>

      <section className="text-center mt-4 mb-4 px-10">
        <Title title="Sobre nosotros" />
        <p className="text-left text-lg mt-4 mb-8">
          Organización de la dirección de desarrollo social h. ayuntamiento de
          Tezonapa, Veracruz se elabora por ley orgánica del municipio libre del
          estado de Veracruz de Ignacio de la llave, enfocados en lo que es obra
          pública pero esta debe ser encaminada en el bienestar social ya sea en
          infraestructura en general; caminos, luz, agua drenaje, guarniciones,
          banquetas (servicios públicos) apoyo a la vivienda.
        </p>

        <Title title="Misión" />
        <p className="text-left text-lg mt-4">
          Ofrecer a los ciudadanos del municipio la herramienta necesaria para
          superar pobreza y recuperar la grandeza del municipio, generando una
          sociedad en paz, justa y equitativa, pero sobre todo con rostro
          humano.
        </p>
      </section>

      <section className="text-center mb-4 px-10">
        <Title title="Gestión 2022 -  2025" />

        <div className="w-full rounded-xl bg-blue-700 flex gap-0 mt-4 ">
          {steps.map((step, index) => (
            <button
              onClick={() => handleStepSelect(index)}
              className="w-full first:hover:rounded-l-xl last:hover:rounded-r-xl hover:bg-blue-800 last:border-none border-r-2 border-gray-200 text-white font-bold px-8 py-2"
              key={index}>
              {step.title}
            </button>
          ))}
        </div>
      </section>

      <Content content={steps[currentStep]?.content} />
    </Layout>
  )
}
