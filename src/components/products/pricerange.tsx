'use client';

import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PriceRangeSlider({ minPrice }: { minPrice: number }) {
    const [priceRange, setPriceRange] = useState([minPrice, 100]);
    const router = useRouter();
    const searchParams = useSearchParams();
    
    useEffect(() => {
        setPriceRange([minPrice, 100]);
    }, [minPrice]);

    const handlePriceRangeChange = (range: number[]) => {
        setPriceRange(range as [number, number]);
    };

    const handlePriceRangeCommit = (range: [number, number]) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('minPrice', `${range[0]}`);
        router.replace(`/products?${params.toString()}`);
    };

    return (
        <Slider
            min={0}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={handlePriceRangeChange}
            onValueCommit={handlePriceRangeCommit}
        />
    );
}
