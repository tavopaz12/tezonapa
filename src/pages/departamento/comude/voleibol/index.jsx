import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Header/Layout'
import Title from '@/components/UI/Title'
import { comudeSubLinks } from 'config/comudeSubLinks'
import Image from 'next/image'

import inventorVoli from '/public/images/Comude/InventorVol.webp'

import voley1 from '/public/images/Comude/volley1.webp'
import voley2 from '/public/images/Comude/volley2.webp'
import voley3 from '/public/images/Comude/volley3.webp'
import voley4 from '/public/images/Comude/volley4.webp'
import voley5 from '/public/images/Comude/volley5.webp'

import Gallery from '@/components/UI/Gallery'
import Hr from '@/components/UI/Hr'

export default function Index() {
  return (
    <Layout
      title="Voleibol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="voleibol" />

      <section className="px-10 mb-6 max-md:px-4 text-center">
        <Title title="Historia" />

        <div className="flex gap-6 items-center justify-center max-md:flex-col max-md:gap-2">
          <Image
            className="h-[300px] w-[300px] object-cover max-md:mt-4"
            alt="iventor del voleibol"
            src={inventorVoli}
          />
          <p className="text-left text-lg max-md:text-justify mt-4 max-md:text-base">
            El voleibol (inicialmente bajo el nombre de mintonette) nació el 9
            de febrero de 1895 en Estados Unidos, en Holyoke, Massachusetts. Su
            inventor fue William G. Morgan, un director de educación física de
            la YMCA. Se trataba de un juego de interior por equipos con
            semejanzas al tenis o al balonmano. Aunque próximo en su
            alumbramiento al baloncesto por tiempo y espacio, se distancia
            claramente de éste en la rudeza, al no existir contacto entre los/as
            jugadores/as. El voleibol, balonvolea o simplemente voley, es un
            deporte donde dos equipos se enfrentan sobre un terreno de juego
            liso separados por una red central, tratando de pasar el balón por
            encima de la red hacia el suelo del campo contrario. El balón puede
            ser tocado o impulsado con golpes limpios, pero no puede ser parado,
            sujetado, retenido o acompañado. Cada equipo dispone de un número
            limitado de toques para devolver el balón hacia el campo contrario
            (un máximo de tres). Habitualmente el balón se golpea con manos y
            brazos, pero también con cualquier otra parte del cuerpo. Una de las
            características más peculiares del voleibol es que los jugadores y
            las jugadoras tienen que ir rotando sus posiciones a medida que van
            consiguiendo puntos.
          </p>
        </div>
      </section>

      <section className='px-10 max-md:px-4 mt-8'>
        <Hr />
      </section>

      <section className="px-10 max-md:px-4 mb-6 text-center">
        <Title title="Galeria" />
        <Gallery images={[voley5, voley2, voley3, voley4, voley1]} />
      </section>
    </Layout>
  )
}
