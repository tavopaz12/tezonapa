import Layout from '@/components/Header/Layout'
import banner from '@/assets/images/banner.webp'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import presidenta from '@/assets/images/claudia_colina.webp'
import { imagesCarouselHome } from 'config/carouselHome'

import webp from '@/assets/images/Cascada-1.webp'

export default function Home() {
  return (
    <Layout imgBanner={banner} activeLink="home">
      <article className="px-10 py-5 max-md:px-4">
        <section className="flex max-md:flex-col justify-between mb-8">
          <div className="w-2/4 max-md:w-full">
            <Image
              className="h-full w-full object-cover"
              src={webp}
              alt="hola"
            />
          </div>

          <div className="w-2/4 max-md:w-full grid place-items-center">
            <h2 className="font-bold capitalize text-xl mb-4">
              Publicación Destacada!!
            </h2>
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
            <div className="w-[50%] max-md:w-full">
              <Image
                alt="presidenta municipal"
                priority
                src={presidenta}
                className="w-full h-[25rem] max-md:h-[10rem] object-cover"
              />
            </div>

            <div className="w-[50%] grid justify-center max-md:w-full max-md:mt-5"></div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
