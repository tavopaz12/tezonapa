import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Header/Layout'
import Title from '@/components/UI/Title'
import { comudeSubLinks } from 'config/comudeSubLinks'

export default function index() {
  return (
    <Layout
      title="Básquetbol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="basquetbol" />

      <section className='px-10 text-center'>
        <Title title="Historia" />
      </section>
    </Layout>
  )
}
