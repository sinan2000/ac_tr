import { getNavbarData } from "@/sanity/lib/queries";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

export default async function Navbar() {
    const { logo, menuItems } = await getNavbarData();

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {logo ? (
                    <Image
                        src={logo}
                        alt="ACTR Logo"
                        width={200}
                        height={50}
                    />) : null}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {menuItems.map((item: SanityDocument) => (
                            <li key={item.title}>
                                {item.dropdownItems?.length ? (
                                    <div className="relative group">
                                        <Link
                                            href={item.link || "#"}
                                            className="text-gray-600 hover:text-blue-600"
                                        >
                                            {item.title}
                                        </Link>
                                        {/* Dropdown menu */}
                                        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.dropdownItems.map(
                                                (dropdownItem: SanityDocument) => (
                                                    <li
                                                        key={dropdownItem.title}
                                                        className="px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <Link
                                                            href={
                                                                dropdownItem.link ||
                                                                "#"
                                                            }
                                                            className="block text-gray-600 hover:text-blue-600"
                                                        >
                                                            {dropdownItem.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.link || "#"}
                                        className="text-gray-600 hover:text-blue-600"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button className="md:hidden">Menu</Button>
            </div>
        </header>
    )
}