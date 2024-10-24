'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SanityDocument } from "next-sanity";
import { useRouter, useSearchParams } from "next/navigation";
import PriceRangeSlider from "./pricerange";
import { useState, useEffect } from "react";

interface Props {
    categories: SanityDocument[];
    min: number;
    bestSeller: boolean;
}

export function toUrlFriendlyString(str: string) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric, non-space, non-hyphen characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with a single one
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

export default function Filters({ categories, min, bestSeller }: Props) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [bestSellerChecked, setBestSellerChecked] = useState(bestSeller);

    // Debounced search state to avoid immediate URL change on each keystroke
    const [debouncedCategory, setDebouncedCategory] = useState(category);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedCategory(category);
        }, 300); // 300ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [category]);

    // Handle category changes
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (debouncedCategory) {
            searchParams.set('category', toUrlFriendlyString(debouncedCategory));
        } else {
            searchParams.delete('category');
        }
        router.push(`?${searchParams.toString()}`);
    }, [debouncedCategory, router]);

    // Handle bestSeller checkbox
    const handleBestSellerChange = (checked: boolean) => {
        setBestSellerChecked(checked);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('bestSeller', checked.toString());
        router.push(`?${searchParams.toString()}`);
    };

    return (
        <aside className="lg:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <Select
                            value={category}
                            onValueChange={setCategory}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category: SanityDocument) => (
                                    <SelectItem key={category.title} value={category.title}>
                                        {category.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                        <PriceRangeSlider minPrice={min} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="best-sellers"
                            checked={bestSellerChecked}
                            onCheckedChange={handleBestSellerChange}
                        />
                        <label
                            htmlFor="best-sellers"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Show Best Sellers Only
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
}
