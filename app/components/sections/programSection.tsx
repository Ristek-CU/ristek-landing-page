import Image from "next/image";

const HIGHLIGHT_COLOR = "text-cyan-500"; 
 
const SHAPE_PATHS = {
    blobTopLeft: "/shapes/blob_hijau.svg",  
    blobBottomRight: "/shapes/blob_orange.svg",
};
 
const programData = [
    {
        title: "Internal class",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        iconPath: "/shapes/ion_book-outline.svg",
        svgCardPath: "/shapes/rectangle-blue.svg", 
    },
    {
        title: "Competition",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        iconPath: "/shapes/hugeicons_champion.svg",
        svgCardPath: "/shapes/rectangle-blue.svg",  
    },
    {
        title: "Collaborative Partnership",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        iconPath: "/shapes/mdi_partnership-outline.svg",
        svgCardPath: "/shapes/rectangle-blue.svg", 
    },
];

// BAGIAN: TIPE DATA PROGRAM
type Program = (typeof programData)[0];
interface ProgramCardProps { data: Program; }
 

const ProgramCard: React.FC<ProgramCardProps> = ({ data }) => (
    <div className="relative
        w-full max-w-[300px] mx-auto h-[280px] sm:h-[260px] md:h-[280px]
        lg:h-[300px] group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
 
        <div className="absolute  inset-0 w-full h-full">
            <Image 
                src={data.svgCardPath} 
                alt={`${data.title} background`}
                fill
                className="object-cover rounded-[20px] md:rounded-3xl"
                priority
            />
        </div>
 
        <div className="relative z-10 p-6 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col text-white">
     
            <div className="w-full text-center mb-3 sm:mb-3 md:mb-4"> 
                <div className="w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto"> 
                    <Image 
                        src={data.iconPath} 
                        alt={`${data.title} icon`} 
                        width={48} 
                        height={48}
                        className="filter brightness-0 invert w-full h-full" 
                    />
                </div>
            </div>
 
            <h3 className="text-lg sm:text-base md:text-lg lg:text-xl text-center font-bold leading-snug mb-2">
                {data.title}
            </h3>
 
            <p className="mt-2 text-xs sm:text-xs md:text-sm lg:text-sm text-center font-normal leading-relaxed opacity-90"> 
                {data.description}
            </p>
        </div>
    </div>
);

// MAIN CONTENT!
export default function ProgramSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
             
            <div className="hidden sm:block absolute top-32 sm:top-40 md:top-52 lg:top-60 left-4 sm:left-6 md:left-10 lg:left-15 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[180px] z-0">
                <Image
                    src={SHAPE_PATHS.blobTopLeft}
                    alt="Decorative Blob"
                    fill
                    className="object-contain opacity-80"
                />
            </div>
 
            <div className="hidden sm:block absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-5 md:right-6 lg:right-8 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[180px] z-0">
                <Image
                    src={SHAPE_PATHS.blobBottomRight}
                    alt="Decorative Blob"
                    fill
                    className="object-contain opacity-80"
                />
            </div>
 
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        
                <header className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 px-4">
                        Apa yang kami lakukan Sebagai <span className={HIGHLIGHT_COLOR}>Inkubator</span>
                    </p>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
                        Pembelajaran Tanpa Batas
                    </h2>
                </header>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6 lg:gap-8 justify-items-center">
                    {programData.map((data, index) => (
                        <ProgramCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { ProgramSection };