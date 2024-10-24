import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs';
import { getCategoriesData, getProductsData } from '@/sanity/lib/queries'
import { SanityDocument } from 'next-sanity'
import SearchBar from '@/components/products/searchbar'
import Filters from '@/components/products/filters'
import { toUrlFriendlyString } from '@/lib/utils'
import Link from 'next/link';

export default async function EnhancedProductPage({ searchParams }: { searchParams: { category?: string; searchTerm?: string; minPrice?: string; bestSeller?: boolean } }) {
    const { category = '', searchTerm = '', minPrice = '0', bestSeller = false } = searchParams;

    const allProducts = await getProductsData();
    const categories = await getCategoriesData();

    const min = parseFloat(minPrice);

    const filteredProducts = allProducts.filter((product: SanityDocument) => {
        const matchesCategory = category ? toUrlFriendlyString(product.category.title) === category : true;
        const matchesPrice = product.price >= min;
        const matchesBestSeller = bestSeller ? product.isBestSeller : true;
        const matchesSearchTerm = searchTerm ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;

        return matchesCategory && matchesPrice && matchesBestSeller && matchesSearchTerm;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Breadcrumbs first={{ name: 'Products' }} />

                <div className="flex flex-col lg:flex-row gap-6">
                    <Filters categories={categories} min={min} bestSeller={bestSeller} />

                    <div className="lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                            <SearchBar searchTerm={searchTerm} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product: SanityDocument) => (
                                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="p-4">
                                            <div className="relative h-48 mb-4">
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-md"
                                                />
                                                {product.isBestSeller && (
                                                    <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                                                        <Star className="w-3 h-3 mr-1" />
                                                        Best Seller
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                                                <Link href={`/products/${toUrlFriendlyString(product.title)}`}>
                                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <p>No products match the selected filters.</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}