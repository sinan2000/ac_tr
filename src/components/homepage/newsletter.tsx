'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addNewsletter } from "@/app/actions";

export default function Newsletter() {
    const [email, setEmail] = useState('');

    return (
        <form action={addNewsletter} className="flex flex-col gap-4">
            <Input
                name="email"
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="secondary">Subscribe</Button>
        </form>
    )
}