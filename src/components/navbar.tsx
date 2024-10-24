import { getNavbarData } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import MobileMenu from "./mobilenav";
import { ChevronDown } from "lucide-react";

export default async function Navbar() {
    const { logo, menuItems } = await getNavbarData();

    return (
        <header className="bg-white shadow-sm sticky top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {logo ? (
                    <Image
                        src={logo}
                        alt="ACTR Logo"
                        width={200}
                        height={50}
                        priority
                    />) : null}
                <nav className="hidden md:block font-montserrat">
                    <ul className="flex space-x-6">
                        {menuItems.map((item: SanityDocument) => (
                            <li key={item.title} className="relative group">
                                {item.dropdownItems?.length ? (
                                    <>
                                        <Link
                                            href={item.link || "#"}
                                            className="text-gray-600 hover:text-blue-600 flex items-center"
                                        >
                                            {item.title}
                                            <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                                        </Link>
                                        {/* Dropdown menu */}
                                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                                            {item.dropdownItems.map(
                                                (dropdownItem: SanityDocument) => (
                                                    <li
                                                        key={dropdownItem.title}
                                                        className="first:rounded-t-md last:rounded-b-md"
                                                    >
                                                        <Link
                                                            href={
                                                                dropdownItem.link ||
                                                                "#"
                                                            }
                                                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                                                        >
                                                            {dropdownItem.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
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

                <MobileMenu menuItems={menuItems} />
            </div>
        </header>
    )
}