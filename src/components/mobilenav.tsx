'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ menuItems }: { menuItems: SanityDocument[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const menuVariants = {
        hidden: { clipPath: 'circle(0% at 100% 0)' },
        visible: {
            clipPath: 'circle(150% at 100% 0)',
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: {
            clipPath: 'circle(0% at 100% 0)',
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <>
            <Button className="md:hidden z-50 relative" onClick={toggleMenu}>
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-blue-600 z-40 flex flex-col items-center justify-center font-montserrat"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul className="text-white space-y-6 text-center">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.title}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                >
                                    <Link
                                        href={item.link || '#'}
                                        className="text-2xl hover:text-blue-200 transition-colors duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}