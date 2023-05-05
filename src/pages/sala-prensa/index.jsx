import Layout from '@/components/Header/Layout'
import Image from 'next/image'
import img from '/public/images/Cascada-1.webp'

export default function index() {
  return (
    <Layout
      title="Sala de prensa - H. Ayuntamiento, Tezonapa"
      activeLink="sala-prensa">
      <section className="px-10 mb-4">
        <div className="flex gap-6 justify-around items-center bg-gray-100 rounded-2xl p-2">
          <figure className="w-2/4">
            <Image
              className="h-[400px] w-full object-cover"
              alt="hola"
              src={img}
            />
          </figure>
          <div className="w-2/4">
            <h1>Suspensión De Labores</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quo odio odit magni laborum omnis ullam in, sit voluptatum optio,
              obcaecati culpa voluptate soluta temporibus debitis ex totam
              magnam iure!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
