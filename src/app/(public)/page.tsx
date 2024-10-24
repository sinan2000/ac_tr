import Hero from '@/components/homepage/hero'
import ChooseUs from '@/components/homepage/choose-us'
import AboutUs from '@/components/homepage/about-us'
import ProductCategories from '@/components/homepage/categories'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <ProductCategories />
        <ChooseUs />
        {/* Featured Products */}
        <AboutUs />
        {/* News / Blog Section */}
        {/* CTA Section */}
      </main>
    </div>
  )
}
