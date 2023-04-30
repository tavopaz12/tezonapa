import Layout from '@/components/Header/Layout'
import Image from 'next/image'

import mision from '@/assets/images/mision.jpg'
import vision from '@/assets/images/vision.jpg'

export default function Index() {
  return (
    <Layout activeLink="about">
      <section id="valores" className="mb-8 px-10">
        <h2 className="text-3xl text-center max-md:text-xl capitalize font-bold text-[#457453]">
          Misión
        </h2>

        <div className="flex justify-center gap-8 w-full items-center">
          <Image
            className="w-[250px] h-[250px] rounded-2xl"
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

        <h2 className="text-3xl mt-5 text-center max-md:text-xl capitalize font-bold text-[#457453]">
          Visión
        </h2>

        <div className="flex justify-center gap-8 w-full items-center">
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
            className="w-[250px] h-[250px] rounded-2xl"
            src={mision}
            alt="Mision"
          />
        </div>
      </section>{' '}
    </Layout>
  )
}
