'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { useState } from "react";
import { toUrlFriendlyString } from "@/lib/utils";

export default function OtherServices({ otherServices }: { otherServices: SanityDocument[] }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % otherServices.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + otherServices.length) % otherServices.length)
    }

    return (
        <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {otherServices.map((service) => (
                <Card key={service.title} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
                    <CardContent className="p-4">
                        <Image
                            src={service.images[0].asset.url}
                            alt={service.name}
                            width={300}
                            height={200}
                            layout="responsive"
                            className="rounded-lg mb-4"
                        />
                        <h4 className="text-lg font-semibold">{service.title}</h4>
                        <Link href={`/services/${toUrlFriendlyString(service.title)}`}>
                            <Button className="mt-2 p-0">
                                Learn More
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}