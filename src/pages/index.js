import Layout from '@/components/Header/Layout'
import banner from '@/assets/images/banner.png'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import presidenta from '@/assets/images/claudia_colina.jpg'
import { imagesCarouselHome } from 'config/carouselHome'

export default function Home() {
  return (
    <Layout imgBanner={banner} activeLink="home">
      <article className="px-10 py-5 max-md:px-4">
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
                src={presidenta}
                className="w-full h-[25rem] max-md:h-[10rem] object-cover"
              />
            </div>

            <div className="w-[50%] grid justify-center max-md:w-full max-md:mt-5">
              <iframe
                className="h-full w-[500px] max-md:w-full max-md:h-[20rem]"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100076983524020&tabs=timeline&width=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
