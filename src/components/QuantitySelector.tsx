// components/QuantitySelector.tsx

'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
            </label>
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                    <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
