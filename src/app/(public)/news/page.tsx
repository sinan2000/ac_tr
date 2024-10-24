import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { toUrlFriendlyString } from '@/lib/utils';
import Breadcrumbs from '@/components/breadcrumbs';
import { getNewsData } from '@/sanity/lib/queries';
import { SanityDocument } from 'next-sanity';

export default async function NewsPage({ searchParams }: { searchParams: { page?: string } }) {
    const page = parseInt(searchParams.page || '1', 10);
    const postsPerPage = 3;

    const allNews = await getNewsData();
    const totalPosts = allNews.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    const news = allNews.slice((page - 1) * postsPerPage, page * postsPerPage)

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Breadcrumbs first={{ name: 'News' }} />
                <div className="grid gap-6">
                    {news.map((post: SanityDocument) => (
                        <Card key={post.title} className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            width={300}
                                            height={200}
                                            objectFit="cover"
                                            className="h-48 w-full object-cover md:h-full md:w-48"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                                            {format(new Date(post.publishingDate), 'MMMM d, yyyy')}
                                        </div>
                                        <Link href={`/news/${toUrlFriendlyString(post.title)}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                            {post.title}
                                        </Link>
                                        <p className="mt-2 text-gray-500 line-clamp-3">{post.description}</p>
                                        <p className="mt-2 text-sm text-gray-400">By Sinan Ceviker</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 px-8 py-4">
                                <Button asChild variant="ghost">
                                    <Link href={`/news/${toUrlFriendlyString(post.title)}`}>
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
                                href={`?page=${page - 1}`}
                                className={page === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href={`?page=${i + 1}`}
                                    isActive={page === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href={`?page=${page + 1}`}
                                className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </main>
        </div>
    )
}