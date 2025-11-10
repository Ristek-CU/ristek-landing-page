import Link from "next/link";
import Image from "next/image";  

const DUMMY_LOGO_PATH = "/images/logo/Logo.svg";  
const LOGO_WIDTH = 252;  
const LOGO_HEIGHT = 40;  

// NAVIGASI 
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Events", href: "/events" },
  { name: "Portofolio", href: "/portofolio" },
];

export function Header() {
    return ( 
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div 
                className="max-w-[1440px] mx-auto h-[98px] flex items-center justify-between px-8"
                style={{ height: '98px' }} > 
                <Link href="/" className="flex-shrink-0"> 
                    <Image
                        src={DUMMY_LOGO_PATH}
                        alt="Research & Technology Student Government Association Logo"
                        width={LOGO_WIDTH}
                        height={LOGO_HEIGHT} 
                        className="w-[200px] h-[40px] " /> 
                </Link>
 
                <nav className="hidden lg:block">  
                    <ul className="flex space-x-8 text-sm font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link 
                                    href={link.href} 
                                    className="hover:text-cyan-500 transition duration-150"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
 
                <div className="flex space-x-4 items-center flex-shrink-0"> 
                    <button className="px-6 py-3 text-sm font-semibold border-2 border-cyan-500 text-black rounded-lg hover:bg-cyan-50 transition duration-200">
                        Partner With Us
                    </button> 
                    <button className="px-6 py-3 text-sm font-semibold bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-200">
                        Register As Client
                    </button>
                </div>
            </div>
        </header>

        
    );
}

export default Header;