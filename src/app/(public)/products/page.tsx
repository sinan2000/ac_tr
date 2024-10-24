import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs';
import { getCategoriesData, getProductsData } from '@/sanity/lib/queries'
import { SanityDocument } from 'next-sanity'
import PriceRangeSlider from '@/components/products/pricerange'
import SearchBar from '@/components/products/searchbar'

const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'surgical-supplies', name: 'Surgical Supplies' },
    { id: 'diagnostics', name: 'Diagnostics' },
    { id: 'ppe', name: 'Personal Protective Equipment' },
    { id: 'wound-care', name: 'Wound Care' },
]

const products = [
    { id: 1, name: 'Surgical Gloves', category: 'surgical-supplies', price: 15.99, image: '/placeholder.svg', description: 'High-quality latex-free surgical gloves', isBestSeller: true },
    { id: 2, name: 'Digital Thermometer', category: 'diagnostics', price: 29.99, image: '/placeholder.svg', description: 'Accurate digital thermometer for quick readings', isBestSeller: false },
    { id: 3, name: 'N95 Respirator Masks', category: 'ppe', price: 24.99, image: '/placeholder.svg', description: 'NIOSH-approved N95 respirator masks', isBestSeller: true },
    { id: 4, name: 'Sterile Gauze Pads', category: 'wound-care', price: 9.99, image: '/placeholder.svg', description: 'Sterile gauze pads for wound dressing', isBestSeller: false },
    { id: 5, name: 'Surgical Scalpel', category: 'surgical-supplies', price: 12.99, image: '/placeholder.svg', description: 'Precision surgical scalpel with disposable blades', isBestSeller: false },
    { id: 6, name: 'Blood Pressure Monitor', category: 'diagnostics', price: 49.99, image: '/placeholder.svg', description: 'Automatic digital blood pressure monitor', isBestSeller: true },
    { id: 7, name: 'Disposable Gowns', category: 'ppe', price: 19.99, image: '/placeholder.svg', description: 'Disposable protective gowns for medical use', isBestSeller: false },
    { id: 8, name: 'Adhesive Bandages', category: 'wound-care', price: 7.99, image: '/placeholder.svg', description: 'Flexible adhesive bandages for minor wounds', isBestSeller: false },
    // Add more products as needed to reach around 50 items
]

export default async function EnhancedProductPage({ params } : { params: { category?: string; searchTerm?: string; minPrice?: string; bestSeller?: boolean } }) {
    const { category = '', searchTerm = '', minPrice = '0', bestSeller = false } = params;

    const allProducts = await getProductsData();
    const categories = await getCategoriesData();

    const min = parseFloat(minPrice);

    const filteredProducts = allProducts;

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Breadcrumbs first={{name: 'Products'}} />

                <div className="flex flex-col lg:flex-row gap-6">
                    <aside className="lg:w-1/4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-lg mb-4">Filters</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <Select 
                                        value={category} 
                                        //onValueChange={(e) => window.location.href = `?category=${e.target.value}&searchTerm=${searchTerm}&minPrice=${min}`}>
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category: SanityDocument) => (
                                                <SelectItem key={category.title} value={category.title}>
                                                    {category.title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                                    <PriceRangeSlider minPrice={min} />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="best-sellers"
                                        checked={bestSeller}
                                        //onCheckedChange={(e) => window.event.href = `?category=${category}&searchTerm=${searchTerm}&minPrice=${min}&bestSeller=${e.target.checked}`}
                                    />
                                    <label
                                        htmlFor="best-sellers"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Show Best Sellers Only
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                            <SearchBar searchTerm={searchTerm} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product: SanityDocument) => (
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
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
                                                View Details
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About ACTR Medical</h3>
                            <p className="text-gray-300">
                                ACTR Medical is a leading sourcing consultancy providing high-quality medical products from Turkey to international customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-300 hover:text-white">Home</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Products</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-300">Email: info@actrmedical.com</p>
                            <p className="text-gray-300">Phone: +90 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}