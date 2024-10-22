import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function PublicLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
        </div>
    )

}