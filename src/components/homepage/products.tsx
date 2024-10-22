import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function featuredProducts() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['Premium Surgical Gloves', 'N95 Respirator Masks', 'Advanced IV Kit'].map((product, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <Image
                                    src={`/placeholder.svg?height=200&width=300`}
                                    alt={product}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="mb-2">{product}</CardTitle>
                                <p className="text-gray-600 mb-4">High-quality disposable medical equipment</p>
                                <p className="font-bold text-lg mb-2">$XX.XX</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}