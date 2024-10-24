// app/products/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductsData } from '@/sanity/lib/queries'; // Adjust the import path
import { toUrlFriendlyString } from '@/lib/utils'; // Adjust the import path
import ImageCarousel from '@/components/ImageCarousel'; // Adjust the import path
import QuantitySelector from '@/components/QuantitySelector'; // Adjust the import path
import { SanityDocument } from 'next-sanity';

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Fetch all products data
    const products = await getProductsData();

    // Find the product with matching slug
    const product = products.find((p: SanityDocument) => toUrlFriendlyString(p.title) === slug);

    // If product not found, render notFound()
    if (!product) {
        notFound();
    }

    // Fetch related products (e.g., same category, excluding current product)
    const relatedProducts = products
        .filter((p: SanityDocument) => p._id !== product._id && p.category._id === product.category._id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Image
                        src="/logo.png"
                        alt="ACTR Medical Logo"
                        width={150}
                        height={40}
                    />
                    <h1 className="text-2xl font-bold text-gray-900">Product Details</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <ImageCarousel images={product.images} productName={product.title} />

                    {/* Product Details */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-4">Reference: {product.referenceNumber}</p>
                        <p className="text-2xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

                        {/* Quantity Selector */}
                        <div className="space-y-4 mb-6">
                            <QuantitySelector />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 mb-8">
                            <Button className="flex-1">Buy Now</Button>
                            <Button variant="outline" className="flex-1">
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                            </Button>
                        </div>

                        {/* Tabs for Description and Features */}
                        <Tabs defaultValue="description">
                            <TabsList>
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="features">Features</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="text-gray-600">
                                <p>{product.description}</p>
                            </TabsContent>
                            <TabsContent value="features">
                                {product.features && product.features.length > 0 ? (
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        {product.features.map((feature: string, index: number) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No features listed.</p>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((relatedProduct: SanityDocument) => (
                                <Card key={relatedProduct._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-4">
                                        <div className="relative h-48 mb-4">
                                            <Image
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md"
                                            />
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2">{relatedProduct.title}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-lg">${relatedProduct.price.toFixed(2)}</span>
                                            <Link href={`/products/${toUrlFriendlyString(relatedProduct.title)}`}>
                                                <Button variant="outline" size="sm">View Details</Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            {/* Include your footer component or code here */}
        </div>
    );
}
