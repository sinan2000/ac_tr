import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Search, ShieldCheck, Truck, Settings, DollarSign, ArrowRight, Home, Award, Network, PhoneCall } from 'lucide-react'
import { getAboutUsData } from '@/sanity/lib/queries'
import { PortableText, SanityDocument } from 'next-sanity'
import { toUrlFriendlyString } from '@/lib/utils'

export default async function AboutUsPage() {
    const pages = await getAboutUsData();

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 text-sm">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <Link href="/" className="flex items-center text-black hover:text-blue-800">
                                    <Home className="w-4 h-4 mr-2" />
                                    Home
                                </Link>
                                <span className="mx-2">/</span>
                            </li>
                            <li className="flex items-center text-blue-600">About Us</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

                    {pages.map((page: SanityDocument, index: number) => (
                        <section key={index} className="mb-16">
                            <h2 className="text-3xl font-semibold mb-8 text-center">{page.title}</h2>
                            <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="lg:w-1/2 p-8">
                                    <h3 className="text-2xl font-semibold mb-4">{page.subtitle}</h3>
                                    <div className="text-lg mb-6">
                                        <PortableText value={page.description[0]} />
                                    </div>
                                    <Link href={`/about-us/${toUrlFriendlyString(page.title)}`}>
                                        <Button size="lg" className="mt-4">
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="lg:w-1/2 p-4 lg:p-0">
                                    <Image
                                        src={page.images[0].asset.url}
                                        alt={`${page.title} Image`}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover rounded-lg lg:rounded-none"
                                    />
                                </div>
                            </div>
                        </section>
                    ))}

                    <Tabs defaultValue="services" className="mb-16">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="services">Our Services</TabsTrigger>
                            <TabsTrigger value="industries">Industries We Serve</TabsTrigger>
                        </TabsList>
                        <TabsContent value="services">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {[
                                    { icon: Search, title: 'Supplier Identification', description: 'We locate and vet reliable suppliers that meet your specific requirements.' },
                                    { icon: Globe, title: 'Global Product Sourcing', description: 'Access a wide range of high-quality products from around the world.' },
                                    { icon: ShieldCheck, title: 'Quality Assurance', description: 'We ensure all products meet international quality standards and your specifications.' },
                                    { icon: Truck, title: 'Logistics Management', description: 'Seamless delivery solutions from the supplier to your desired location.' },
                                    { icon: Settings, title: 'Custom Procurement Strategies', description: 'Tailored solutions to optimize your supply chain and reduce costs.' },
                                    { icon: DollarSign, title: 'Cost Optimization', description: 'Leverage our expertise to achieve the best value for your procurement budget.' },
                                ].map((service, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                                            <CardTitle>{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>{service.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="industries">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                                {['Textiles', 'Furniture', 'Automotive', 'Electronics', 'Food & Beverage', 'Cosmetics', 'Construction', 'Medical Supplies'].map((industry, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <CardTitle className="text-center">{industry}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose ACTR?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start">
                                <Award className="w-8 h-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                                    <p>Our team&apos;s extensive knowledge spans various industries, allowing us to cater to diverse business requirements.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Settings className="w-8 h-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Customization</h3>
                                    <p>We provide tailored procurement strategies that help optimize your supply chain and enhance operational efficiency.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ShieldCheck className="w-8 h-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Quality</h3>
                                    <p>We ensure all sourced products meet international standards and your specific quality requirements.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Network className="w-8 h-8 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                                    <p>Our extensive network of suppliers allows us to source a wide range of products efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-6">Ready to Optimize Your Sourcing?</h2>
                        <p className="text-xl mb-8">Let&apos;s discuss how ACTR can help streamline your procurement process and drive your business forward.</p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <PhoneCall className="w-5 h-5 mr-2" />
                            Contact Us Today
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}