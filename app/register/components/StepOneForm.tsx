"use client";
// fix: adjustment based on review

import { useState } from "react";
import type { StepOneData } from "../page";

interface StepOneFormProps {
  initialData: StepOneData;
  onNext: (data: StepOneData) => void;
  onCancel: () => void;
}

export default function StepOneForm({
  initialData,
  onNext,
  onCancel,
}: StepOneFormProps) {
  const [formData, setFormData] = useState<StepOneData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof StepOneData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof StepOneData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof StepOneData, string>> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.kontak.trim()) {
      newErrors.kontak = "Informasi kontak wajib diisi";
    }

    if (!formData.perusahaan.trim()) {
      newErrors.perusahaan = "Nama perusahaan/organisasi wajib diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleNext} className="space-y-5"> 
      <div>
        <label htmlFor="nama" className="block text-sm font-semibold text-gray-900 mb-2">
          Nama <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Silahkan masukkan nama lengkap Anda"
          className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
            errors.nama
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-cyan-200 focus:border-cyan-500"
          }`}
        />
        {errors.nama && (
          <p className="mt-1 text-sm text-red-500">{errors.nama}</p>
        )}
      </div> 
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. client.ristek2025@gmail.com"
          className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-cyan-200 focus:border-cyan-500"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div> 
      <div>
        <label htmlFor="kontak" className="block text-sm font-semibold text-gray-900 mb-2">
          Informasi Kontak(WA, Line, dll) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="kontak"
          name="kontak"
          value={formData.kontak}
          onChange={handleChange}
          placeholder="e.g. 0812-xxxxxxx (WA)"
          className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
            errors.kontak
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-cyan-200 focus:border-cyan-500"
          }`}
        />
        {errors.kontak && (
          <p className="mt-1 text-sm text-red-500">{errors.kontak}</p>
        )}
      </div>
 
      <div>
        <label htmlFor="perusahaan" className="block text-sm font-semibold text-gray-900 mb-2">
          Nama Perusahaan/Organisasi <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="perusahaan"
          name="perusahaan"
          value={formData.perusahaan}
          onChange={handleChange}
          placeholder="e.g. Ristek2025"
          className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
            errors.perusahaan
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-cyan-200 focus:border-cyan-500"
          }`}
        />
        {errors.perusahaan && (
          <p className="mt-1 text-sm text-red-500">{errors.perusahaan}</p>
        )}
      </div>
 
      <div className="flex items-start gap-2 mt-3">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2.49988C21.9037 2.49988 27.5 8.09613 27.5 14.9999C27.5 21.9036 21.9037 27.4999 15 27.4999C8.09625 27.4999 2.5 21.9036 2.5 14.9999C2.5 8.09613 8.09625 2.49988 15 2.49988ZM14.9875 12.4999H13.75C13.4314 12.5002 13.125 12.6222 12.8933 12.8409C12.6616 13.0596 12.5222 13.3586 12.5035 13.6766C12.4849 13.9947 12.5883 14.3079 12.7928 14.5522C12.9973 14.7965 13.2874 14.9535 13.6038 14.9911L13.75 14.9999V21.2374C13.75 21.8874 14.2425 22.4249 14.875 22.4924L15.0125 22.4999H15.625C15.8879 22.4999 16.1441 22.417 16.3572 22.263C16.5702 22.109 16.7294 21.8918 16.8119 21.6422C16.8944 21.3926 16.8961 21.1233 16.8168 20.8727C16.7374 20.6221 16.5811 20.4028 16.37 20.2461L16.25 20.1674V13.7624C16.25 13.1124 15.7575 12.5749 15.125 12.5074L14.9875 12.4999ZM15 8.74988C14.6685 8.74988 14.3505 8.88157 14.1161 9.11599C13.8817 9.35042 13.75 9.66836 13.75 9.99988C13.75 10.3314 13.8817 10.6493 14.1161 10.8838C14.3505 11.1182 14.6685 11.2499 15 11.2499C15.3315 11.2499 15.6495 11.1182 15.8839 10.8838C16.1183 10.6493 16.25 10.3314 16.25 9.99988C16.25 9.66836 16.1183 9.35042 15.8839 9.11599C15.6495 8.88157 15.3315 8.74988 15 8.74988Z" fill="#6C6D6F"/>
        </svg>

        <p className="text-xs text-gray-500 py-2">
          Jika Anda meminta ini sebagai individu, abaikan bagian ini
        </p>
      </div>
 
      <div className="flex flex-row justify-end sm:flex-row gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-25 sm:w-[150px] h-[52px] px-8 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-[10px] hover:bg-red-100 transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          className="w-25 sm:w-[150px] border-2 border-gray-900 h-[52px] px-8 py-3  bg-[#FBB03C] text-gray-900 font-bold rounded-[10px] shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Next
        </button>
      </div>
    </form>
  );
}