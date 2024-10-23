import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toUrlFriendlyString(str: string) {
  return str
    .trim()
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '') // Remove any non-alphanumeric, non-space, and non-hyphen characters
    .replace(/\s+/g, '-') // Replace spaces (or groups of spaces) with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove leading or trailing hyphens
}