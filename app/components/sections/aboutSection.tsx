import Image from "next/image";

 
const DUMMY_ICON_BRIEFCASE = "/icons/briefcase.svg";
const DUMMY_ICON_GLOBAL = "/icons/globe.svg";
const DUMMY_ICON_PERSON = "/icons/personal.svg";
const DUMMY_ICON_CALENDAR = "/icons/calendar-event.svg";
const DUMMY_ICON_PERSONBADGE = "/icons/person-badge.svg";
const DUMMY_ICON_LAPTOP = "/icons/laptop.svg";

const TEXT_GREEN = "text-teal-600";  
 
const statsData = [
  { value: "10+", label: "Pengujian Proyek" },
  { value: "15", label: "Mitra di Seluruh Dunia" },
  { value: "100+", label: "Pengguna Tahunan" },
  { value: "35+", label: "Layanan di Industri" },
  { value: "60", label: "Anggota ditingkatkan" },
  { value: "30+", label: "Produk" },
];

 
export default function AboutStats() {
    return (
 
        <section className="relative w-full overflow-hidden bg-white">
 
            <div className="relative bg-zinc-200 pt-20 pb-40"> 
 
                <div 
                    className="absolute bottom-0 left-0 w-full bg-white h-24" 
                    style={{  
                        transform: 'skewY(-2deg)', 
                        transformOrigin: 'top right',
                        zIndex: 10,
                    }}>

                </div>
 
                <div className="max-w-6xl mx-auto px-4 relative z-20"> 
        
                    <div className="grid lg:grid-cols-5 gap-10 items-start">
 
                        <div className="lg:col-span-3 grid grid-cols-3 gap-5">
                            {statsData.map((stat, index) => ( 
                                <div 
                                    key={index} 
                                    className="col-span-3 sm:col-span-1 
                                               relative bg-white p-6 rounded-3xl border border-gray-200 shadow-md 
                                               h-40 flex flex-col justify-end"> 
                                    <div className="absolute top-0 right-0 p-4">
                                        {index === 0 && <Image src={DUMMY_ICON_BRIEFCASE} alt="Icon Briefcase" width={34} height={34} />}
                                        {index === 1 && <Image src={DUMMY_ICON_GLOBAL} alt="Icon Global" width={34} height={34} />}
                                        {index === 2 && <Image src={DUMMY_ICON_PERSON} alt="Icon Person" width={34} height={34} />}
                                        {index === 3 && <Image src={DUMMY_ICON_CALENDAR} alt="Icon Calendar" width={34} height={34} />}
                                        {index === 4 && <Image src={DUMMY_ICON_PERSONBADGE} alt="Icon Person Badge" width={34} height={34} />}
                                        {index === 5 && <Image src={DUMMY_ICON_LAPTOP} alt="Icon Laptop" width={34} height={34} />}
                                    </div> 
                                    <h3 className="text-3xl font-bold mb-5 text-cyan-600">{stat.value}</h3>
                                    <p className="mt-2 text-sm mb-5 text-gray-700">{stat.label}</p>
                                </div>
                            ))}
                        </div> 
                        <div className="lg:col-span-2 pt-6">
                            <p className="text-xs font-semibold uppercase text-cyan-600 mb-2">ABOUT RISTEK</p>
                            
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                Organisasi Mahasiswa IT yang <span className={TEXT_GREEN}> Mendorong Inovasi</span>
                            </h2>
                            
                            <p className="mt-4 w-md text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { AboutStats };