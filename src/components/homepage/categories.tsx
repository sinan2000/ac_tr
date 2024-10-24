import Image from "next/image";
import { Button } from "../ui/button";
import { getHomepageData } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { toUrlFriendlyString } from "@/lib/utils";

export default async function ProductCategories() {
    const { favoriteCategories } = await getHomepageData();
    console.log(favoriteCategories);

    if (!favoriteCategories) {
        return null;
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">Product Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {favoriteCategories.map((category: SanityDocument, index: number) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                                <Link href={`/products?category=${toUrlFriendlyString(category.title)}`}>
                                    <Button variant="secondary" size="sm">Shop Now</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}