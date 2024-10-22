'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addNewsletter } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await addNewsletter({ email });
            toast({
                title: 'Success',
                description: 'You have successfully subscribed to our newsletter',
                variant: 'success',
            });
            setEmail('');
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: "Failed to subscribe to newsletter",
                variant: 'error',
            });
        } finally {
            setSubmitting(false);
        };
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="secondary" disabled={submitting}>
                {submitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
        </form>
    )
}