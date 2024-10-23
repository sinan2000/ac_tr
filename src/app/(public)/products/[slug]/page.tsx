'use client';

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for the product
const product = {
    id: 1,
    name: "Advanced Surgical Gloves",
    referenceNumber: "SG-2024-001",
    price: 24.99,
    description: "Our Advanced Surgical Gloves are designed for maximum protection and comfort during surgical procedures. Made from high-quality, latex-free materials, these gloves offer excellent tactile sensitivity and durability.",
    features: [
        "Latex-free for reduced allergy risks",
        "Powder-free to minimize contamination",
        "Textured surface for improved grip",
        "Available in multiple sizes for perfect fit",
        "Meets all relevant medical standards and certifications"
    ],
    images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
    ],
    colors: ["White", "Blue", "Green"],
    sizes: ["Small", "Medium", "Large", "X-Large"]
}

// Mock data for related products
const relatedProducts = [
    { id: 2, name: "Surgical Face Masks", price: 19.99, image: "/placeholder.svg" },
    { id: 3, name: "Disposable Surgical Gowns", price: 34.99, image: "/placeholder.svg" },
    { id: 4, name: "Sterile Surgical Drapes", price: 29.99, image: "/placeholder.svg" },
]

export default function ProductDetailPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }

    return (
        <div className="min-h-screen bg-gray-50">
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

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        <div className="relative h-96 bg-white rounded-lg overflow-hidden">
                            <Image
                                src={product.images[currentImage]}
                                alt={product.name}
                                layout="fill"
                                objectFit="contain"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-20 h-20 border-2 rounded-md overflow-hidden ${currentImage === index ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                >
                                    <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} width={80} height={80} objectFit="cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">Reference: {product.referenceNumber}</p>
                        <p className="text-2xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                                    Color
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select color" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {product.colors.map((color) => (
                                            <SelectItem key={color} value={color.toLowerCase()}>
                                                {color}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                                    Size
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {product.sizes.map((size) => (
                                            <SelectItem key={size} value={size.toLowerCase()}>
                                                {size}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                    Quantity
                                </label>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 mb-8">
                            <Button className="flex-1">Buy Now</Button>
                            <Button variant="outline" className="flex-1">
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                            </Button>
                        </div>

                        <Tabs defaultValue="description">
                            <TabsList>
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="features">Features</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="text-gray-600">
                                <p>{product.description}</p>
                            </TabsContent>
                            <TabsContent value="features">
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((product) => (
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
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-16">
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