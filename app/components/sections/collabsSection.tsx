import Image from "next/image";
import Link from 'next/link';


// BAGIAN: SPECIAL COLORS
const TEXT_BLUE = "text-[#00c6e8]";
const BG_COLOR = "bg-gray-200";
const CARD_BG = "bg-[#009FC4]";
// const TEXT_COLOR_ACCENT = "text-[#00A1B2]"; 
const TEXT_COLOR_GREEN = "text-teal-600";

// BAGIAN: PATH LOGO
// const partnershipLogos = [
//     { name: "Notion Pro", iconPath: "/logos/notion.svg", description: "Notion Pro" },
//     { name: "Sketch License", iconPath: "/logos/sketch.svg", description: "Sketch Full License" },
//     { name: "Spotify Account", iconPath: "/logos/spotify.svg", description: "Spotify Pro Account" },
//     { name: "Zoom Account", iconPath: "/logos/zoom.svg", description: "Zoom Pro Account" },
//     { name: "Netflix Account", iconPath: "/logos/netflix.svg", description: "Netflix Pro Account" },
//     { name: "Framer Pro", iconPath: "/logos/framer.svg", description: "Framer Pro" },
//     { name: "AWS Credit", iconPath: "/logos/aws.svg", description: "AWS Credit" },
//     { name: "Stripe Account", iconPath: "/logos/stripe.svg", description: "Stripe Account" },
//     { name: "Miro Enterprise", iconPath: "/logos/miro.svg", description: "Miro Enterprise" },
// ];

// BAGIAN: DATA EVENT
const eventData = {
    title: "Pelatihan dasar UI/UX dengan Figma.",
    date: "Januari 2024",
    imagePath: "/images/collabFoto.png",
    tag: "Workshop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Lihat semua event",
};

// BAGIAN: TIPE DATA PROGRAM (JANGAN DIHAPUS!)
// type Program = (typeof partnershipLogos)[0];
// interface LogoCardProps{data: Program};

// BAGIAN: KKOMPONEN KOLABORASI LOGO
// const LogoCard: React.FC<LogoCardProps> = ({ data }) => (
//     <div className="bg-dark p-4 rounded-xl shadow-md flex flex-col items-center justify-center h-32 transition duration-300 hover:shadow-lg">
//         <div className="w-12 h-12 mb-1"> 
//             <Image src={data.iconPath} alt={`${data.name} Icon`} width={50}height={50} className="object-contain" />
//         </div>
//         <p className="text-xs text-gray-800 font-semibold text-center leading-snug">{data.description}</p>
//     </div>
// );

// BAGIAN: KOMPONEN EVENT CARD
const EventCard: React.FC = () => (
    <div className="relative mx-auto max-w-7xl pt-[35px]">
        {/* 2. FOTO EVENT */}
        {/* Ukuran foto 275x278 dari figma */}
        <div className="absolute w-[275px] h-[278px] rounded-2xl shadow-xl z-20 overflow-hidden"
            style={{ left: '70px', top: '-35px' }}>
            <Image src={eventData.imagePath} alt="Workshop Photo" fill className="object-cover" />
        </div>

        <div className={`relative ${CARD_BG} rounded-[2.5rem] flex shadow-2xl overflow-hidden max-w-5xl mx-auto`}
            style={{ height: '320px', maxWidth: '1150px' }}>

            <div className="absolute inset-0 z-0 opacity-100">
                {/* LINGKARAN DI KIRI BAWAH */}
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 overflow-visible inset-x-auto"
                    style={{ backgroundImage: 'url(/shapes/circle-shadow.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'bottom left' }}>
                </div>

                {/* GAMBAR MOTIF DI KANAN POJOK KANAN BAGIAN CARD (STRUGGLE) */}
                <div className="absolute top-0 right-0 w-1/3 h-1/2 overflow-hidden">
                    <div className="absolute inset-0 bg-[length:10px_10px] bg-repeat"
                        style={{ backgroundImage: 'url(/jumbotron/square-bg2.png (1).png)', backgroundColor: '#009FC4' }}>
                    </div>
                </div>
            </div>

            {/* CARD */}
            <div className="w-full pl-[380px] pr-8 py-6 flex flex-col justify-between text-dark z-10">

                <div>
                    <span className="inline-block mt-3 px-3 py-1 text-xl font-500 bg-cyan-500 rounded-2xl text-white">
                        {eventData.tag}
                    </span>
                    <p className="text-4xl font-semibold mb-2 leading-tight">{eventData.title}</p>
                    <span className="mr-2">
                        <Image src="/shapes/calendar.svg" alt="Calendar Icon" width={25} height={25} className="inline-block" />
                    </span> {eventData.date}

                    <div className="text-sm font-light ">
                        <p className="mt-4 text-gray-100">{eventData.description}</p>
                    </div>
                </div>

                <div className="flex space-x-2 absolute bottom-15 right-70"> {/* ini biar geser ke kiri dikit gmna settingnya */}
                    {/* Navigasi Button Kiri (Next) */}
                    <Link href="#left">
                        <Image src="/shapes/arah-kiir.svg" alt="Left Arrow Icon" width={39} height={39} />
                    </Link>
                    {/* Navigasi Button Kanan (Next) */}
                    <Link href="#next">
                        <Image src="/shapes/arah-kanan.svg" alt="Right Arrow Icon" width={39} height={39} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

// MAIN CONTENT!
export default function CollabsSection() {

    const cutHeight = '50px';

    return (

        <section className="relative w-full overflow-hidden pt-24 pb-20">

            <div className={`absolute inset-0 bg-white z-0`}>
                <div className={`absolute inset-0 ${BG_COLOR} z-0`}
                    style={{
                        clipPath: `polygon(0 ${cutHeight}, 100% 0, 100% calc(105% - ${cutHeight}), 0% 100%)`,
                    }}>
                </div>
            </div>

            <div className="relative max-w-[1280px] mx-auto px-8 z-10">

                {/* <header className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                        Kolaborasi dengan <span className={TEXT_BLUE}>Industri</span> untuk Pengalaman <span className={TEXT_BLUE}>Belajar Lebih Nyata</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </header> */}

                {/* <div className="grid grid-cols-6 gap-x-4 gap-y-8 justify-center max-w-5xl mx-auto">
                    {partnershipLogos.slice(0, 6).map((data, index) => (
                        <div key={index} className="col-span-1">
                            <LogoCard data={data} />
                        </div>
                    ))}
                    
                    <div className="col-span-6 flex justify-center space-x-4">
                        {partnershipLogos.slice(6, 9).map((data, index) => (
                            <div key={index} className="w-1/6">
                                <LogoCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
                 */}
                <div className="mt-11">
                    <header className="text-center mb-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                            Kenali <span className={TEXT_BLUE}>acara kami</span> dan <span className={TEXT_COLOR_GREEN}>berpartisipasilah</span> di dalamnya
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </header>

                    <div className="flex flex-col items-center">
                        <EventCard />
                        <button className={`mt-8 px-8 py-3 text-dark font-semibold rounded-2xl shadow-lg transition duration-300`}
                            style={{ backgroundImage: 'linear-gradient(to right, #00c6e8, #ffae00)' }}>
                            {eventData.buttonText}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}