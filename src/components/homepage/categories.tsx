import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductCategories() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">Product Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {['Surgical Gloves', 'Face Masks', 'Syringes', 'IV Kits'].map((category, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={`/placeholder.svg?height=200&width=300`}
                                alt={category}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                                <Button variant="secondary" size="sm">Shop Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}