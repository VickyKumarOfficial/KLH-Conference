import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ConferenceNavbar from '@/components/comp-577'
import Home from '@/pages/Home'
import Schedule from '@/pages/Schedule'
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
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
