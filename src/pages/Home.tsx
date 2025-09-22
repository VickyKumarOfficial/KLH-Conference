import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import LogoBar from '@/components/sections/LogoBar'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import ThemesSection from '@/components/sections/ThemesSection'

export default function Home() {
  return (
    <>
      <LogoBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <SpeakersSection />
      </main>
    </>
  )
}