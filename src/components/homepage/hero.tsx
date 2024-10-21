import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { client } from "@/sanity/client";
import { HERO_SECTION_QUERY } from "@/lib/queries";
import type { SanityDocument } from "next-sanity";

const options = { next: { revalidate: 10 } };

export default async function Hero() {
    const hero = await client.fetch<SanityDocument>(HERO_SECTION_QUERY, {}, options);

    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
                    <p className="text-xl mb-8">{hero.subtitle}</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        {hero.callToAction.text} <ShoppingCart className="ml-2" />
                    </Button>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={hero.backgroundImageUrl}
                        alt="Healthcare professionals using disposable equipment"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}