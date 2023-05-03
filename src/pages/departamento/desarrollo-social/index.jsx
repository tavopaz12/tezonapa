import Layout from '@/components/Header/Layout'
import Carousel from '@/components/UI/Carousel'

import desarrolloSocial1 from '@/assets/images/desarrollo_social/desarrollo_social1.jpg'
import desarrolloSocial2 from '@/assets/images/desarrollo_social/desarrollo_social2.jpg'
import desarrolloSocial3 from '@/assets/images/desarrollo_social/desarrollo_social3.jpg'
import desarrolloSocial4 from '@/assets/images/desarrollo_social/desarrollo_social4.png'

import Title from '@/components/UI/Title'
import Hr from '@/components/UI/Hr'

const steps = [
  {
    title: 'Rotoplas',
  },
  {
    title: 'Laminas',
  },
  {
    title: 'Laguna Chica',
  },
  {
    title: 'Calle Matias',
  },
  {
    title: 'Caxapa',
  },
  {
    title: 'Guadalupe Victoria',
  },
]

export default function Index() {
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
              className="w-full last:border-none border-r-2 border-gray-200 text-white font-bold px-8 py-2"
              key={index}>
              {step.title}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-4 gap-0 mt-4">
          <div class="bg-red-500 col-span-2 row-span-2">
            <p>Hola</p>
          </div>
          <div class="bg-green-500 col-start-3 col-end-4 row-start-1 row-end-2">
            1
          </div>
          <div class="bg-blue-500 col-start-4 col-end-5 row-start-1 row-end-2">
            2
          </div>
          <div class="bg-purple-500 col-start-3 col-end-5 row-start-2 row-end-3">
            3
          </div>
          <div class="bg-yellow-500 col-start-4 col-end-5 row-start-2 row-end-3">
            4
          </div>
        </div>
      </section>
    </Layout>
  )
}
