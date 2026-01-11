import Image from "next/image";
import Link from "next/link";

// Temporary team photo - ganti dengan path asli nanti
const TEAM_PHOTO = "/events-page-shapes/sga.jpeg";

export default function CtaSection() {
  const roles = [
    "UI/UX Designer",
    "Front-End Engineer",
    "Web Development",
    "Mobile Development",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">

      {/* HEADLINE DI ATAS CARD */}
      <div className="mb-8 md:mb-10 lg:mb-12 text-center px-4">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {/* BARIS 1 */}
          <span className="block">
            <span className="text-gray-900">Mari </span>
            <span className="text-cyan-500">Berkreasi</span>
            <span className="text-gray-900">, </span>
            <span className="text-[#009F80]">Berinovasi</span>
            <span className="text-gray-900">, dan </span>
            <span className="text-orange-400">Berkontribusi</span>
          </span>

          {/* BARIS 2 */}
          <span className="block mt-1">
            <span className="text-gray-900">Bersama RISTEK!</span>
          </span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ============================================ */}
        {/* MAIN CONTAINER WITH BACKGROUND IMAGE */}
        {/* ============================================ */}
        <div
          className="
            relative rounded-[2.5rem] overflow-hidden
            bg-cover bg-center bg-no-repeat
            p-6 md:p-10 lg:p-14
          "
          style={{
            backgroundImage: "url('/about-page-shapes/bg-cta.svg')"
          }}
        >

          {/* ============================================ */}
          {/* RESPONSIVE LAYOUT: Mobile Stack, Desktop Grid */}
          {/* ============================================ */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">

            {/* ============================================ */}
            {/* IMAGE - Atas di Mobile, Kanan di Desktop */}
            {/* ============================================ */}
            <div className="w-full lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] md:max-w-sm h-64 md:h-80 lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={TEAM_PHOTO}
                  alt="RISTEK Team - Komunitas Teknologi Mahasiswa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 400px"
                  priority
                />
              </div>
            </div>

            {/* ============================================ */}
            {/* TEXT CONTENT - Bawah di Mobile, Kiri di Desktop */}
            {/* ============================================ */}
            <div className="w-full lg:col-span-7 text-white space-y-4 md:space-y-5 order-2 lg:order-1">

              {/* SUB-HEADLINE */}
              <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                <span className="block">
                  Dunia Teknologi Menunggu{' '}
                  <span className="text-orange-400">Kontribusimu,</span>
                </span>
                <span className="block">
                  Pilih Peranmu Sekarang!
                </span>
              </h2>

              {/* DESKRIPSI PARAGRAF */}
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
                RISTEK adalah tempat bagi mahasiswa yang ingin berkembang di bidang teknologi.
                Bergabung dengan kami, rasakan pengalaman hands-on, belajar dari project nyata,
                dan berkontribusi dalam proyek yang bermanfaat!
              </p>

              {/* CTA BUTTON */}
              <div
                className="
                  pt-2 
                  w-full
                  flex
                  justify-center
                  md:justify-start
                  lg:justify-start
                "
              >
                <Link
                  href="/register"
                  className="
                    inline-flex
                    w-fit
                    px-6 md:px-8
                    py-2.5 md:py-3
                    bg-orange-400
                    text-gray-900
                    font-semibold
                    shadow-lg hover:shadow-xl
                    rounded-lg
                    hover:scale-105
                    transition-all duration-300
                    text-sm md:text-base
                  "
                >
                  Mari Berkontribusi
                </Link>
              </div>


              {/* ============================================ */}
              {/* ROLE PILLS - HORIZONTAL SCROLL DI MOBILE */}
              {/* ============================================ */}
              <div className="pt-3">
                {/* MOBILE: Horizontal Scroll (< 768px) */}
                <div className="md:hidden">
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                    {roles.map((role, index) => (
                      <span
                        key={index}
                        className="shrink-0 px-4 py-2 bg-transparent border-2 border-white/40 rounded-full text-xs font-medium text-white whitespace-nowrap snap-start"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TABLET & DESKTOP: Normal Flex (≥ 768px) */}
                <div className="hidden md:flex flex-wrap gap-3 lg:gap-4">
                  {roles.map((role, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-transparent border-2 border-white/40 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}