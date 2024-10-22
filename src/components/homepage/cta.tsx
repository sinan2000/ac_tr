import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CTA() {
    return (
        <section className="bg-blue-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our Latest Products</h2>
                <p className="mb-8">Subscribe to our newsletter for exclusive offers and industry insights.</p>
                <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                    <Input type="email" placeholder="Enter your email" className="w-full sm:w-auto bg-white text-gray-800" />
                    <Button type="submit" variant="secondary">Subscribe</Button>
                </form>
            </div>
        </section>
    )
}