import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBadges from "@/components/trust-badges"
import NaturalComponents from "@/components/natural-components"
import CharitableInitiatives from "@/components/charitable-initiatives"
import Testimonials from "@/components/testimonials"
import BestSellers from "@/components/best-sellers"
import ResearchBacked from "@/components/research-backed"
import NutritionSolutions from "@/components/nutrition-solutions"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NutritionSolutions />
       <BestSellers />
      <TrustBadges />
      <NaturalComponents />
      <ResearchBacked />
      
      <CharitableInitiatives />
      <Testimonials />
     
      
      <Footer />
    </main>
  )
}
