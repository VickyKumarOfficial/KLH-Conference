import ConferenceNavbar from '@/components/comp-577'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ConferenceNavbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            KLH Conference 2025
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an extraordinary conference experience
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              View Speakers
            </button>
            <button className="border border-border px-6 py-3 rounded-md hover:bg-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
