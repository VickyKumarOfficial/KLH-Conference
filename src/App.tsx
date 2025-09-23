import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ConferenceNavbar from '@/components/comp-577'
import Home from '@/pages/Home'
import Schedule from '@/pages/Schedule'
import { Speakers } from '@/pages/Speakers'
import Registration from '@/pages/Registration'
import AboutUs from '@/pages/AboutUs'
import Conferences from '@/pages/Conferences'
import Contact from '@/pages/Contact'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableSystem>
      <Router>
        <div className="min-h-screen bg-background transition-colors duration-300">
          <ConferenceNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <WhatsAppFloat />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
