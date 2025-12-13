import Image from "next/image";
import Link from 'next/link';

const COLORS = {
    primaryCyan: "#009FC4",
    darkCyan: "#00576C", 
    accentCyan: "#00c6e8",
    accentTeal: "#14b8a6",
    buttonCyan: "#009FC4",
}; 
const eventData = {
    title: "Pelatihan dasar UI/UX dengan Figma.",
    date: "Januari 2024",
    imagePath: "/images/collabFoto.png",
    tag: "Workshop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Lihat semua event",
}; 
const EventCard: React.FC = () => (
    <div className="relative mx-auto w-full max-w-7xl"> 
        <div className="block sm:hidden px-4"> 
            <div className="flex justify-center mb-[-95px]">
                <div className="relative w-[220px] h-[220px] z-10 overflow-hidden rounded-[20px] shadow-2xl">
                    <Image 
                        src={eventData.imagePath} 
                        alt="Workshop Photo" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div> 
            <div 
                className="relative rounded-[20px] shadow-2xl overflow-hidden pt-[105px]"
                style={{
                    background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.primaryCyan} 80%, ${COLORS.darkCyan} 100%)`
                }} >
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-50"
                        style={{ backgroundImage: 'url(/shapes/circle-shadow.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'bottom left' 
                        }}
                    />
                    <div className="absolute top-0 right-0 w-1/3 h-1/2 overflow-hidden opacity-15">
                        <div 
                            className="absolute inset-0"
                            style={{ backgroundImage: 'url(/jumbotron/square-bg2.png (1).png)', backgroundSize: 'cover',backgroundRepeat: 'repeat'
                            }}
                        />
                    </div>
                </div>
                <div className="relative z-10 px-8 pb-10">
                    <div className="flex justify-start mb-4">
                        <span 
                            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full text-white"
                            style={{ backgroundColor: COLORS.accentCyan }}>
                            {eventData.tag}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight text-white text-left">
                        {eventData.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-white/90 mb-4">
                        <Image src="/shapes/calendar.svg" alt="Calendar Icon" width={18} height={18}/>
                        <span className="text-sm">{eventData.date}</span>
                    </div>
                    <p className="text-sm text-white/85 leading-relaxed mb-6 text-left">
                        {eventData.description}
                    </p>

                    <div className="flex gap-3 justify-center pt-2">
                        <Link href="#prev" className="hover:scale-110 transition-transform">
                            <Image src="/shapes/arah-kiir.svg" alt="Previous" width={44} height={44}/>
                        </Link>
                        <Link href="#next" className="hover:scale-110 transition-transform">
                            <Image src="/shapes/arah-kanan.svg" alt="Next" width={44} height={44}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden sm:block relative">
            <div className="
                absolute z-20 overflow-hidden rounded-2xl shadow-xl
                w-[200px] h-[200px]
                md:w-60 md:h-[243px]
                lg:w-[275px] lg:h-[278px]
                left-[30px] -top-[50px]
                md:left-[50px] md:-top-10
                lg:left-[70px] lg:-top-[35px]"> 
                <Image  src={eventData.imagePath}  alt="Workshop Photo"  fill className="object-cover"
                />
            </div>

            <div 
                className="
                    relative rounded-3xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden 
                    mx-auto mt-[35px]"
                style={{
                    maxWidth: '1150px',
                    background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.primaryCyan} 80%, ${COLORS.darkCyan} 100%)`
                }}
            > 
                {/* DEKORASI BACKGROUND - TABLET+ */}
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute bottom-0 left-0 w-1/3 h-1/3"
                        style={{ 
                            backgroundImage: 'url(/shapes/circle-shadow.svg)', 
                            backgroundRepeat: 'no-repeat', 
                            backgroundSize: 'contain', 
                            backgroundPosition: 'bottom left' 
                        }}
                    />
                    <div className="absolute top-0 right-0 w-1/3 h-1/2 overflow-hidden opacity-20">
                        <div 
                            className="absolute inset-0"
                            style={{ 
                                backgroundImage: 'url(/jumbotron/square-bg2.png (1).png)', 
                                backgroundSize: 'cover',
                                backgroundRepeat: 'repeat'
                            }}
                        />
                    </div>
                </div>

                {/* KONTEN CARD - TABLET+ */}
                <div className="
                    w-full flex flex-col justify-between z-10
                    px-6 py-6 md:px-8
                    pl-[230px] md:pl-[310px] lg:pl-[380px]
                    pr-6 md:pr-8 lg:pr-8
                    min-h-[300px] md:min-h-80
                ">
                    <div>
                        {/* TAG WORKSHOP */}
                        <span 
                            className="inline-block px-4 py-1 text-base font-medium rounded-full text-white mt-3"
                            style={{ backgroundColor: COLORS.accentCyan }}
                        >
                            {eventData.tag}
                        </span>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mt-3 mb-2 leading-tight text-white">
                            {eventData.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-white/90 mb-4">
                            <Image src="/shapes/calendar.svg" alt="Calendar Icon" width={20} 
                                height={20}
                            />
                            <span className="text-sm">{eventData.date}</span>
                        </div>
                        
                        <p className="text-sm text-white/80 leading-relaxed pr-12">
                            {eventData.description}
                        </p>
                    </div>                   
                    <div className="absolute bottom-6 right-6 md:right-8 flex gap-3">
                        <Link 
                            href="#prev"
                            className="hover:scale-110 transition-transform" >
                            <Image src="/shapes/arah-kiir.svg" alt="Previous" width={40} height={40}/>
                        </Link>
                        <Link href="#next" className="hover:scale-110 transition-transform">
                            <Image src="/shapes/arah-kanan.svg" alt="Next" width={40} height={40}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
 
export default function CollabsSection() {
    const cutHeight = '50px'; 
    
    return (
        <section className="
            relative w-full overflow-hidden 
            pt-16 sm:pt-20 md:pt-24 lg:pt-24 
            pb-12 sm:pb-16 md:pb-20 lg:pb-20"> 
            <div className="absolute inset-0 bg-white z-0">    
                <div 
                    className="absolute inset-0 bg-gray-200 z-0"
                    style={{
                        clipPath: `polygon(0 ${cutHeight}, 100% 0, 100% calc(105% - ${cutHeight}), 0% 100%)`,
                    }}
                />
            </div>
            
            <div className="
                max-w-[1500px] mx-auto 
                px-5 sm:px-8 md:px-12 lg:px-20 
                relative z-10
            "> 
                <header className="
                    text-center 
                    mb-12 sm:mb-16 md:mb-12 lg:mb-12
                    max-w-3xl mx-auto
                    px-4
                ">
                    <h2 className="
                        text-2xl sm:text-3xl md:text-4xl lg:text-4xl
                        font-bold text-gray-900 leading-snug
                    ">
                        Kenali <span style={{ color: COLORS.accentCyan }}>acara kami</span> dan{' '}
                        <span style={{ color: COLORS.accentTeal }}>berpartisipasilah</span> di dalamnya
                    </h2>
                    <p className="font-medium mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                </header>
 
                <div className="flex flex-col items-center">
                    <EventCard />                        
                     
                    <button 
                        className="
                            mt-8 sm:mt-10 
                            px-6 sm:px-8 
                            py-2.5 sm:py-3 
                            font-bold text-white 
                            rounded-lg sm:rounded-xl 
                            shadow-lg 
                            transition-transform hover:scale-105 duration-300
                            text-sm sm:text-base
                        "
                        style={{
                            background: `linear-gradient(90deg, ${COLORS.accentCyan} 50%, ${COLORS.buttonCyan} 100%)`
                        }}
                    >
                        {eventData.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}