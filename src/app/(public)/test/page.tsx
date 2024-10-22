'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, Star } from 'lucide-react'

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

export default function EnhancedProductPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')
    const [priceRange, setPriceRange] = useState([0, 100])
    const [showBestSellers, setShowBestSellers] = useState(false)
    const [sortBy, setSortBy] = useState('name')
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        let filtered = products.filter(product =>
            (activeCategory === 'all' || product.category === activeCategory) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            product.price >= priceRange[0] && product.price <= priceRange[1] &&
            (!showBestSellers || product.isBestSeller)
        )

        switch (sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price)
                break
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price)
                break
            case 'name':
            default:
                filtered.sort((a, b) => a.name.localeCompare(b.name))
        }

        setFilteredProducts(filtered)
    }, [activeCategory, searchTerm, priceRange, showBestSellers, sortBy])

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <nav className="text-sm breadcrumbs mb-4">
                    <ul className="flex items-center space-x-2">
                        <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                        <ChevronRight className="w-4 h-4" />
                        <li><Link href="/products" className="text-blue-600 hover:underline">Products</Link></li>
                        {activeCategory !== 'all' && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <li className="text-gray-600">{categories.find(c => c.id === activeCategory)?.name}</li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className="flex flex-col lg:flex-row gap-6">
                    <aside className="lg:w-1/4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="font-semibold text-lg mb-4">Filters</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <Select value={activeCategory} onValueChange={setActiveCategory}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                                    <Slider
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        className="mb-2"
                                    />
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="best-sellers"
                                        checked={showBestSellers}
                                        onCheckedChange={setShowBestSellers}
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
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-full sm:w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-full sm:w-48">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Name</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-4">
                                        <div className="relative h-48 mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
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
                                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
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
        </div>
    )
}