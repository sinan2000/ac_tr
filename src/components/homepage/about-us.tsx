import { getHomepageData } from "@/sanity/lib/queries";
import { Button } from "../ui/button";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function AboutUs() {
    const { aboutUs } = await getHomepageData();
    
    const { title, description, button } = aboutUs;

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8 font-montserrat">{title}</h2>
                <div className="max-w-3xl mx-auto text-center prose">
                    {Array.isArray(description) && <PortableText value={description} />}
                </div>
                <div className="text-center mt-6">  {/* Centering and adding margin */}
                    <Link href={button.url}>
                        <Button variant="outline" className="mx-auto">{button.text}</Button> {/* Centering the button */}
                    </Link>
                </div>
            </div>
        </section>
    )
}