import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { getServicesData } from '@/sanity/lib/queries'
import { PortableText, SanityDocument } from 'next-sanity'
import Breadcrumbs from '@/components/breadcrumbs';
import { toUrlFriendlyString } from "@/lib/utils";
import Link from 'next/link'

export default async function ServicesPage() {
    const services = await getServicesData();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Breadcrumbs first={{ name: 'Services' }} />
                <h1 className="text-4xl font-bold text-center mb-12 font-montserrat">Our Services</h1>
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
                                        <h2 className="text-2xl font-bold mb-4 font-montserrat">{service.title}</h2>
                                        <div className="text-gray-600 mb-6">
                                            <PortableText value={service.description[0]} />
                                        </div>
                                    </div>
                                    <Link href={`/services/${toUrlFriendlyString(service.title)}`}>
                                        <Button className="self-start font-montserrat">
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}