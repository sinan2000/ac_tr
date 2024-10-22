import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Star, Truck, Award, DollarSign, Building2, ArrowRight } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 font-montserrat">Your Trusted Partner in Medical Disposable Solutions</h1>
              <p className="text-xl mb-8">Quality, reliable, and certified disposable medical equipment for healthcare professionals.</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Our Products <ShoppingCart className="ml-2" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Healthcare professionals using disposable equipment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Surgical Gloves', 'Face Masks', 'Syringes', 'IV Kits'].map((category, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={category}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-lg font-semibold mb-2">{category}</h3>
                    <Button variant="secondary" size="sm">Shop Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Why Choose ACTR Medical?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Certified Quality', description: 'All our products meet the highest medical standards' },
                { icon: Truck, title: 'Fast Worldwide Shipping', description: 'Quick delivery to healthcare facilities globally' },
                { icon: DollarSign, title: 'Competitive Pricing', description: 'Best value for high-quality medical supplies' },
                { icon: Building2, title: 'Trusted by Leaders', description: 'Preferred supplier for top healthcare providers' }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <item.icon className="w-12 h-12 mx-auto text-blue-600" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Premium Surgical Gloves', 'N95 Respirator Masks', 'Advanced IV Kit'].map((product, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={product}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2">{product}</CardTitle>
                    <p className="text-gray-600 mb-4">High-quality disposable medical equipment</p>
                    <p className="font-bold text-lg mb-2">$XX.XX</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Dr. Jane Smith', role: 'Chief Surgeon', text: 'ACTR Medical provides top-notch disposable equipment that we rely on daily.' },
                { name: 'John Doe', role: 'Hospital Administrator', text: 'Excellent quality and timely delivery. ACTR Medical is our go-to supplier.' },
                { name: 'Sarah Johnson', role: 'Nurse Practitioner', text: 'The convenience and reliability of ACTR Medical\'s products make our job easier.' }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About ACTR Medical */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">About ACTR Medical</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-6">
                ACTR Medical has been a trusted provider of high-quality disposable medical equipment for over two decades.
                Our commitment to excellence and innovation has made us a preferred partner for healthcare professionals worldwide.
              </p>
              <p className="mb-6">
                We pride ourselves on our ISO 13485 certification and FDA registration, ensuring that all our products meet the
                highest standards of quality and safety.
              </p>
              <Button variant="outline">Learn More About Us</Button>
            </div>
          </div>
        </section>

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
