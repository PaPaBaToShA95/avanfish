'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
    { href: '/', label: 'Головна' },
    { href: '/about', label: 'Про нас' },
    // { href: '/lake-sectors', label: 'Мапа Озера' },
    { href: '/trophies', label: 'Трофеї' },
    { href: '/contacts', label: 'Контакти' },
    { href: '/price', label: 'Ціни' },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-background text-foreground border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
                <Link href="/" className="flex-shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                            priority
                        />
                    </div>
                </Link>

                {/* Mobile burger */}
                <button
                    className="md:hidden block rounded-md border p-2 hover:bg-muted transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                pathname === href ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'block py-2 border-b text-sm font-medium transition-colors hover:text-primary',
                                pathname === href ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
                            )}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}