'use client';

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';


const MAP_PIN = "/shapes/map-pin.svg";
// Data untuk partner logos
// const partnerLogos = [
//     { name: "Facebook", src: "/logos/ " },
//     { name: "Twitter", src: "/logos/ " },
//     { name: "Instagram", src: "/logos/ " },
//     { name: "LinkedIn", src: "/logos/ " },
//     { name: "Google", src: "/logos/ " },
//     { name: "YouTube", src: "/logos/ " },
//     { name: "Spotify", src: "/logos/ " },
 
// ];

// Interface untuk partner logo props
// interface PartnerLogoProps {
//     name: string;
//     src: string;
// }

// const PartnerLogo = ({ name, src }: PartnerLogoProps) => (
//     <div className="w-[120px] h-[40px] flex items-center justify-center mx-4 my-2">
//         <Image 
//             src={src} 
//             alt={name} 
//             width={120} 
//             height={40}
//             style={{ objectFit: "contain" }}
//             className="opacity-60 hover:opacity-100 transition-opacity duration-300"
//         />
//     </div>
// );

export default function Footer() {
    return (
        <>
            <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-[#00718B] text-lg font-semibold tracking-wider">
                            RISTEK PARTNERS
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2">
                            Bantu kami mencapai misi kami
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="mt-8 px-8 py-3 bg-[#009FC4] text-white font-semibold rounded-lg
                            hover:bg-[#00b3d4] transition-colors duration-300">
                            Menjadi Mitra
                        </button>
                    </div>

                    {/* <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {partnerLogos.map((logo, index) => (
                            <PartnerLogo key={index} {...logo} />
                        ))}
                    </div> */}
                </div>
            </section>

            <footer className="w-full bg-gray-200 py-6">
            <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
                    
                    <div className="order-1 md:order-1">
                        <Image 
                            src="/images/logo/Logo.svg" 
                            alt="RISTEK Logo"
                            width={220} 
                            height={50}
                            className="object-contain"
                        />
                    </div>

                    <div className="order-2 md:order-2 text-gray-700 space-y-4">
    
                        <div className="flex items-center justify-end ">
                            <Image src={MAP_PIN}
                                alt="Location Pin"
                                width={20}
                                height={20}
                                className="flex-shrink-0 mt-1"/>
                            <span className="ml-2 text-sm text-[#00C6E8] font-semibold mr-4 font-medium whitespace-nowrap">
                                <Link 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline">
                                    Universitas Cakrawala, Jakarta Selatan
                                </Link>
                            </span>
                        </div>
                        
                        <div className="text-sm">
                            <div className="flex flex-col mx-60 w-fit">
                                <p className="text-gray-900 font-normal ">Contact us (Email):</p>
                                
                                <Link 
                                    href="mailto:team@ristek.cs.cakyu.ac.id" 
                                    className="text-[#00C6E8] hover:underline font-medium text-teal-600">
                                    team@ristek.cs.cakyu.ac.id
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-300" />
                
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    
                    <p className=" text-[#000] mt-4 md:mt-0 text-xl">
                        © 2025 RISTEK
                    </p>
                    
                    <div className="order-1 md:order-2 flex space-x-6">
                        <Link href="#" className="text-gray-800 hover:text-gray-900 transition">
                            <FaInstagram size={28} />
                        </Link>
                        <Link href="#" className="text-gray-800 hover:text-gray-900 transition">
                            <FaTwitter size={28} />
                        </Link>
                        <Link href="#" className="text-gray-800 hover:text-gray-900 transition">
                            <FaLinkedin size={28} />
                        </Link>
                        {/* <Link href="#" className="text-gray-800 hover:text-gray-900 transition">
                            <LineIcon size={28} className="text-gray-800" />
                        </Link> */}
                        <Link href="#" className="text-gray-800 hover:text-gray-900 transition">
                            <FaSpotify size={28} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
