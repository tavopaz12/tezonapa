import Layout from '@/components/Header/Layout'
import banner from '/public/images/banner.webp'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import presidenta from '/public/images/claudia_colina.webp'
import { imagesCarouselHome } from 'config/carouselHome'

import suspension from '/public/images/sala-prensa/suspension.webp'
import obra1 from '/public/images/sala-prensa/obra1.webp'

import Link from 'next/link'

export default function Home() {
  return (
    <Layout imgBanner={banner} activeLink="home">
      <article className="px-10 py-5 max-md:px-4">
        <section className="flex max-md:flex-col justify-between mb-8 gap-6">
          <div className="w-2/4 max-md:w-full bg-gray-200 rounded-2xl p-4">
            <Link href="/">
              <h3 className="text-2xl font-bold text-justify text-gray-700">
                ¡SUSPENSIÓN DE LABORES!
              </h3>
            </Link>
            <p className="mt-2 mb-2 text-gray-500">
              Tezonapa, Ver., (04 de mayo del 2023). - Se suspenden actividades
              y labores por parte del H. Ayuntamiento Constitucional de
              Tezonapa, Ver. para el día de mañana. Las actividades de la
              ExpoFeria Tezonapa se llevarán a cabo con total normalidad.
            </p>
            <Image
              className="mt-4 mb-4 max-h-[500px] w-full object-cover"
              alt="principal"
              src={suspension}
            />
            <Link href="/">
              <button className="bg-gray-700 w-full rounded-2xl px-4 py-1 text-lg text-white font-bold">
                Ver mas...
              </button>
            </Link>
          </div>

          <div className="w-2/4 max-md:w-full h-auto flex flex-col justify-between p-4 gap-4">
            <div className="flex items-center gap-4 bg-gray-200 p-2 rounded-2xl">
              <Image
                className="h-44 w-44 object-cover rounded-2xl"
                alt="principal"
                src={obra1}
              />
              <h3 className="text-lg font-bold text-gray-700 leading-6">
                Inicia oficialmente el programa de obras públicas 2023 en la
                comunidad de Col. Agrícola.
              </h3>
            </div>
            <div className="flex items-center gap-4 bg-gray-200 p-2 rounded-2xl">
              <Image
                className="h-44 w-44 object-cover rounded-2xl"
                alt="principal"
                src={obra1}
              />
              <h3 className="text-lg font-bold text-gray-700 leading-6">
                Inicia oficialmente el programa de obras públicas 2023 en la
                comunidad de Col. Agrícola.
              </h3>
            </div>
            <div className="flex items-center gap-4 bg-gray-200 p-2 rounded-2xl">
              <Image
                className="h-44 w-44 object-cover rounded-2xl"
                alt="principal"
                src={obra1}
              />
              <h3 className="text-lg font-bold text-gray-700 leading-6">
                Inicia oficialmente el programa de obras públicas 2023 en la
                comunidad de Col. Agrícola.
              </h3>
            </div>
          </div>
        </section>

        <section id="servicio_comunidad">
          <hr className="border-t-4 border-solid border-[#2D974B] w-full my-5 max-md:mt-0" />

          <div className="text-center">
            <h2 className="text-3xl max-md:text-lg capitalize font-bold text-[#457453]">
              Servicios a la comunidad
            </h2>
            <Carousel images={imagesCarouselHome} />
          </div>

          <hr className="border-t-4 border-solid border-[#2D974B] w-full my-5" />
        </section>

        <section id="blog_municipio">
          <h2 className="text-3xl text-center max-md:text-lg capitalize font-bold text-[#457453] mt-8">
            Blog del municipio
          </h2>

          <div className="flex max-md:block justify-between gap-8 max-md:mt-2 mt-8 mb-8 max-md:mb-2">
            <figure className="w-[50%] max-md:w-full">
              <Image
                alt="presidenta municipal"
                priority
                src={presidenta}
                className="w-full h-[25rem] max-md:h-[10rem] object-cover"
              />
            </figure>

            <div className="w-[50%] grid justify-center max-md:w-full max-md:mt-5">
              <iframe
                loading="lazy"
                aria-label="Facebook"
                className="h-full w-[500px] max-md:w-full max-md:h-[20rem]"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100076983524020&tabs=timeline&width=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
