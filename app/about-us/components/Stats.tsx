import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { number: "113+", label: "Semua Pencapaian" },
    { number: "50+", label: "Proyek Teknologi" },
    { number: "13+", label: "Partisipasi Kompetisi" },
    { number: "20+", label: "Pencapaian Riset" },
    { number: "30+", label: "Program RISTEK" },
  ];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
         
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="
            text-xl md:text-2xl lg:text-4xl 
            font-bold 
            text-gray-900 
            mb-2 md:mb-3
          ">
            <span className="text-cyan-500">Pencapaian RISTEK</span> dalam dunia{" "}
            <span className="text-[#009F80]">riset dan teknologi.</span>
          </h2>
          <p className="
            text-gray-600 
            text-xs md:text-sm lg:text-lg 
            max-w-2xl md:max-w-3xl 
            mx-auto
          ">
            Dari proyek hingga kompetisi, kami terus berkembang dan memberikan kontribusi nyata.
          </p>
        </div>
 
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
           
          <div className="absolute inset-0">
            <Image
              src="/about-page-shapes/bg-stats.svg"
              alt="Stats Background"
              fill
              className="object-cover"
              priority
            />
          </div>
 
          <div className="relative z-10 px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-16">
             
            <div className="block md:hidden"> 
              <div className="mb-3">
                <div className="
                  bg-white 
                  rounded-xl 
                  p-4
                  text-center 
                  hover:shadow-2xl hover:scale-105 
                  transition-all duration-300
                ">
                  <h3 className="text-2xl font-bold text-cyan-500 mb-1">
                    {stats[0].number}
                  </h3>
                  <p className="text-cyan-500 text-[10px] font-semibold leading-tight">
                    {stats[0].label}
                  </p>
                </div>
              </div>
 
              <div className="grid grid-cols-2 gap-3">
                {stats.slice(1).map((stat, index) => (
                  <div
                    key={index + 1}
                    className="
                      bg-white 
                      rounded-xl 
                      p-4
                      text-center 
                      hover:shadow-2xl hover:scale-105 
                      transition-all duration-300
                    "
                  >
                    <h3 className="text-2xl font-bold text-cyan-500 mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-cyan-500 text-[10px] font-semibold leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="hidden md:grid md:grid-cols-5 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    bg-white 
                    rounded-2xl 
                    p-5 lg:p-8
                    text-center 
                    hover:shadow-2xl hover:scale-105 
                    transition-all duration-300
                  "
                >
                  <h3 className="text-3xl lg:text-5xl font-bold text-cyan-500 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-cyan-500 text-xs lg:text-sm font-semibold leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}