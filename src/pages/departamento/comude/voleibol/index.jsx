import NavComude from '@/components/Comude/NavComude'
import Layout from '@/components/Header/Layout'
import { comudeSubLinks } from 'config/comudeSubLinks'

export default function Index() {
  return (
    <Layout
      title="Voleibol | Comude | H. Ayuntamiento Tezonapa"
      activeLink="areas-municipales">
      <NavComude menuLinks={comudeSubLinks} active="voleibol" />

    </Layout>
  )
}
