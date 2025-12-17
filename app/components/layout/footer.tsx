"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaSpotify } from "react-icons/fa";

const MAP_PIN = "/shapes/map-pin.svg";

// Data untuk partner logos (commented out - ready to use)
// const partnerLogos = [
//     { name: "Facebook", src: "/logos/facebook.png" },
//     { name: "Twitter", src: "/logos/twitter.png" },
//     { name: "Instagram", src: "/logos/instagram.png" },
//     { name: "LinkedIn", src: "/logos/linkedin.png" },
//     { name: "Google", src: "/logos/google.png" },
//     { name: "YouTube", src: "/logos/youtube.png" },
//     { name: "Spotify", src: "/logos/spotify.png" },
// ];

// interface PartnerLogoProps {
//     name: string;
//     src: string;
// }

// const PartnerLogo = ({ name, src }: PartnerLogoProps) => (
//     <div className="w-[120px] h-[40px] flex items-center justify-center mx-4 my-2">
//         <Image src={src} alt={name} width={120} height={40} style={{ objectFit: "contain" }} 
//          className="opacity-60 hover:opacity-100 transition-opacity duration-300"/>
//     </div>
// );

export default function Footer() {
  return (
    <>
      <section className="w-full bg-white py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[#00718B] text-base sm:text-lg font-semibold tracking-wider">
              RISTEK PARTNERS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 px-4">
              Bantu kami mencapai misi kami
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className=" mt-6 sm:mt-8  px-6 sm:px-8  py-2.5 sm:py-3  bg-[#009FC4] text-white  font-semibold 
              rounded-lg hover:bg-[#00b3d4]  transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Menjadi Mitra
            </button>
          </div> */}

          {/* <div className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-12">
                        {partnerLogos.map((logo, index) => (
                            <PartnerLogo key={index} {...logo} />
                        ))}
                    </div> */}
        </div>
      </section>
      <footer className="w-full bg-gray-200 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className=" flex flex-col items-center text-center
            md:grid md:grid-cols-2 md:text-left gap-4 sm:gap-6 md:gap-8  pb-4 sm:pb-6">
            <div className="flex justify-center md:justify-start items-center">
              <Image src="/images/logo/Logo.svg" alt="RISTEK Logo" width={180} height={45}
                className="w-40 sm:w-44 md:w-[180px] lg:w-[220px] h-auto object-contain" />
            </div>
            <div
              className=" flex flex-col items-center text-center
                md:items-end md:text-right space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Image src={MAP_PIN} alt="Location Pin" width={18} height={18}
                  className="shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm text-[#00C6E8] font-semibold">
                  <Link href="https://maps.app.goo.gl/fKviUgKxgxe7wBna8" target="_blank"
                    rel="noopener noreferrer" className="hover:underline transition">
                    Universitas Cakrawala, Jakarta Selatan
                  </Link>
                </span>
              </div>
              <div
                className="text-xs sm:text-sm flex flex-col items-center md:items-end">
                <p className="text-gray-900 font-normal mb-1">
                  Contact us (Email):
                </p>
                <Link href="mailto:ristek.sga@cakrawala.ac.id"
                  className="text-[#009F80] hover:underline font-medium transition"
                >
                  ristek.sga@cakrawala.ac.id
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-4 sm:my-6 border-gray-300" />

          <div className="flex flex-row items-center justify-between gap-4">
            <p className="text-gray-900 font-normal text-base sm:text-lg md:text-xl">
              © 2025 RISTEK
            </p>
            <div className="flex items-center justify-end space-x-4 sm:space-x-5 md:space-x-6">
              <Link href="https://instagram.com" target="_blank"
                className="text-gray-800 hover:text-[#00C6E8] transition-all 
              duration-300 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link href="https://twitter.com" target="_blank"
                className="text-gray-800 hover:text-[#00C6E8] 
              transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link href="https://linkedin.com" target="_blank"
                className="text-gray-800 hover:text-[#00C6E8] transition-all 
              duration-300 hover:scale-110" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link href="https://spotify.com" target="_blank" className="text-gray-800 hover:text-[#00C6E8] 
              transition-all duration-300 hover:scale-110" aria-label="Spotify">
              </Link>
              <FaSpotify className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
