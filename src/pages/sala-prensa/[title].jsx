import Layout from '@/components/Header/Layout'
import Title from '@/components/UI/Title'
import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const { title } = router.query

  const text = title
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <Layout title={`${text} - H. Ayuntamiento, Tezonapa`}>
      <section className="px-10 text-center">
        <Title title={text} />
      </section>
    </Layout>
  )
}
