import Image from 'next/image'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mH0hHo7HWAjJQy7qt6WXP1ZCI7TLLi.png"
                    alt="ACTR Medical Logo"
                    width={200}
                    height={50}
                    className="mx-auto mb-8"
                />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    We're sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Go to Homepage
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/products">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Link>
                    </Button>
                </div>
            </div>
            <footer className="mt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2024 ACTR Medical. All rights reserved.</p>
            </footer>
        </div>
    )
}