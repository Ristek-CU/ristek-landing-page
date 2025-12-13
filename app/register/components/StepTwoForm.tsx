"use client";

import { useState } from "react";
import type { StepTwoData } from "../page";

interface StepTwoFormProps {
  initialData: StepTwoData;
  onBack: () => void;
  onSubmit: (data: StepTwoData) => void;
}

const LAYANAN_OPTIONS = [
  "UI/UX",
  "Web Development",
  "Mobile App Development",
  "Data Science",
  "Lainnya",
];

export default function StepTwoForm({
  initialData,
  onBack,
  onSubmit,
}: StepTwoFormProps) {
  const [formData, setFormData] = useState<StepTwoData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof StepTwoData, string>>>({});

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof StepTwoData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (layanan: string) => {
    setFormData((prev) => ({
      ...prev,
      layanan: prev.layanan.includes(layanan)
        ? prev.layanan.filter((l) => l !== layanan)
        : [...prev.layanan, layanan],
    }));
    if (errors.layanan) {
      setErrors((prev) => ({ ...prev, layanan: "" }));
    }
  };

  const handleTimelineChange = (field: "mm" | "dd" | "yy", value: string) => {
    setFormData((prev) => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        [field]: value,
      },
    }));
    if (errors.timeline) {
      setErrors((prev) => ({ ...prev, timeline: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, dokumen: file }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof StepTwoData, string>> = {};

    if (!formData.deskripsiProyek.trim()) {
      newErrors.deskripsiProyek = "Deskripsi proyek wajib diisi";
    }

    if (formData.layanan.length === 0) {
      newErrors.layanan = "Pilih minimal satu layanan";
    }

    if (!formData.timeline.mm || !formData.timeline.dd || !formData.timeline.yy) {
      newErrors.timeline = "Lengkapi tanggal proyek";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6"> 
      <div>
        <label htmlFor="deskripsiProyek" className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
          Deskripsi Proyek <span className="text-red-500">*</span>
        </label>
        <textarea
          id="deskripsiProyek"
          name="deskripsiProyek"
          value={formData.deskripsiProyek}
          onChange={handleTextChange}
          rows={5}
          placeholder="Jelaskan skema kemitraan yang Anda harapkan dalam 200 kata atau kurang"
          className={`w-full px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-1 resize-none ${
            errors.deskripsiProyek
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
          }`}
        />
        {errors.deskripsiProyek && (
          <p className="mt-1 text-xs text-red-500">{errors.deskripsiProyek}</p>
        )}
      </div> 
      <div>
        <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3">
          Layanan apa saja yang Anda butuhkan untuk proyek ini? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2 md:space-y-2.5">
          {LAYANAN_OPTIONS.map((layanan) => (
            <label key={layanan} className=" mt-5 flex items-center gap-2 md:gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.layanan.includes(layanan)}
                onChange={() => handleCheckboxChange(layanan)}
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-600  border-gray-300 rounded focus:ring-cyan-500 cursor-pointer"
              />
              <span className="text-xs md:text-sm  text-gray-700">{layanan}</span>
            </label>
          ))}
        </div>
        {errors.layanan && (
          <p className="mt-2 text-xs text-red-500">{errors.layanan}</p>
        )}
      </div> 
      <div>
        <label htmlFor="teknologi" className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
          Apakah ada teknologi yang ingin Anda butuhkan dalam pengembangan proyek ini?
        </label>
        <input
          type="text"
          id="teknologi"
          name="teknologi"
          value={formData.teknologi}
          onChange={handleTextChange}
          placeholder="partner.react2025@gmail.com"
          className="w-full px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div> 
      <div>
        <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
          Kapan Anda memperkirakan proyek ini akan selesai? <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2 md:gap-2.5 max-w-xs">
          <input
            type="text"
            value={formData.timeline.mm}
            onChange={(e) => handleTimelineChange("mm", e.target.value)}
            placeholder="MM"
            maxLength={2}
            className="w-14 md:w-16 px-2 py-1.5 md:py-2 text-xs md:text-sm text-center text-gray-900 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
          />
          <span className="text-cyan-500 font-bold text-2xl sm:text-3xl md:text-4xl">/</span>

          <input
            type="text"
            value={formData.timeline.dd}
            onChange={(e) => handleTimelineChange("dd", e.target.value)}
            placeholder="DD"
            maxLength={2}
            className="w-14 md:w-16 px-2 py-1.5 md:py-2 text-xs md:text-sm text-center text-gray-900 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
          />
          <span className="text-cyan-500 font-bold text-2xl sm:text-3xl md:text-4xl">/</span>
          <input
            type="text"
            value={formData.timeline.yy}
            onChange={(e) => handleTimelineChange("yy", e.target.value)}
            placeholder="YY"
            maxLength={2}
            className="w-14 md:w-16 px-2 py-1.5 md:py-2 text-xs md:text-sm text-center text-gray-900 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        {errors.timeline && (
          <p className="mt-1.5 text-xs text-red-500">{errors.timeline}</p>
        )}
        <p className="mt-2 text-[10px] md:text-xs text-gray-500 flex items-start gap-1">
          <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Jika Anda memperkirakan proyek selesai pada 1 Februari 2024, Anda dapat memasukkan 01/02/24</span>
        </p>
      </div>
 
      <div>
        <label htmlFor="dokumen" className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
          Dokumen Pendukung (Desain, Mockup, Penyajaran, dll)
        </label>
        <div className="relative">
          <input
            type="file"
            id="dokumen"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
            className="hidden"
          />
          <label
            htmlFor="dokumen"
            className="flex items-center cursor-pointer justify-start gap-2 w-full px-4 py-2.5 md:py-3cursor-pointer hover:border-cyan-400 hover:bg-cyan-50/20 transition-all"
          >
          <svg width="80" height="52" viewBox="0 0 150 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="148" height="50" rx="7" stroke="#009FC4" stroke-width="2"/>
              <path d="M29.9997 32.6667H39.9997V22.6667H46.6663L34.9997 11L23.333 22.6667H29.9997V32.6667ZM34.9997 15.7167L38.6163 19.3333H36.6663V29.3333H33.333V19.3333H31.383L34.9997 15.7167ZM23.333 36H46.6663V39.3333H23.333V36Z" fill="#009FC4"/>
              <path d="M67.3368 34.74C66.2301 34.74 65.2435 34.5067 64.3768 34.04C63.5235 33.5733 62.8501 32.9333 62.3568 32.12C61.8768 31.3067 61.6368 30.38 61.6368 29.34V19.6H63.9968V29.24C63.9968 29.8933 64.1368 30.4733 64.4168 30.98C64.7101 31.4867 65.1035 31.88 65.5968 32.16C66.1035 32.44 66.6835 32.58 67.3368 32.58C68.0035 32.58 68.5835 32.44 69.0768 32.16C69.5835 31.88 69.9768 31.4867 70.2568 30.98C70.5501 30.4733 70.6968 29.8933 70.6968 29.24V19.6H73.0368V29.34C73.0368 30.38 72.7968 31.3067 72.3168 32.12C71.8368 32.9333 71.1635 33.5733 70.2968 34.04C69.4435 34.5067 68.4568 34.74 67.3368 34.74ZM75.7751 38.5V23.68H77.9351V25.92L77.6751 25.4C78.0751 24.7867 78.6084 24.3067 79.2751 23.96C79.9417 23.6133 80.7017 23.44 81.5551 23.44C82.5817 23.44 83.5017 23.6867 84.3151 24.18C85.1417 24.6733 85.7884 25.3467 86.2551 26.2C86.7351 27.0533 86.9751 28.0133 86.9751 29.08C86.9751 30.1467 86.7351 31.1067 86.2551 31.96C85.7884 32.8133 85.1484 33.4933 84.3351 34C83.5217 34.4933 82.5951 34.74 81.5551 34.74C80.7151 34.74 79.9484 34.5667 79.2551 34.22C78.5751 33.8733 78.0484 33.3733 77.6751 32.72L78.0351 32.3V38.5H75.7751ZM81.3351 32.64C81.9751 32.64 82.5417 32.4867 83.0351 32.18C83.5284 31.8733 83.9151 31.4533 84.1951 30.92C84.4884 30.3733 84.6351 29.76 84.6351 29.08C84.6351 28.4 84.4884 27.7933 84.1951 27.26C83.9151 26.7267 83.5284 26.3067 83.0351 26C82.5417 25.6933 81.9751 25.54 81.3351 25.54C80.7084 25.54 80.1417 25.6933 79.6351 26C79.1417 26.3067 78.7484 26.7267 78.4551 27.26C78.1751 27.7933 78.0351 28.4 78.0351 29.08C78.0351 29.76 78.1751 30.3733 78.4551 30.92C78.7484 31.4533 79.1417 31.8733 79.6351 32.18C80.1417 32.4867 80.7084 32.64 81.3351 32.64ZM89.1735 34.5V19.36H91.4335V34.5H89.1735ZM99.2959 34.74C98.2559 34.74 97.3025 34.4933 96.4359 34C95.5825 33.5067 94.9025 32.8333 94.3959 31.98C93.8892 31.1267 93.6359 30.16 93.6359 29.08C93.6359 27.9867 93.8892 27.02 94.3959 26.18C94.9025 25.3267 95.5825 24.66 96.4359 24.18C97.2892 23.6867 98.2425 23.44 99.2959 23.44C100.363 23.44 101.316 23.6867 102.156 24.18C103.009 24.66 103.683 25.3267 104.176 26.18C104.683 27.02 104.936 27.9867 104.936 29.08C104.936 30.1733 104.683 31.1467 104.176 32C103.669 32.8533 102.989 33.5267 102.136 34.02C101.283 34.5 100.336 34.74 99.2959 34.74ZM99.2959 32.64C99.9359 32.64 100.503 32.4867 100.996 32.18C101.489 31.8733 101.876 31.4533 102.156 30.92C102.449 30.3733 102.596 29.76 102.596 29.08C102.596 28.4 102.449 27.7933 102.156 27.26C101.876 26.7267 101.489 26.3067 100.996 26C100.503 25.6933 99.9359 25.54 99.2959 25.54C98.6692 25.54 98.1025 25.6933 97.5959 26C97.1025 26.3067 96.7092 26.7267 96.4159 27.26C96.1359 27.7933 95.9959 28.4 95.9959 29.08C95.9959 29.76 96.1359 30.3733 96.4159 30.92C96.7092 31.4533 97.1025 31.8733 97.5959 32.18C98.1025 32.4867 98.6692 32.64 99.2959 32.64ZM110.382 34.74C109.649 34.74 109.002 34.6133 108.442 34.36C107.896 34.0933 107.469 33.7333 107.162 33.28C106.856 32.8133 106.702 32.2667 106.702 31.64C106.702 31.0533 106.829 30.5267 107.082 30.06C107.349 29.5933 107.756 29.2 108.302 28.88C108.849 28.56 109.536 28.3333 110.362 28.2L114.122 27.58V29.36L110.802 29.94C110.202 30.0467 109.762 30.24 109.482 30.52C109.202 30.7867 109.062 31.1333 109.062 31.56C109.062 31.9733 109.216 32.3133 109.522 32.58C109.842 32.8333 110.249 32.96 110.742 32.96C111.356 32.96 111.889 32.8267 112.342 32.56C112.809 32.2933 113.169 31.94 113.422 31.5C113.676 31.0467 113.802 30.5467 113.802 30V27.22C113.802 26.6867 113.602 26.2533 113.202 25.92C112.816 25.5733 112.296 25.4 111.642 25.4C111.042 25.4 110.516 25.56 110.062 25.88C109.622 26.1867 109.296 26.5867 109.082 27.08L107.202 26.14C107.402 25.6067 107.729 25.14 108.182 24.74C108.636 24.3267 109.162 24.0067 109.762 23.78C110.376 23.5533 111.022 23.44 111.702 23.44C112.556 23.44 113.309 23.6 113.962 23.92C114.629 24.24 115.142 24.6867 115.502 25.26C115.876 25.82 116.062 26.4733 116.062 27.22V34.5H113.902V32.54L114.362 32.6C114.109 33.04 113.782 33.42 113.382 33.74C112.996 34.06 112.549 34.3067 112.042 34.48C111.549 34.6533 110.996 34.74 110.382 34.74ZM123.705 34.74C122.665 34.74 121.731 34.4933 120.905 34C120.091 33.4933 119.445 32.8133 118.965 31.96C118.498 31.1067 118.265 30.1467 118.265 29.08C118.265 28.0133 118.505 27.0533 118.985 26.2C119.465 25.3467 120.111 24.6733 120.925 24.18C121.738 23.6867 122.658 23.44 123.685 23.44C124.551 23.44 125.318 23.6133 125.985 23.96C126.651 24.3067 127.178 24.7867 127.565 25.4L127.225 25.92V19.36H129.465V34.5H127.325V32.3L127.585 32.72C127.211 33.3733 126.678 33.8733 125.985 34.22C125.291 34.5667 124.531 34.74 123.705 34.74ZM123.925 32.64C124.551 32.64 125.111 32.4867 125.605 32.18C126.111 31.8733 126.505 31.4533 126.785 30.92C127.078 30.3733 127.225 29.76 127.225 29.08C127.225 28.4 127.078 27.7933 126.785 27.26C126.505 26.7267 126.111 26.3067 125.605 26C125.111 25.6933 124.551 25.54 123.925 25.54C123.298 25.54 122.731 25.6933 122.225 26C121.718 26.3067 121.325 26.7267 121.045 27.26C120.765 27.7933 120.625 28.4 120.625 29.08C120.625 29.76 120.765 30.3733 121.045 30.92C121.325 31.4533 121.711 31.8733 122.205 32.18C122.711 32.4867 123.285 32.64 123.925 32.64Z" fill="#009FC4"/>
          </svg>

            <span className="text-xs md:text-sm text-cyan-500 font-medium">
              {formData.dokumen ? formData.dokumen.name : ""}
            </span>
          </label>
        </div>
      </div>
 
      <div>
        <label htmlFor="informasiTambahan" className="block text-xs md:text-sm font-semibold text-gray-900 mb-1.5 md:mb-2">
          Informasi Tambahan
        </label>
        <textarea
          id="informasiTambahan"
          name="informasiTambahan"
          value={formData.informasiTambahan}
          onChange={handleTextChange}
          rows={5}
          placeholder="Silahkan tulis informasi tambahan apa pun yang diperlukan untuk proyek"
          className="w-full px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
        />
      </div>
 
      <div className="flex flex-row justify-end sm:flex-row gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="w-30 sm:w-[150px] h-[52px] px-8 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-[10px] hover:bg-red-100 transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          className="w-30 sm:w-[150px] border-2 border-gray-900 h-[52px] px-8 py-3  bg-[#FBB03C] text-gray-900 font-bold rounded-[10px] shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}