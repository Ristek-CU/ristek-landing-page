import Image from "next/image";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <section className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-linear-to-br from-blue-50 via-white to-teal-50 absolute inset-0 overflow-hidden">
            <Image
              src="/events-page-shapes/events-page.svg"
              alt="Events Background Shape"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
            Bersama, Kita Bangun Masa
            <br />
            Depan Teknologi!
          </h1>

          <p className="text-xs md:text-sm lg:text-lg text-white/90 max-w-xl lg:max-w-2xl leading-relaxed px-4">
            Jelajahi berbagai event teknologi terkini yang akan memperluas wawasan,
            keterampilan, dan jaringan profesional Anda
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 mb-8 md:mb-12 pb-4 overflow-x-auto scrollbar-hide">
            {[
              "All",
              "Workshop",
              "Company Visit",
              "Competition",
              "Learning Community",
            ].map((item, index) => (
              <button
                key={index}
                className={`
                  relative pb-3 text-xs md:text-sm font-medium whitespace-nowrap
                  ${item === "All" ? "text-cyan-600" : "text-gray-500"}
                  hover:text-cyan-600 transition-colors
                  after:absolute after:left-0 after:-bottom-px
                  after:h-0.5 after:bg-cyan-600
                  after:transition-all after:duration-300
                  ${item === "All" ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-2">
              Acara Mendatang
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Temukan acara dan program terbaru kami
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 ">
            {/* CARD 1 */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-odd.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8"> 
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[275px] lg:mx-20">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl lg:rounded-3xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                    Workshop
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    Pelatihan dasar UI/UX dengan Figma.
                  </h3>
                  <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                    </svg>
                    <span>Januari 2024</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-even.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                <div className="lg:col-span-4 lg:order-last flex justify-center lg:justify-end">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[265px] lg:mx-5">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                    Competition
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    Lomba website untuk inovasi teknologi.
                  </h3>
                  <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                    </svg>
                    <span>Mei 2024</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-odd.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[275px] lg:mx-20">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl lg:rounded-3xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                    Company Visit
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    Pelatihan Website dengan Figma.
                  </h3>
                  <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                    </svg>
                    <span>Juni 2024</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4  */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-even.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                <div className="lg:col-span-4 lg:order-last flex justify-center lg:justify-end">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[265px] lg:mx-5">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                    Learning Community
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    Diskusi tren terbaru dalam AI.
                  </h3>
                  <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                    </svg>
                    <span>November 2024</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-odd.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[275px] lg:mx-20">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl lg:rounded-3xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                  <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                    Workshop
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                    Belajar membuat aplikasi dengan Flutter.
                  </h3>
                  <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                    </svg>
                    <span>Desember 2024</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image
                  src="/events-page-shapes/card-events-even.svg"
                  alt="Card Background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                <div className="lg:col-span-4 lg:order-last flex justify-center lg:justify-end">
                  <div className="relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[265px] lg:mx-5">
                    <Image
                      src="/events-page-shapes/mask-group.svg"
                      alt="Events Page Decoration"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>

              <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                Competition
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                Lomba desain UI/UX untuk Smart City.
              </h3>
              <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                  <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white"/>
                </svg>
                <span>Januari 2024</span>
              </div>
              <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <Footer />
</>
)
}