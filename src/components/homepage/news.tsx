import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function News() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">Latest News & Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'The Importance of Proper PPE in Healthcare', date: 'May 15, 2023' },
                        { title: 'Innovations in Disposable Medical Equipment', date: 'June 2, 2023' },
                        { title: 'Sustainability in Medical Supplies: Our Commitment', date: 'June 20, 2023' }
                    ].map((post, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <Image
                                    src={`/placeholder.svg?height=200&width=300`}
                                    alt={post.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                                <CardTitle className="mb-4">{post.title}</CardTitle>
                                <Button variant="link" className="p-0">
                                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}