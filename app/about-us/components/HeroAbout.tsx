import Link from "next/link";

export default function HeroAbout() {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[650px] 
    flex items-center justify-center text-white 
    bg-[url('/about-page-shapes/Hero-AboutUs.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          Berkolaborasi, Berinovasi, dan Berkembang Bersama RISTEK
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 opacity-90 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Komunitas mahasiswa yang berfokus pada riset, inovasi, danpengembangan
          teknologi untuk memberdayakan para mahasiswa yang ingintahu lebih.
        </p>

        <Link
          href="#"
          className=" inline-flex w-fit mx-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#262626] text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 lg:mx-0
          "
        >
          Kenali Lebih Dalam
        </Link>
      </div>
    </section>
  );
}
