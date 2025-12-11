import Image from "next/image";

const HIGHLIGHT_COLOR = "text-cyan-500";

// BAGIAN: DEKORATIF SHAPES
const SHAPE_PATHS = {
    blobTopLeft: "/shapes/blob_hijau.svg",
    blobBottomRight: "/shapes/blob_orange.svg",
};

// BAGIAN: 3 CARDS PROGRAM
const programData = [
    {
        title: "Internal class",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor.",
        iconPath: "/shapes/ion_book-outline.svg",         // Gradient Orange/Yellow (Sangat mirip dengan Figma)
        gradientClass: "bg-gradient-to-br from-[#ff9a44] to-[#ffdb5c]",
    },
    {
        title: "Competition",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor.",
        iconPath: "/shapes/hugeicons_champion.svg",
        gradientClass: "bg-gradient-to-br from-[#ae5eef] to-[#ff99d4]",
    },
    {
        title: "Collaborative Partnership",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor.",
        iconPath: "/shapes/mdi_partnership-outline.svg",
        gradientClass: "bg-gradient-to-br from-[#25b5e3] to-[#25d3f3]",
    },
];

// BAGIAN: TIPE DATA PROGRAM (JANGAN DIHAPUS!)
type Program = (typeof programData)[0];
interface ProgramCardProps { data: Program; }

// BAGIAN: PROGRAM CARD
const ProgramCard: React.FC<ProgramCardProps> = ({ data }) => (
    <div className={`p-8 rounded-[20px] w-[330px] h-[300px] flex flex-col text-white
    cursor-pointer transition duration-450 ease-in hover:scale-108  ${data.gradientClass}`}>
        <div className="w-full text-center mb-4">
            <div className="w-15 h-15 mx-auto">
                <Image
                    src={data.iconPath}
                    alt={`${data.title}`}
                    width={48}
                    height={48}
                    className="filter brightness-0 invert"
                />
            </div>
        </div>
        <h3 className="text-xl text-center font-bold leading-snug">
            {data.title}
        </h3>
        <p className="mt-4 text-sm text-center font-normal leading-relaxed">
            {data.description}
        </p>
    </div>
);

// MAIN CONTENT!
export default function ProgramSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden py-32">

            <div className="absolute top-75 left-30 w-[170px] h-[180px] transform -translate-x-1/4 -translate-y-1/4 z-0">
                <Image
                    src={SHAPE_PATHS.blobTopLeft}
                    alt="Decorative Blob"
                    fill
                />
            </div>

            <div className="absolute bottom-25 right-30 w-[170px] h-[180px] transform translate-x-1/4 translate-y-1/4 z-0">
                <Image
                    src={SHAPE_PATHS.blobBottomRight}
                    alt="Decorative Blob"
                    fill
                />
            </div>

            <div className="max-w-[1200px]  mx-auto px-20 relative z-10">

                <header className="text-center mb-20">
                    <p className="text-4xl font-bold text-gray-800 mb-2">
                        Apa yang kami lakukan Sebagai <span className={HIGHLIGHT_COLOR}>Inkubator</span>
                    </p>

                    <h2 className="text-6xl font-extrabold text-gray-900 leading-tight">
                        Pembelajaran Tanpa Batas
                    </h2>
                </header>

                <div className="grid md:grid-cols-3 gap-8 ">
                    {programData.map((data, index) => (
                        <ProgramCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export { ProgramSection };