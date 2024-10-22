import { getHomepageData } from "@/sanity/lib/queries";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Truck, Award, DollarSign, Building2 } from 'lucide-react'
import { SanityDocument } from "next-sanity";
import React from "react";

const icons = [Award, Truck, DollarSign, Building2];

export default async function ChooseUs() {
    const { whyChooseUs } = await getHomepageData();

    const title = whyChooseUs?.title || '';
    const cards = whyChooseUs?.cards || [];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((item: SanityDocument, index: number) => (
                        <Card key={index} className="text-center">
                            <CardHeader>
                                {icons[index] && React.createElement(icons[index], { className: "w-12 h-12 mx-auto text-blue-600" })}
                                <CardTitle>{item.cardTitle}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.cardDescription}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}