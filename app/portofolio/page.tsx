"use client";

import Link from "next/link";
import { useState } from "react";

const COLORS = {
    primaryCyan: "#00c6e8",
    darkCyan: "#009FC4",
    accentTeal: "#14b8a6",
    textDark: "#1f2937",
    bgCream: "#FFF8F0",
    bgLight: "#FAFAFA",
    cardMockupBg: "#F5F5F5",
};

// Project data types
interface Project {
    id: number;
    title: string;
    category: "Mobile App" | "Website" | "Data Science";
    description: string;
    imageSrc: string;
    link?: string;
}

// Sample project data - Internal Projects
const internalProjects: Project[] = [
    {
        id: 1,
        title: "KelasKita",
        category: "Website",
        description: "Platform pembelajaran online yang memungkinkan mahasiswa dan dosen untuk berkolaborasi dalam kegiatan belajar mengajar secara efektif.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
    {
        id: 2,
        title: "JadwalPintar",
        category: "Mobile App",
        description: "Aplikasi manajemen jadwal kuliah yang terintegrasi dengan sistem akademik untuk memudahkan mahasiswa mengatur waktu.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
    {
        id: 3,
        title: "Ristek Link",
        category: "Website",
        description: "Platform link management yang memungkinkan organisasi untuk mengelola dan berbagi tautan penting dengan mudah.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
];

// Sample project data - External Projects
const externalProjects: Project[] = [
    {
        id: 4,
        title: "KelasKita",
        category: "Website",
        description: "Platform pembelajaran online untuk klien eksternal dengan fitur lengkap dan UI/UX yang modern.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
    {
        id: 5,
        title: "JadwalPintar",
        category: "Mobile App",
        description: "Aplikasi mobile untuk manajemen waktu dan produktivitas yang dikembangkan untuk perusahaan partner.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
    {
        id: 6,
        title: "Ristek Link",
        category: "Data Science",
        description: "Solusi data analytics yang membantu klien dalam mengambil keputusan berbasis data.",
        imageSrc: "/images/project-placeholder.png",
        link: "#",
    },
];

// Categories for filter
const categories = ["All", "Mobile App", "Website", "Data Science"] as const;
type Category = (typeof categories)[number];

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Device Mockup */}
        <div className="relative h-48 sm:h-56 flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)' }}>
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Laptop Frame */}
                <div className="relative w-4/5 max-w-[200px]">
                    <div className="bg-gray-800 rounded-t-lg p-1">
                        <div className="bg-white rounded aspect-video flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-teal-50 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">Preview</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-b-sm"></div>
                    <div className="bg-gray-600 h-1 w-1/2 mx-auto rounded-b"></div>
                </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-3 right-3 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-60"></div>
                <div className="w-2 h-2 rounded-full bg-teal-400 opacity-60"></div>
            </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-base sm:text-lg text-gray-900">{project.title}</h3>
                <span
                    className="text-xs px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: COLORS.primaryCyan }}
                >
                    {project.category}
                </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
            </p>
            <Link
                href={project.link || "#"}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                    background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)`,
                    color: "white"
                }}
            >
                Kunjungi Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>
    </div>
);

// Tab Filter Component
const TabFilter: React.FC<{
    activeCategory: Category;
    onCategoryChange: (category: Category) => void;
}> = ({ activeCategory, onCategoryChange }) => (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeCategory === category
                    ? "text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50"
                    }`}
                style={
                    activeCategory === category
                        ? { background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)` }
                        : {}
                }
            >
                {category}
            </button>
        ))}
    </div>
);

// Pagination Component
const Pagination: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex items-center justify-center gap-2 mt-8">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${currentPage === page
                    ? "text-white"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                style={
                    currentPage === page
                        ? { background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)` }
                        : {}
                }
            >
                {page}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
);

// Project Section Component
const ProjectSection: React.FC<{
    title: string;
    projects: Project[];
}> = ({ title, projects }) => {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="py-12 sm:py-16" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 inline-block relative">
                        {title}
                        <div
                            className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                            style={{ background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.accentTeal} 100%)` }}
                        ></div>
                    </h2>
                </div>

                {/* Tab Filters */}
                <TabFilter
                    activeCategory={activeCategory}
                    onCategoryChange={(cat) => {
                        setActiveCategory(cat);
                        setCurrentPage(1);
                    }}
                />

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination */}
                {filteredProjects.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredProjects.length / 6) || 1}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </section>
    );
};

// Hero Section Component
const PortfolioHeroSection: React.FC = () => (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Title */}
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Ubah Ide Anda Menjadi{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.accentTeal} 100%)` }}
                    >
                        Kesuksesan
                    </span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                    Kami telah membantu berbagai klien dalam mengembangkan produk digital yang berdampak. Lihat portofolio kami di bawah ini.
                </p>
            </div>

            {/* Device Mockups Carousel */}
            <div className="relative mb-12 sm:mb-16">
                <div
                    className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
                    style={{ background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)` }}
                >
                    <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 lg:gap-8">
                        {/* Laptop Left */}
                        <div className="hidden sm:block w-32 md:w-40 lg:w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-800 rounded-t-lg p-1">
                                <div className="bg-white rounded aspect-video"></div>
                            </div>
                            <div className="bg-gray-700 h-2 rounded-b-sm"></div>
                            <div className="bg-gray-600 h-1 w-1/2 mx-auto rounded-b"></div>
                        </div>

                        {/* Center Laptop (Main) */}
                        <div className="w-48 sm:w-56 md:w-64 lg:w-72 z-10 transform hover:scale-105 transition-transform duration-500">
                            <div className="bg-gray-800 rounded-t-lg p-1.5">
                                <div className="bg-white rounded aspect-video flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Your Project Here</span>
                                </div>
                            </div>
                            <div className="bg-gray-700 h-3 rounded-b-sm"></div>
                            <div className="bg-gray-600 h-1.5 w-1/2 mx-auto rounded-b"></div>
                        </div>

                        {/* Laptop Right */}
                        <div className="hidden sm:block w-32 md:w-40 lg:w-48 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-800 rounded-t-lg p-1">
                                <div className="bg-white rounded aspect-video"></div>
                            </div>
                            <div className="bg-gray-700 h-2 rounded-b-sm"></div>
                            <div className="bg-gray-600 h-1 w-1/2 mx-auto rounded-b"></div>
                        </div>

                        {/* Phone */}
                        <div className="hidden lg:block w-16 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-800 rounded-xl p-1">
                                <div className="bg-white rounded-lg aspect-[9/16]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mx-auto max-w-4xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Punya ide inovatif? Mari kita wujudkan bersama!
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                    Tim kami siap untuk mengembangkan produk digital yang sesuai dengan kebutuhan Anda. Mulai dari Mobile App, Website, hingga solusi Data Science.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link
                        href="/register"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)` }}
                    >
                        Register as Client
                    </Link>
                    <Link
                        href="#partner"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 bg-white border-2 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                        style={{ borderColor: COLORS.primaryCyan }}
                    >
                        Let&apos;s Collaborate
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

// Contributor CTA Section
const ContributorCTASection: React.FC = () => (
    <section
        className="relative py-12 sm:py-16 overflow-hidden"
        style={{ background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)` }}
    >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Bergabunglah Sebagai <span className="underline decoration-2 underline-offset-4">Kontributor</span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
                RISTEK membuka peluang bagi siapa saja yang ingin berkontribusi dalam proyek-proyek kami. Ayo jadikan keahlianmu berdampak nyata!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                    href="#"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    style={{ color: COLORS.darkCyan }}
                >
                    Klaim Kontributor
                </Link>
                <Link
                    href="#"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                    Kenali Lebih Jauh
                </Link>
            </div>
        </div>
    </section>
);

// Main Portfolio Page Component
export default function PortfolioPage() {
    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
            <PortfolioHeroSection />
            <ProjectSection title="Internal Project" projects={internalProjects} />
            <ProjectSection title="External Project" projects={externalProjects} />
            <ContributorCTASection />
        </div>
    );
}
