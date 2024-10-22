import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Truck, Award, DollarSign, Building2, ArrowRight } from 'lucide-react'
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
