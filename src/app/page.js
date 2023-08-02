import Header from '@/components/Header'
import { Built, Companies, Hero, Techies, Works } from '@/components/component'
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
    </div>
  )
}
