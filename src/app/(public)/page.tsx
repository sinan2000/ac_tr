import Hero from '@/components/homepage/hero'
import ChooseUs from '@/components/homepage/choose-us'
import AboutUs from '@/components/homepage/about-us'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        {/* Product Categories */}
        <ChooseUs />
        {/* Featured Products */}
        <AboutUs />
        {/* News / Blog Section */}
        {/* CTA Section */}
      </main>
    </div>
  )
}
