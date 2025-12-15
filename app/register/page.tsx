"use client";
// fix: adjustment based on review

import Image from "next/image";
import { useState } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import StepOneForm from "./components/StepOneForm";
import StepTwoForm from "./components/StepTwoForm";
 
export interface StepOneData {
  nama: string;
  email: string;
  kontak: string;
  perusahaan: string;
}

export interface StepTwoData {
  deskripsiProyek: string;
  layanan: string[];
  teknologi: string;
 
  timeline: {
    mm: string;
    dd: string;
    yy: string;
  };

  dokumen: File | null;
  informasiTambahan: string;
}

export type FormData = StepOneData & StepTwoData;
 
export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const [stepOneData, setStepOneData] = useState<StepOneData>({
    nama: "",
    email: "",
    kontak: "",
    perusahaan: "",
  });

  const [stepTwoData, setStepTwoData] = useState<StepTwoData>({
    deskripsiProyek: "",
    layanan: [],
    teknologi: "",
    timeline: { mm: "", dd: "", yy: "" },  
    dokumen: null,
    informasiTambahan: "",
  });

  const handleStepOneComplete = (data: StepOneData) => {
    setStepOneData(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToStepOne = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = (data: StepTwoData) => {
    setStepTwoData(data);

    const finalData: FormData = {
      ...stepOneData,
      ...data,
    };

    console.log("=== FINAL SUBMISSION DATA ===");
    console.log(finalData);
    console.log("============================");

    alert("Registrasi berhasil! Data telah dikirim.");
  };

  const handleCancel = () => {
    if (confirm("Apakah Anda yakin ingin membatalkan registrasi?")) {
      window.location.href = "/";
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen   bg-gray-50">
        <div className="relative overflow-hidden"> 
          <div className="absolute inset-0">
            <div className="relative w-[1430px] h-[250px]">
              <Image
                src="/RegisterIconsAndShapes/Shapes/Rectangle-Reg.svg"
                alt="Decorative Pattern"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center text-white mb-8">
              <p className="text-sm md:text-base font-light mb-1 tracking-wide">
                Research and Technology
              </p>
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                FORMULIR PENDAFTARAN KLIEN
              </h1>
            </div>

          <div className="flex items-center justify-center gap-3 md:gap-6 max-w-2xl mx-auto"> 
            <div className="flex items-center gap-2 md:gap-3">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center transition-all duration-300 hidden md:flex ${
                  currentStep === 1 ? "bg-white" : "bg-white/90"
                }`}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="white" />
                  <path
                    d="M18 34V16C18 15.4696 18.2107 14.9609 18.5858 14.5858C18.9609 14.2107 19.4696 14 20 14H28C28.5304 14 29.0391 14.2107 29.4142 14.5858C29.7893 14.9609 30 15.4696 30 16V34M18 34H30M18 34H16C15.4696 34 14.9609 33.7893 14.5858 33.4142C14.2107 33.0391 14 32.5304 14 32V26C14 25.4696 14.2107 24.9609 14.5858 24.5858C14.9609 24.2107 15.4696 24 16 24H18M30 34H32C32.5304 34 33.0391 33.7893 33.4142 33.4142C33.7893 33.0391 34 32.5304 34 32V23C34 22.4696 33.7893 21.9609 33.4142 21.5858C33.0391 21.2107 32.5304 21 32 21H30M22 18H26M22 22H26M22 26H26M22 30H26"
                    stroke="#009FC4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-medium text-white/90 bg-black/30 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                Informasi Perusahaan
              </span>
            </div> 
            <div className="w-12 md:w-24 h-1 rounded-full bg-white/90" />
 
            <div className="flex items-center gap-2 md:gap-3">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center transition-all duration-300 hidden md:flex ${
                  currentStep === 2 ? "bg-white" : "bg-white/70"
                }`}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="white"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M26 14V18C26 18.5304 26.2107 19.0391 26.5858 19.4142C26.9609 19.7893 27.4696 20 28 20H32M22 21H20M28 25H20M28 29H20M27 14H18C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V19L27 14Z"
                    stroke="#009FC4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-medium text-white/90 bg-black/30 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                Informasi Proyek
              </span>
            </div>
          </div>
          </div>
        </div>
 
        <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-gray-200">
            {currentStep === 1 && (
              <StepOneForm
                initialData={stepOneData}
                onNext={handleStepOneComplete}
                onCancel={handleCancel}
              />
            )}

            {currentStep === 2 && (
              <StepTwoForm
                initialData={{ ...stepOneData, ...stepTwoData }}
                onBack={handleBackToStepOne}
                onSubmit={handleFinalSubmit}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
