import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}