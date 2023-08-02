import Header from '@/components/Header'
import { Built, Companies, Footer, Hero, Techies, Works } from '@/components/component'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Works/>
      <Techies/>
      <Built/>
      <Footer/>
    </div>
  )
}
