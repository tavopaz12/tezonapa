import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Home/Layout'
import Gallery from '@/components/UI/Gallery'
import Title from '@/components/UI/Title'
import { comudeSubLinks } from 'config/comudeSubLinks'

import basquet1 from '/public/images/Comude/basquet1.webp'
import basquet2 from '/public/images/Comude/basquet2.webp'
import basquet3 from '/public/images/Comude/basquet3.webp'
import basquet4 from '/public/images/Comude/basquet4.webp'
import basquet5 from '/public/images/Comude/basquet5.webp'

import Hr from '@/components/UI/Hr'

export default function index() {
  return (
    <Layout
      title="Básquetbol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="basquetbol" />

      <section className="px-10 mb-6 text-center max-md:p-4">
        <Title title="Historia" />

        <p className="text-left text-lg mt-4 max-md:text-base max-md:text-justify">
          Tiene sus orígenes en una escuela de los Estados Unidos, en el año
          1891. Quien promovió este juego fue un señor llamado James Naismith,
          instructor de deporte en el YMCA (Asociación de Jóvenes Cristianos),
          en la ciudad de Springfield (Massachusetts). Cuenta la historia de
          este juego que una caja de duraznos fue el primer cesto empleado por
          quienes crearon el Baloncesto. Este canasto era colocado en lo alto de
          los árboles o de un muro, y los jugadores debían usar una escalera
          para sacar el balón cuando se producía una anotación. Entonces el
          número de jugadores en el campo de era ilimitado, pero para 1983, se
          aceptó que podían jugar en canchas pequeñas cinco contra cinco, y en
          las canchas grandes, nueve contra nueve.
        </p>
      </section>

      <section className="px-10 mt-8 max-md:px-4">
        <Hr />
      </section>

      <section className="px-10 max-md:px-4 mb-6 text-center">
        <Title title="Galeria" />
        <Gallery images={[basquet5, basquet3, basquet4, basquet5, basquet2]} />
      </section>
    </Layout>
  )
}
