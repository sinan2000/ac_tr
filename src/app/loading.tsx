import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { getNavbarData } from '@/sanity/lib/queries'

export default async function LoadingPage() {
    const { logo } = await getNavbarData();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center space-y-6">
                <Image
                    src={logo}
                    alt="ACTR Medical Logo"
                    width={200}
                    height={50}
                    className="mb-4"
                />
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                <p className="text-lg font-semibold text-gray-700 font-montserrat">Please wait...</p>
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-blue-600 rounded-full animate-pulse"></div>
                </div>
            </div>
            <footer className="absolute bottom-4 text-center text-gray-500 text-sm">
                <p>&copy; 2024 ACTR Medical. All rights reserved.</p>
            </footer>
        </div>
    )
}