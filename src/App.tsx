import ConferenceNavbar from '@/components/comp-577'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import LogoBar from '@/components/sections/LogoBar'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ConferenceNavbar />
        <LogoBar />
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
