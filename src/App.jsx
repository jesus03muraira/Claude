import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Reservations from './components/Reservations'
import Testimonials from './components/Testimonials'
import Visitanos from './components/Visitanos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reservations />
        <Testimonials />
        <Visitanos />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
