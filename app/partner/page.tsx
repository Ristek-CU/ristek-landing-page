"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

interface FormData {
    organizationName: string;
    name: string;
    contactInfo: string;
    partnershipScope: string[];
    partnershipDescription: string;
}

const partnershipOptions = [
    { id: "saas", label: "Saas" },
    { id: "event", label: "Event" },
    { id: "media", label: "Media" },
    { id: "kolaborasi", label: "Kolaborasi Komunitas & Acara" },
    { id: "pertanyaan", label: "Pertanyaan Media & Publikasi" },
    { id: "bakat", label: "Bakat & Peluang Perekrutan" },
    { id: "lainnya", label: "Lainnya" },
];

export default function PartnerPage() {
    const [formData, setFormData] = useState<FormData>({
        organizationName: "",
        name: "",
        contactInfo: "",
        partnershipScope: [],
        partnershipDescription: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (optionId: string) => {
        setFormData((prev) => ({
            ...prev,
            partnershipScope: prev.partnershipScope.includes(optionId)
                ? prev.partnershipScope.filter((id) => id !== optionId)
                : [...prev.partnershipScope, optionId],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
        alert("Form berhasil dikirim!");
    };

    const handleReset = () => {
        setFormData({
            organizationName: "",
            name: "",
            contactInfo: "",
            partnershipScope: [],
            partnershipDescription: "",
        });
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[#008B9E]">
                <div className="absolute inset-0">
                    <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                        <Image
                            src="/RegisterIconsAndShapes/Shapes/Rectangle-Reg.svg"
                            alt="Decorative Pattern"
                            fill
                            className="object-cover object-left"
                            priority
                        />
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-12">
                    <div className="text-center text-white mb-8">
                        <p className="text-sm md:text-base font-light mb-1 tracking-wide">
                            Research and Technology
                        </p>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                            FORMULIR PENDAFTARAN KEMITRAAN
                        </h1>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <section className="w-full bg-white py-8 sm:py-12 md:py-16">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Organization Name */}
                        <div>
                            <label
                                htmlFor="organizationName"
                                className="block text-sm font-bold text-gray-900 mb-2"
                            >
                                Nama Perusahaan/Organization Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="organizationName"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleInputChange}
                                placeholder="Ristek 2025"
                                required
                                className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition-all border-gray-300"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-bold text-gray-900 mb-2"
                            >
                                Nama<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Silahkan masukan nama lengkap Anda"
                                required
                                className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition-all border-gray-300"
                            />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <label
                                htmlFor="contactInfo"
                                className="block text-sm font-bold text-gray-900 mb-2"
                            >
                                Informasi Kontak (Email/WA)<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="contactInfo"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleInputChange}
                                placeholder="partner.ristek2025@gmail.com"
                                required
                                className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition-all border-gray-300"
                            />
                        </div>

                        {/* Partnership Scope */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-3">
                                Ruang Lingkup Kemitraan<span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                {partnershipOptions.map((option) => (
                                    <label
                                        key={option.id}
                                        className="flex items-center gap-3 cursor-pointer group"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={formData.partnershipScope.includes(option.id)}
                                                onChange={() => handleCheckboxChange(option.id)}
                                                className="w-5 h-5 border-2 border-gray-400 rounded-md appearance-none cursor-pointer
                                                    checked:border-cyan-500 checked:bg-cyan-500
                                                    focus:outline-none focus:ring-0
                                                    transition-all duration-200"
                                            />
                                            {formData.partnershipScope.includes(option.id) && (
                                                <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Partnership Description */}
                        <div>
                            <label
                                htmlFor="partnershipDescription"
                                className="block text-sm font-bold text-gray-900 mb-2"
                            >
                                Skema Kemitraan yang Diharapkan
                            </label>
                            <textarea
                                id="partnershipDescription"
                                name="partnershipDescription"
                                value={formData.partnershipDescription}
                                onChange={handleInputChange}
                                placeholder="Jelaskan skema kemitraan yang Anda harapkan dalam 200 kata atau kurang"
                                rows={5}
                                className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 transition-all border-gray-300 resize-none"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-end gap-4 pt-6">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-10 py-2 text-sm font-bold text-red-500 bg-white border border-red-500 rounded-md
                                    hover:bg-red-50 transition-all duration-200"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-2 text-sm font-bold text-black bg-[#F5A623] rounded-md
                                    hover:bg-[#E6951A] transition-all duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}
