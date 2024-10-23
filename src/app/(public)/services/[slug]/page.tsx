import { getServicesData } from '@/sanity/lib/queries'
import Image from 'next/image';
import { toUrlFriendlyString } from '@/lib/utils';
import { PortableText, SanityDocument } from 'next-sanity';
import { notFound } from 'next/navigation';
import OtherServices from './carousel';
import Breadcrumbs from '@/components/breadcrumbs';

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const services = await getServicesData();
    const { slug } = params;

    const currentService = services.find((service: SanityDocument) => toUrlFriendlyString(service.title) === slug);

    if (!currentService)
        notFound();

    const otherServices = services.filter((service: SanityDocument) => service.title !== currentService.title);

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Breadcrumbs first={{ name: 'Services', link: '/services' }} second={currentService.title} />
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 prose">
                                    {Array.isArray(currentService.description) && <PortableText value={currentService.description} />}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        {currentService.images && currentService.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentService.images.map((image: any, index: number) => (
                                    <Image
                                        key={index}
                                        src={image.asset.url}
                                        alt={`${currentService.title} image ${index + 1}`}
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        className="rounded-lg"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Services</h3>
                    <OtherServices otherServices={otherServices} />
                </div>
            </main>
        </div>
    )
}