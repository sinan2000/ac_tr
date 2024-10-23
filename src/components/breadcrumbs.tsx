import { ChevronRight } from "lucide-react";
import Link from "next/link";

type FirstBreadcrumb = {
    name: string;
    link?: string;
};

interface Breadcrumb {
    first: FirstBreadcrumb;
    second?: string;
}

export default function Breadcrumbs({ first, second }: Breadcrumb) {
    return (
        <nav className="text-sm breadcrumbs mb-4" aria-label="Breadcrumbs">
            <ul className="flex items-center space-x-2">
                {/* Home breadcrumb (always present) */}
                <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                <ChevronRight className="w-4 h-4" />

                {/* First breadcrumb, optional link */}
                <li>
                    {first.link ? (
                        <Link href={first.link} className="text-blue-600 hover:underline">{first.name}</Link>
                    ) : (
                        <span>{first.name}</span>
                    )}
                </li>

                {second && (
                    <>
                        <ChevronRight className="w-4 h-4" />
                        {/* Second breadcrumb, no link */}
                        <li>
                            <span>{second}</span>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
