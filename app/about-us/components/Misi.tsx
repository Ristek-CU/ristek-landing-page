export default function MisiSection() {
  const misiData = [
    {
      title: "Kolaborasi",
      description:
        "Membangun kerjasama dengan berbagai pihak, termasuk dosen, komunitas, dan industri, untuk menciptakan proyek penelitian yang relevan dan aplikatif.",
    },
    {
      title: "Pendidikan & Pelatihan",
      description:
        "Menyelenggarakan seminar, workshop, dan pelatihan untuk meningkatkan kapasitas mahasiswa dalam bidang teknologi.",
    },
    {
      title: "Inovasi Teknologi",
      description:
        "Mengembangkan dan mempromosikan inovasi teknologi yang dapat digunakan untuk memecahkan masalah di lingkungan kampus dan masyarakat.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6"> 
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500">
            Misi Ristek
          </h2>
        </div> 
        
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-5 sm:gap-6 md:gap-4 lg:gap-10
          justify-items-center
        ">
          {misiData.map((item, index) => (
            <div
              key={index}
              className=" 
                w-full 
                max-w-md 
                md:max-w-none
                min-h-60 
                sm:min-h-[260px] 
                md:min-h-[280px] 
                lg:min-h-[350px]
                bg-[url('/about-page-shapes/bg-misi.svg')]
                bg-cover bg-center bg-no-repeat
                rounded-2xl
                p-5 
                sm:p-6 
                md:p-5
                lg:p-8
                flex flex-col justify-center items-center
                shadow-sm
                text-center 
              "
            >
              <h3 className="
                text-base 
                sm:text-lg 
                md:text-base
                lg:text-2xl 
                font-bold 
                text-gray-900 
                mb-2 
                sm:mb-3 
                md:mb-2
                lg:mb-4
              ">
                {item.title}
              </h3>

              <p className="
                text-gray-800 
                text-xs 
                sm:text-sm 
                md:text-xs
                lg:text-lg 
                leading-relaxed
              ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}