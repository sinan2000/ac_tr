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
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Latest News & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'The Importance of Proper PPE in Healthcare', date: 'May 15, 2023' },
                { title: 'Innovations in Disposable Medical Equipment', date: 'June 2, 2023' },
                { title: 'Sustainability in Medical Supplies: Our Commitment', date: 'June 20, 2023' }
              ].map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                    <CardTitle className="mb-4">{post.title}</CardTitle>
                    <Button variant="link" className="p-0">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our Latest Products</h2>
            <p className="mb-8">Subscribe to our newsletter for exclusive offers and industry insights.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="w-full sm:w-auto bg-white text-gray-800" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Products</Link></li>
                <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>1234 Medical Drive</p>
              <p>Health City, HC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@actrmedical.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="flex flex-col gap-4">
                <Input type="email" placeholder="Enter your email" className="bg-gray-700 text-white" />
                <Button type="submit" variant="secondary">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2023 ACTR Medical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
