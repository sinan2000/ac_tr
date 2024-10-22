'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const transitions = ['fade', 'slide-left', 'slide-up']

export default function HeroImages({ heroImages }: { heroImages: { src: string; alt: string }[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTransition, setCurrentTransition] = useState(transitions[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
            setCurrentTransition(transitions[Math.floor(Math.random() * transitions.length)]);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative mt-8 md:mt-0">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        } ${currentTransition === 'fade' ? '' :
                            currentTransition === 'slide-left' ?
                                index === currentImageIndex ? 'translate-x-0' : 'translate-x-full' :
                                currentTransition === 'slide-up' ?
                                    index === currentImageIndex ? 'translate-y-0' : 'translate-y-full' : ''
                        }`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            ))}
        </div>
    )
}