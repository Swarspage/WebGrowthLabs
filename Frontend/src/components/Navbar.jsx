import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import BlurText from './BlurText';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header' : 'bg-transparent'}`}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 backdrop-blur-xs">
                        <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                    </div>
                    <h2 className="text-[var(--text-bold)] text-xl font-bold tracking-tight">
                        <BlurText
                            text="WebGrowthLabs"
                            delay={150}
                            animateBy="characters"
                            direction="top"
                        />
                    </h2>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Services', 'Work', 'Process', 'About Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-[var(--text-main)] hover:text-primary transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded-full bg-primary transition-all text-white text-sm font-bold shadow-glow-purple border border-primary/30 hover:shadow-[0_0_20px_rgba(131,89,248,0.4)] hover:bg-primary-dark">
                        Start Growing
                    </button>
                    <button
                        className="md:hidden p-2 text-[var(--text-bold)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined mb-1">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-header border-t border-[var(--glass-header-border)] absolute top-20 left-0 right-0 p-4 flex flex-col gap-4">
                    {['Services', 'Work', 'Process', 'About Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[var(--text-main)] hover:text-primary font-medium p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="h-10 px-6 rounded-full bg-primary text-white font-bold shadow-glow-purple border border-white/10">Start Growing</button>
                </div>
            )}

        </header >
    );
};

export default Navbar;
