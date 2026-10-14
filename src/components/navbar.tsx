"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    {name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },

];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <a href="#home" className="text-lg font-bold tracking-tight text-white">
                    N<span className="text-[#c6ff4d]">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-zinc-400 transition-colors hover:text-[#c6ff4d]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden items-center gap-2 rounded-full bg-[#c6ff4d] px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105 sm:flex"
                >
                    Let&apos;s talk <ArrowUpRight size={16} />
                </a>

                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-white/10 bg-zinc-950 px-5 py-5 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-zinc-300 transition-colors hover:text-[#c6ff4d]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}