import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import HeroImages from "./hero-images";
import { getHomepageData } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Hero() {
    const { heroSection } = await getHomepageData();

    const title = heroSection?.title || '';
    const subtitle = heroSection?.subtitle || '';
    const images = heroSection?.images?.map((img: SanityDocument, index: number) => ({
        src: img.asset.url,
        alt: img.alt || `Hero Image ${index + 1}`
    })) || [];

    return (
        <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 z-10 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4 font-montserrat">{title}</h1>
                    <p className="text-xl mb-8">{subtitle}</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        Explore Our Products <ArrowRight className="ml-2" />
                    </Button>
                </div>
                <HeroImages heroImages={images} />
            </div>
        </section>
    )
}