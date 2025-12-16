import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Cases from './components/Cases'
import Global from './components/Global'
import Contact from './components/Contact'
import FloatingCTA from './components/FloatingCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Products />
      <Cases />
      <Global />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

