import Image from "next/image";

// BAGIAN: PATH GALERI 
const IMAGES = {
    img1: "/images/jumbotron/hero-img-1.png", 
    img2: "/images/jumbotron/hero-img-1.png", 
    img3: "/images/jumbotron/hero-img-1.png", 
    img4: "/images/jumbotron/hero-img-1.png", 
    img5: "/images/jumbotron/hero-img-1.png", 
    img6: "/images/jumbotron/hero-img-1.png", 
};

// BAGIAN: DEKORATIF SHAPES
const SHAPE_PATHS = {
    cornerTopRight: "/shapes/hero-top-right.svg",
    cornerBottomLeft: "/shapes/hero-bottom-left.svg",
    tealBlob: "/shapes/blob_hijau.svg",              
    orangeBlob: "/shapes/blob_orange.svg",           
};

// BAGIAN: SPECIAL TEXT COLOR 
const TEXT_GREEN = "text-teal-600";
const TEXT_CYAN = "text-cyan-600";

// MAIN CONTENT!
export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden py-24 md:py-32 bg-white">
 
            {/* 1. DEKORASI BIRU (Kanan Atas)*/}
            <div className="absolute -top-0 -right-0 w-[121] h-[121]  ">
                <Image
                    src={SHAPE_PATHS.cornerTopRight}
                    alt="Decorative Corner Shape Top Right"
                    layout="fill"
                    className="opacity-90"
                />
            </div>
            
            {/* 2. DEKORASI BIRU  (Kiri Bawah) */}
            <div className="absolute bottom-0 left-0 w-[121px] h-[121px]">
                <Image
                    src={SHAPE_PATHS.cornerBottomLeft}
                    alt="Decorative Corner Shape Bottom Left"
                    layout="fill" 
                    className="opacity-90"
                />
            </div>

            {/* 3. KONTEN UTAMA */}
            <div className="relative max-w-[1440px] mx-auto px-8 z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* KOLOM KIRI: TEKS */}
                    <div className="lg:pr-10">
                        <p className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Menjadi</p>
                        <h1 className={`text-4xl md:text-5xl font-bold ${TEXT_CYAN} leading-tight`}>Pusat Inovasi</h1>
                        <h1 className={`text-4xl md:text-5xl font-bold ${TEXT_GREEN} leading-tight mb-6`}> <span className="text-gray-900">dan</span> Penelitian</h1>
                        <p className="mt-4 text-gray-600 max-w-lg text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* KOLOM KANAN: GAMBAR DAN DEKORASI SHAPE */}
                    <div className="relative h-full min-h-[500px] flex items-center justify-center">
                        
                        {/* DEKORASI SHAPE GREEN --- */}
                        <div className="absolute -top-10 right-105 w-70 h-70">
                            <Image
                                src={SHAPE_PATHS.tealBlob}
                                alt="Decorative Teal Blob"
                                layout="fill" 
                            />
                        </div>
                        
                        {/* DEKORASI SHAPE ORANYE */}
                        <div className="absolute -top-[-190px] left-90 w-82 h-60">
                            <Image
                                src={SHAPE_PATHS.orangeBlob}
                                alt="Decorative Orange Blob"
                                layout="fill" 
                            />
                        </div>

                        {/* GALERI GAMBAR */}
                        <div className="relative grid grid-cols-5 auto-rows-min gap-2 w-full max-w-[700px] p-0 z-10">                            
                            {/* BARIS KE-1*/}
                            <div className="col-span-3 h-[127px]">
                                <Image src={IMAGES.img1} alt="Foto Grup 1" width={324} height={127} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>
                            <div className="col-span-2 h-[127px]">
                                <Image src={IMAGES.img2} alt="Foto Presentasi" width={230} height={127} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>

                            {/* BARIS KE-2 */}
                            <div className="col-span-2 h-[78px]">
                                <Image src={IMAGES.img3} alt="Foto Grup 3" width={257} height={78} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>
                            <div className="col-span-3 row-span-2 h-[171px]">
                                <Image src={IMAGES.img6} alt="Foto Grup Besar" width={299} height={171} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>

                            {/* BARIS KE-3 */}
                            <div className="col-span-1 h-[81px]">
                                <Image src={IMAGES.img4} alt="Foto Kecil 1" width={123} height={81} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>
                            <div className="col-span-1 h-[81px]">
                                <Image src={IMAGES.img5} alt="Foto Kecil 2" width={123} height={81} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>
                            <div className="col-span-1 h-[90px]">
                                {/* JANGAN DIHAPUS > UNTUK GAP */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}