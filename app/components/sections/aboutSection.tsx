import Image from "next/image"; 

const DUMMY_ICON_BRIEFCASE = "/icons/briefcase.svg";
const DUMMY_ICON_GLOBAL = "/icons/globe.svg";
const DUMMY_ICON_PERSON = "/icons/personal.svg";
const DUMMY_ICON_CALENDAR = "/icons/calendar-event.svg";
const DUMMY_ICON_PERSONBADGE = "/icons/person-badge.svg";
const DUMMY_ICON_LAPTOP = "/icons/laptop.svg";
 
const TEXT_GREEN = "text-teal-600";
 
const statsData = [
  { value: "10+", label: "Penilaian Proyek", icon: DUMMY_ICON_BRIEFCASE },
  { value: "15", label: "Mitra di seluruh dunia", icon: DUMMY_ICON_GLOBAL },
  { value: "100+", label: "Pengguna Tahun ini", icon: DUMMY_ICON_PERSON },
  { value: "35Y", label: "Layanan di industri ini", icon: DUMMY_ICON_CALENDAR },
  { value: "60", label: "Anggota ditingkatkan", icon: DUMMY_ICON_PERSONBADGE },
  { value: "30+", label: "Produk", icon: DUMMY_ICON_LAPTOP },
];
 interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div className="relative bg-white p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl
    border border-gray-200 shadow-md h-32 sm:h-36 md:h-40 flex flex-col
    justify-end transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
      <Image src={icon} alt={`${label} icon`} width={28} height={28} className="sm:w-8 sm:h-8 md:w-[34px] md:h-[34px] opacity-80"/>
    </div> 
    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 md:mb-5 text-cyan-600">
      {value}
    </h3> 
    <p className="text-xs sm:text-sm text-gray-700 leading-tight">
      {label}
    </p>
  </div>
); 
export default function AboutStats() {
  return (
    <section className="relative w-full overflow-hidden bg-white"> 
      <div className="relative bg-gray-200 sm:bg-gray-200 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40">
 
        <div 
          className="absolute bottom-0 left-0 w-full bg-white h-16 sm:h-20 md:h-24" 
          style={{  
            transform: 'skewY(-4deg)', 
            transformOrigin: 'top right',
            zIndex: 10,
          }}/>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-start">
            <div className="w-full lg:col-span-2 lg:order-2 order-1">
              <p className="text-xs font-semibold uppercase text-cyan-600 mb-2 tracking-wide">
                ABOUT RISTEK
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900 leading-tight">
                Organisasi Mahasiswa IT yang{" "}
                <span className={TEXT_GREEN}>Mendorong Inovasi</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div className="w-full lg:col-span-3 lg:order-1 order-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {statsData.map((stat, index) => (
                  <StatCard key={index} value={stat.value} label={stat.label} icon={stat.icon}/>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutStats };