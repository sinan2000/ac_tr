import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// Mock data for news posts
const newsPosts = [
    {
        id: 1,
        title: "ACTR Medical Expands Product Line with Innovative Surgical Instruments",
        excerpt: "We're excited to announce the launch of our new line of advanced surgical instruments, designed to improve precision and efficiency in the operating room.",
        date: new Date("2024-03-15"),
        image: "/placeholder.svg",
        author: "Dr. Ahmet Yılmaz",
    },
    {
        id: 2,
        title: "Partnering with Leading Turkish Hospitals for Product Testing",
        excerpt: "ACTR Medical has initiated collaborations with top hospitals in Turkey to conduct extensive testing of our latest medical devices.",
        date: new Date("2024-03-10"),
        image: "/placeholder.svg",
        author: "Mehmet Öztürk",
    },
    {
        id: 3,
        title: "ACTR Medical Achieves ISO 13485:2016 Certification",
        excerpt: "We're proud to announce that ACTR Medical has successfully obtained ISO 13485:2016 certification, demonstrating our commitment to quality management systems in the medical device industry.",
        date: new Date("2024-03-05"),
        image: "/placeholder.svg",
        author: "Ayşe Kaya",
    },
    {
        id: 4,
        title: "Introducing Our New Telemedicine Solutions",
        excerpt: "ACTR Medical is entering the telemedicine market with a range of innovative products designed to facilitate remote patient care and monitoring.",
        date: new Date("2024-02-28"),
        image: "/placeholder.svg",
        author: "Dr. Ahmet Yılmaz",
    },
    {
        id: 5,
        title: "ACTR Medical to Exhibit at MedTech Europe 2024",
        excerpt: "We're excited to announce our participation in the upcoming MedTech Europe 2024 conference, where we'll be showcasing our latest innovations in medical technology.",
        date: new Date("2024-02-20"),
        image: "/placeholder.svg",
        author: "Zeynep Demir",
    },
]

export default function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 3
    const totalPages = Math.ceil(newsPosts.length / postsPerPage)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = newsPosts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Image
                        src="/logo.png"
                        alt="ACTR Medical Logo"
                        width={150}
                        height={40}
                    />
                    <h1 className="text-2xl font-bold text-gray-900">Latest News</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid gap-6">
                    {currentPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={300}
                                            height={200}
                                            objectFit="cover"
                                            className="h-48 w-full object-cover md:h-full md:w-48"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                                            {format(post.date, 'MMMM d, yyyy')}
                                        </div>
                                        <Link href={`/news/${post.id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                            {post.title}
                                        </Link>
                                        <p className="mt-2 text-gray-500">{post.excerpt}</p>
                                        <p className="mt-2 text-sm text-gray-400">By {post.author}</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 px-8 py-4">
                                <Button asChild variant="ghost">
                                    <Link href={`/news/${post.id}`}>
                                        Read More
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                                }}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setCurrentPage(i + 1)
                                    }}
                                    isActive={currentPage === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                }}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About ACTR Medical</h3>
                            <p className="text-gray-300">
                                ACTR Medical is a leading sourcing consultancy providing high-quality medical products from Turkey to international customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-300 hover:text-white">Home</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Products</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="text-gray-300 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-300">Email: info@actrmedical.com</p>
                            <p className="text-gray-300">Phone: +90 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}