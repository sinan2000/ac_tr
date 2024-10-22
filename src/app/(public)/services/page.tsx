import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { getServicesData } from '@/sanity/lib/queries'
import { PortableText, SanityDocument } from 'next-sanity'

export default async function ServicesPage() {
    const services = await getServicesData();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
                <div className="space-y-12">
                    {services.map((service: SanityDocument, index: number) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/3">
                                    <Image
                                        src={service.images[0].asset.url}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                </div>
                                <CardContent className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                                        <div className="text-gray-600 mb-6">
                                            <PortableText value={service.description[0]} />
                                        </div>
                                    </div>
                                    <Button className="self-start">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}