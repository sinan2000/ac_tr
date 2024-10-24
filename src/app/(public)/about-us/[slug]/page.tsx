import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Users, TrendingUp, Globe } from 'lucide-react'
import { toUrlFriendlyString } from '@/lib/utils'
import { getAboutUsData } from '@/sanity/lib/queries'
import { PortableText, SanityDocument } from 'next-sanity'
import { notFound } from 'next/navigation'

export default async function AboutUsPage({ params } : { params: { slug: string } }) {
    const pages = await getAboutUsData()
    const { slug } = params;

    const page = pages.filter((page: SanityDocument) => toUrlFriendlyString(page.title) === slug)[0]

    console.log(page.images);

    if (!page)
        notFound();

    return (
        <div className="min-h-screen bg-gray-50">

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Card className="overflow-hidden mb-8">
                    <CardHeader className="bg-blue-600 text-white p-6 md:p-10">
                        <CardTitle className="text-3xl md:text-4xl font-bold">{page.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <PortableText value={page.description} />
                                <Button asChild size="lg" className="w-full sm:w-auto mt-4">
                                    <Link href="/contact">Partner with Us</Link>
                                </Button>
                            </div>
                            <div className="order-first md:order-last mb-6 md:mb-0">
                                <Image
                                    src={page.images[0].asset.url}
                                    alt="ACTR Medical team at work"
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Our Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: CheckCircle, title: "Products Sourced", value: "5000+" },
                                { icon: Users, title: "Healthcare Providers Served", value: "1000+" },
                                { icon: TrendingUp, title: "Years of Growth", value: "10+" },
                                { icon: Globe, title: "Countries Reached", value: "50+" },
                            ].map((stat, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
                                    <stat.icon className="h-12 w-12 text-blue-600 mb-2" />
                                    <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Why Choose ACTR Medical?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="expertise" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                                <TabsTrigger value="expertise">Expertise</TabsTrigger>
                                <TabsTrigger value="quality">Quality Assurance</TabsTrigger>
                                <TabsTrigger value="support">Customer Support</TabsTrigger>
                            </TabsList>
                            <TabsContent value="expertise">
                                <p className="text-lg text-gray-700">
                                    Our team comprises industry veterans with decades of combined experience in medical product sourcing, quality control, and international trade. We leverage this expertise to navigate complex regulatory landscapes and identify the best products for our clients' needs.
                                </p>
                            </TabsContent>
                            <TabsContent value="quality">
                                <p className="text-lg text-gray-700">
                                    Quality is at the heart of everything we do. We partner only with manufacturers who meet stringent international standards. Our rigorous quality control processes ensure that every product we source meets or exceeds industry regulations and our clients' expectations.
                                </p>
                            </TabsContent>
                            <TabsContent value="support">
                                <p className="text-lg text-gray-700">
                                    We believe in building long-term relationships with our clients. Our dedicated support team is always ready to assist with inquiries, provide product information, and offer post-sale support. We're committed to your success every step of the way.
                                </p>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </main>

        </div>
    )
}