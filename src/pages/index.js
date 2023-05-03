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
            <Image className='h-full w-full object-cover' src={webp} alt="hola" />
          </div>

          <div className="w-2/4 max-md:w-full grid place-items-center">
            <h2 className="font-bold capitalize text-xl mb-4">
              Publicación Destacada!!
            </h2>
            <iframe
              className="h-[25rem] max-md:h-[20rem] w-[80%] max-md:w-full border border-gray-300 p-1"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ZDQBvM9iVNDcu4aLpuRhs5G686yVwsYMdZTkuCQyV56L9yPiENaQhU5T6QDQWcTFl%26id%3D100076983524020&show_text=true&width=500"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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

            <div className="w-[50%] grid justify-center max-md:w-full max-md:mt-5">
              <iframe
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
