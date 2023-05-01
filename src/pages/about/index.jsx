import Layout from '@/components/Header/Layout'
import Image from 'next/image'

import mision from '@/assets/images/mision.jpg'
import vision from '@/assets/images/vision.jpg'
import cultivo from '@/assets/images/cultivos.jpg'

export default function Index() {
  return (
    <Layout activeLink="about">
      <section id="valores" className="mb-8 px-10 mt-5">
        <Title title="Misión" />

        <div className="flex justify-center gap-8 w-full items-center max-md:flex-col">
          <Image
            className="w-[250px] h-[250px] rounded-2xl max-md:mt-4 shadow-gray-500 shadow-lg"
            src={mision}
            alt="Mision"
          />
          <p className="text-lg text-justify w-[60%] mt-1 max-md:text-base max-md:w-full">
            Ser un gobierno justo y equitativo, que garantice el respeto a los
            derechos constitucionales Y humanos de la ciudadanía, que impulse el
            esfuerzo de los habitantes para el mejoramiento de sus condiciones
            de vida; trabajando con racionalidad, honestidad y transparencia;
            otorgando servicios de calidad y con equidad, fomentando el
            desarrollo sustentable del territorio municipal, mediante una
            adecuada gestión y aplicación de los recursos municipales.
          </p>
        </div>

        <Title title="Visión" />

        <div className="flex justify-center gap-8 w-full items-center max-md:flex-col">
          <p className="text-lg text-justify w-[60%] mt-1 max-md:text-base max-md:w-full">
            Convertirse en un municipio de resultados, comprometido, incluyente,
            transparente y cercano a la gente, generando una administración
            pública municipal eficaz y eficiente capaz de posicionarse en un
            entorno económico actualmente demandante y profundamente dinámico,
            que mida sus logros y alcances mediante la percepción inmediata y
            tangible de mejoras por parte de la ciudadanía, mediante una
            excelente gestión, manejo y aplicación de los recursos públicos
          </p>
          <Image
            className="w-[250px] h-[250px] rounded-2xl shadow-gray-500 shadow-lg"
            src={vision}
            alt="Mision"
          />
        </div>
      </section>

      <section className="px-10 mb-8">
        <Title title="Historia" />

        <div className='flex items-center justify-center gap-8'>
          <Image src={cultivo} alt="cultivos" className='h-[300px] w-[300px] object-cover rounded-lg shadow-gray-500 shadow-lg' />
          <p className="text-lg mt-5 text-justify w-full max-md:text-base max-md:w-full">
            El municipio de Tezonapa fue creado por la ley No. 93 en 1960,
            separándose de Zongolica y englobando varias congregaciones. El
            municipio tiene una superficie de 351 km² y algunos de sus
            habitantes hablan náhuatl. Los principales cultivos y productos del
            municipio son tabaco, ramio, hule, caña de azúcar y café. Dos
            personajes ilustres son Agustina Mora Moran, conocida como La
            Coronela, quien fue una revolucionaria ejemplar y Silverio Alegría,
            un destacado líder agrarista en la revolución mexicana. La zona
            cálida del municipio de Zongolica, que más tarde se integraría al
            municipio de Tezonapa, fue cuna de importantes plantaciones de
            tabaco desde 1956. En 1882, los terrenos de la Hacienda de las
            Josefinas fueron vendidos y se fundó el poblado de Tezonapa. En 1894
            se inició la construcción del ferrocarril que comunicaría a la
            ciudad de Córdoba con Tierra Blanca, y 11 años después esta línea se
            comunicó con Motzorongo. El ingenio de Motzorongo contaba con una
            fábrica de azúcar, un alambique, un aserradero mecánico y un
            elegante hotel con 52 habitaciones. La empresa N. Sotelo y Compañía
            adquirió los terrenos conocidos de Barranca Seca en 1901, fundando
            posteriormente el Ingenio Alcoholero Constancia S.A. En 1903, la
            testamentaria del General Carlos Pacheco Villalobos vendió las
            haciendas Josefinas y Motzorongo a la compañía norteamericana The
            Motzorongo Company, cuya sede se encontraba en Chicago.
          </p>
        </div>
      </section>
    </Layout>
  )
}

function Title({ title }) {
  return (
    <h2 className="text-3xl mt-5 text-center max-md:text-2xl capitalize font-bold text-[#457453]">
      {title}
    </h2>
  )
}
