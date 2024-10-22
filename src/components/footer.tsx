import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default async function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Products</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>1234 Medical Drive</p>
                        <p>Health City, HC 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@actrmedical.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400">Facebook</a>
                            <a href="#" className="hover:text-blue-400">Twitter</a>
                            <a href="#" className="hover:text-blue-400">LinkedIn</a>
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
                    <p>&copy; 2023 ACTR Medical. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}