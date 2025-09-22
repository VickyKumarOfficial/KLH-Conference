import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import LogoBar from '@/components/sections/LogoBar'
import { SpeakersSection } from '@/components/sections/SpeakersSection'

export default function Home() {
  return (
    <>
      <LogoBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
      </main>
    </>
  )
}