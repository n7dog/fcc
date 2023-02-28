import Hero from '../components/home/Hero'
import HomeJoin from '../components/home/HomeJoin'
import HomeSermons from '../components/home/HomeSermons'
import { Layout } from '../components/util/Layout'

export default function Home() {
  return (
    <Layout title="FCC | Home">
      <Hero />
      <HomeJoin />
      <HomeSermons />
    </Layout>
  )
}
