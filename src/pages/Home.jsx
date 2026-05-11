import SEO from '../components/seo/SEO'
import MainLayout from '../layouts/MainLayout'

import Hero from '../sections/Hero'
import WCU from '../sections/WCU'
import Event from '../sections/Event'
import Voice from '../sections/Voice'

function Home() {
  return (
    <MainLayout>
      <SEO
        title="Samata Shiksha Niketan Lalitpur"
        description="Affordable quality education in Lalitpur."
        keywords="samata school, samta school, samata lalitpur"
      />
      <Hero />
      <WCU/>
      <Event/>
      <Voice/>
    </MainLayout>
  )
}

export default Home