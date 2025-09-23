import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import LogoBar from '@/components/sections/LogoBar'
import { SpeakersSection } from '@/components/sections/SpeakersSection'
import ThemesSection from '@/components/sections/ThemesSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-indigo-200 via-purple-100 to-cyan-200 dark:from-blue-950 dark:via-slate-900 dark:to-blue-900">
      <LogoBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <SpeakersSection />
      </main>
      <Footer />
    </div>
  )
}