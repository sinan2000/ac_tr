import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { client } from "@/sanity/client";
import { MENU_ITEMS_QUERY } from "@/lib/queries";
import { type SanityDocument } from "next-sanity";

const options = { next: { revalidate: 10 } }

export default async function Navbar() {
    const links = await client.fetch<SanityDocument[]>(MENU_ITEMS_QUERY, {}, options);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Image
                    src="/logo.png"
                    alt="ACTR Medical Logo"
                    width={200}
                    height={50}
                />
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href="#" className="text-gray-600 hover:text-blue-600">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button className="md:hidden">Menu</Button>
            </div>
        </header>
    )
}