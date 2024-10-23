'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { useState } from "react";
import { toUrlFriendlyString } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OtherServices({ otherServices }: { otherServices: SanityDocument[] }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % otherServices.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + otherServices.length) % otherServices.length)
    }

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentSlide * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {otherServices.map((service) => (
                        <Card key={service.title} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
                            <CardContent className="p-0 h-64 relative overflow-hidden group">
                                <Image
                                    src={service.images[0].asset.url}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                                    <h4 className="text-white text-xl font-semibold mb-4">{service.title}</h4>
                                    <Link href={`/services/${toUrlFriendlyString(service.title)}`}>
                                        <Button variant="secondary">View Service</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={nextSlide}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}