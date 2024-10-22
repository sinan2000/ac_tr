import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { getFooterData } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Footer() {
    const data = await getFooterData();

    const links = data.quickLinks;
    const contact = data.contactUs;
    const social = data.socialLinks;

    const socialMap = {
        facebook: FaFacebook,
        instagram: FaInstagram,
        linkedin: FaLinkedin,
        youtube: FaYoutube,
        whatsapp: FaWhatsapp
    }

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {links.map((link: SanityDocument, index: number) => (
                                <li key={index}>
                                    <Link href={link.link} className="hover:text-blue-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>{contact.address}</p>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {social.map((link: SanityDocument, index: number) => {
                                const IconComponent = socialMap[link.platform as keyof typeof socialMap];
                                return (
                                    <Link key={index} href={link.url} className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                        <IconComponent className="w-6 h-6" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <form className="flex flex-col gap-4">
                            <Input type="email" placeholder="Enter your email" className="bg-gray-700 text-white" />
                            <Button type="submit" variant="secondary">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} ACTR Medical. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}