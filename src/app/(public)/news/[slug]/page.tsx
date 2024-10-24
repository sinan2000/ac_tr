import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ChevronLeft, Calendar, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getNewsData } from '@/sanity/lib/queries'
import { SanityDocument } from 'next-sanity'
import { toUrlFriendlyString } from '@/lib/utils'
import { notFound } from 'next/navigation'

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const allNews = await getNewsData();

    const news = allNews.find((post: SanityDocument) => toUrlFriendlyString(post.title) === slug);

    if (!news)
        notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
                <Button asChild variant="ghost" className="mb-4">
                    <Link href="/news">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to News
                    </Link>
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">{news.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                {format(new Date(news.publishingDate), 'MMMM d, yyyy')}
                            </div>
                            <div className="flex items-center">
                                <User className="mr-1 h-4 w-4" />
                                By Sinan Ceviker
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-6">
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                width={800}
                                height={400}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>
                        <p>{news.description}</p>
                    </CardContent>
                </Card>
            </main>

        </div>
    )
}