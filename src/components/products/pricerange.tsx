'use client';

import { Slider } from "@/components/ui/slider";

export default function PriceRangeSlider({ minPrice }: { minPrice: number }) {
    const handlePriceChange = (value: number[]) => {
        const min = value[0];
        window.location.href = `?minPrice=${min}`;
    };

    return (
        <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={[minPrice, 100]}
            onValueChange={handlePriceChange}
        />
    );
}
