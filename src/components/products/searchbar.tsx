'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";

export default function SearchBar({ searchTerm }: { searchTerm: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;

        // Get the current search params and update the searchTerm
        const params = new URLSearchParams(searchParams);
        params.set('searchTerm', search);

        // Push the new URL with the updated searchTerm
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Input
            type="search"
            placeholder="Search products..."
            className="w-full sm:w-64"
            defaultValue={searchTerm}
            onChange={handleSearchChange}
        />
    );
}
