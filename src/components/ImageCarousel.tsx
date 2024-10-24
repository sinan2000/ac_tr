// components/ImageCarousel.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    productName: string;
}

export default function ImageCarousel({ images, productName }: ImageCarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="lg:w-1/2">
            <div className="relative h-96 bg-white rounded-lg overflow-hidden">
                <Image
                    src={images[currentImage]}
                    alt={productName}
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
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-20 h-20 border-2 rounded-md overflow-hidden ${currentImage === index ? 'border-blue-500' : 'border-gray-200'
                            }`}
                    >
                        <Image src={img} alt={`${productName} thumbnail ${index + 1}`} width={80} height={80} objectFit="cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}
