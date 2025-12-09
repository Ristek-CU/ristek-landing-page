"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DUMMY_LOGO_PATH = "/images/logo/Logo.svg";
const LOGO_WIDTH = 252;
const LOGO_HEIGHT = 40;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Events", href: "/events" },
  { name: "Portofolio", href: "/portofolio" },
]; 
export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }; 
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-[1440px] mx-auto h-[98px] md:h-20 lg:h-[98px] flex items-center justify-between px-4 md:px-6 lg:px-8">
                <Link href="/" className="shrink-0 z-50">
                    <Image src={DUMMY_LOGO_PATH} alt="Research & Technology Student Government Association Logo" width={LOGO_WIDTH} height={LOGO_HEIGHT} 
                    className="w-[150px] h-[30px] md:w-[180px] md:h-[35px] lg:w-[200px] lg:h-10"/>
                </Link>
                <nav className="hidden lg:block">
                    <ul className="flex space-x-6 xl:space-x-8 text-sm font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="hover:text-cyan-500 transition duration-150">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex space-x-3 lg:space-x-4 items-center shrink-0">
                    <Link href="#partner">
                        <button className="px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm font-semibold border-2 border-cyan-500 text-black rounded-lg hover:bg-cyan-50 transition duration-200">
                            Partner With Us
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-200">
                            Register As Client
                        </button>
                    </Link>
                </div>
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition"
                    aria-label="Toggle menu">
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}/>
                        <span
                            className={`block h-0.5 w-1/2 self-end bg-black transition-all duration-300 ${
                                isMobileMenuOpen ? "opacity-0" : ""
                            }`}/>
                        <span
                            className={`block h-0.5 w-3/4 self-end bg-black transition-all duration-300 ${
                                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}/>
                    </div>
                </button>
            </div>

            <div
                className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}>
                <nav className="px-4 py-6 space-y-4">
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="block text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition duration-150">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
        </header>
    );
}

export default Header;