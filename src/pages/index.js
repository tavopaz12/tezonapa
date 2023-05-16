import Layout from '@/components/Home/Layout'
import banner from '/public/images/banner.webp'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import presidenta from '/public/images/claudia_colina.webp'
import { imagesCarouselHome } from 'config/carouselHome'
import ArticlesPricipals from '@/components/UI/ArticlesPricipals'
import { getArticles } from '@/services/article/getArticles'
import { getEvents } from '@/services/event/getEvents'

export default function Home({ articles, events }) {
  return (
    <Layout imgBanner={banner} activeLink="home">
      <article className="px-10 py-5 max-md:px-4">
        {articles.error ? null : (
          <>
            {articles.articles.length > 0 && (
              <section>
                <ArticlesPricipals data={articles} events={events} />
              </section>
            )}
          </>
        )}

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

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title, 'principal')
  const events = await getEvents('principal')

  return {
    props: {
      articles,
      events,
    },
  }
}
