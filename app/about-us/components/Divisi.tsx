"use client";

import Image from "next/image";
import { useState } from "react";
 
type Division =
  | "Eksekutif"
  | "Web Development"
  | "Front-End Engineer"
  | "Mobile Development"
  | "UI/UX Designer";

interface TeamMember {
  name: string;
  role: string;
  division: Division;
  image: string;
  linkedin?: string;
}
 
const teamMembers: TeamMember[] = [
  // Eksekutif
  {
    name: "Name",
    role: "Web Developer",
    division: "Eksekutif",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },
 
  {
    name: "Name",
    role: "Web Developer",
    division: "Web Development",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Name",
    role: "Web Developer",
    division: "Web Development",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },
  
  // Front-End Engineer
  {
    name: "Name",
    role: "Frontend Engineer",
    division: "Front-End Engineer",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },

  // Mobile Development
  {
    name: "Name",
    role: "Mobile Developer",
    division: "Mobile Development",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },

  // UI/UX Designer
  {
    name: "Name",
    role: "UI/UX Designer",
    division: "UI/UX Designer",
    image: "/about-page-shapes/OrangUtan.png",
    linkedin: "https://linkedin.com",
  },
];
 
export default function Divisi() {
  const [activeTab, setActiveTab] = useState<"All" | Division>("All");
 
  const filteredMembers =
    activeTab === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.division === activeTab);
 
  const tabs: ("All" | Division)[] = [
    "All",
    "Eksekutif",
    "Web Development",
    "Front-End Engineer",
    "Mobile Development",
    "UI/UX Designer",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
         
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Kami Terdiri dari Berbagai Divisi yang Saling
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            <span className="text-cyan-500 font-bold">Mendukung</span>
            <span className="text-gray-900 font-bold"> dan </span>
            <span className="text-[#009F80] font-bold">Berkolaborasi</span>
          </p>
        </div>
 
        <p className="text-center text-gray-800 text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-3xl mx-auto">
          Di RISTEK, setiap anggota tergabung dalam divisi dengan keahlian spesifik, memungkinkan mereka
          untuk mengembangkan keterampilan, berkolaborasi, dan berkontribusi dalam proyek inovatif yang
          berdampak nyata.
        </p>
 
        <div className="relative mb-10 md:mb-12">
          <div className="
            flex items-center gap-8 md:gap-16 lg:gap-18 pb-4
            overflow-x-auto scrollbar-hide
            md:justify-center
          ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative pb-3 text-xs md:text-sm font-medium whitespace-nowrap transition-colors
                  ${activeTab === tab ? "text-cyan-500" : "text-gray-500 hover:text-cyan-500"}
                  after:absolute after:left-0 after:-bottom-px after:w-full
                  after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300
                  ${activeTab === tab ? "after:scale-x-100" : "after:scale-x-0"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
 
        <p className="text-center text-gray-700 text-sm md:text-base font-medium mb-8 md:mb-10 px-4">
          Membangun dan mengembangkan website fungsional serta responsif dengan teknologi terbaru.
        </p>
 
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className="shrink-0 w-[280px] snap-start"
              >
                <div className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 h-full">
 
                  <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                  </div>
 
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {member.role}
                    </p>
                  </div>
 
                  <div className="mt-3">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-cyan-100 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                        </svg>
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300"
            > 
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
 
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
 
              <div className="mt-3">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-cyan-100 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}