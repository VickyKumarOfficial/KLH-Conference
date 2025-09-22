import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import LogoBar from '@/components/sections/LogoBar'

export default function Home() {
  return (
    <>
      <LogoBar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}