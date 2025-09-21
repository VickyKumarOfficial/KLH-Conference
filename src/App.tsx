import ConferenceNavbar from '@/components/comp-577'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ConferenceNavbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
