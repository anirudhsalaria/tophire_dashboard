import Header from '@/components/Header'
import { Companies, Hero, Works } from '@/components/component'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Works/>
    </div>
  )
}
