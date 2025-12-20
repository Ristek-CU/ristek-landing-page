"use client";

import Image from "next/image";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { useState, useMemo } from "react";

// Event data
const eventsData = [
  {
    id: 1,
    category: "Workshop",
    title: "Pelatihan dasar UI/UX dengan Figma.",
    date: "Januari 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  },
  {
    id: 2,
    category: "Competition",
    title: "Lomba website untuk inovasi teknologi.",
    date: "Mei 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  },
  {
    id: 3,
    category: "Company Visit",
    title: "Kunjungan ke kantor startup terkemuka.",
    date: "Juni 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  },
  {
    id: 4,
    category: "Learning Community",
    title: "Diskusi tren terbaru dalam AI.",
    date: "November 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  },
  {
    id: 5,
    category: "Workshop",
    title: "Belajar membuat aplikasi dengan Flutter.",
    date: "Desember 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  },
  {
    id: 6,
    category: "Competition",
    title: "Lomba desain UI/UX untuk Smart City.",
    date: "Januari 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/events-page-shapes/mask-group.svg"
  }
];

const categories = ["All", "Workshop", "Company Visit", "Competition", "Learning Community"];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return eventsData;
    return eventsData.filter(event => event.category === activeFilter);
  }, [activeFilter]);

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
          {/* Interactive Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 mb-8 md:mb-12 pb-4 overflow-x-auto scrollbar-hide">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(item)}
                className={`
                  relative pb-3 text-xs md:text-sm font-medium whitespace-nowrap
                  transition-all duration-300 ease-out
                  ${activeFilter === item
                    ? "text-cyan-600 scale-105"
                    : "text-gray-500 hover:text-cyan-600"
                  }
                  after:absolute after:left-0 after:-bottom-px
                  after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-teal-500
                  after:transition-all after:duration-300 after:ease-out
                  ${activeFilter === item
                    ? "after:w-full after:opacity-100"
                    : "after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100"
                  }
                `}
              >
                {item}
                {activeFilter === item && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                )}
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

          {/* Events Counter Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full border border-cyan-200">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Menampilkan <span className="text-cyan-600 font-bold">{filteredEvents.length}</span> event
                {activeFilter !== "All" && (
                  <span className="text-gray-500"> untuk kategori <span className="text-cyan-600">{activeFilter}</span></span>
                )}
              </span>
            </div>
          </div>

          {/* Dynamic Events Cards */}
          <div className="space-y-6 md:space-y-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">Tidak ada event untuk kategori ini</p>
              </div>
            ) : (
              filteredEvents.map((event, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={event.id}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group
                      transform transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                  >
                    {/* Background */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={isEven ? "/events-page-shapes/card-events-even.svg" : "/events-page-shapes/card-events-odd.svg"}
                        alt="Card Background"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    {/* Overlay Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center p-5 md:p-6 lg:p-8">
                      {/* Image */}
                      <div className={`lg:col-span-4 flex justify-center ${isEven ? 'lg:order-last lg:justify-end' : 'lg:justify-start'}`}>
                        <div className={`relative w-[200px] h-[200px] md:w-60 md:h-60 lg:w-[275px] lg:h-[275px] ${isEven ? 'lg:mx-5' : 'lg:mx-20'} 
                          transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1`}>
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover rounded-2xl lg:rounded-3xl shadow-lg"
                            priority
                          />
                          {/* Image Overlay */}
                          <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="lg:col-span-8 text-white text-left md:text-center lg:text-left">
                        {/* Category Badge */}
                        <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 h-8 md:h-10 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4
                          transform transition-all duration-300 group-hover:bg-white/30 group-hover:scale-105">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          {event.category}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3
                          transform transition-all duration-300 group-hover:translate-x-1">
                          {event.title}
                        </h3>

                        {/* Date */}
                        <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 text-xs md:text-sm mb-3 md:mb-4 opacity-90">
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                            <path d="M6.6853 1.66675C6.22609 1.66675 5.8534 2.04008 5.8534 2.50008C4.01406 2.50008 2.5 3.99425 2.5 5.83341V7.50008L2.52579 14.1667C2.52579 16.0051 4.01573 17.5001 5.8534 17.5001H14.1724C16.0101 17.5001 17.5 16.0076 17.5 14.1667L17.4742 7.50008V5.83341C17.4742 3.99091 16.0084 2.50008 14.1724 2.50008C14.1724 2.04008 13.8005 1.66675 13.3405 1.66675C12.8813 1.66675 12.5086 2.04008 12.5086 2.50008H7.5172C7.5172 2.04008 7.14534 1.66675 6.6853 1.66675ZM5.8534 4.16675C5.8534 4.62675 6.22609 5.00008 6.6853 5.00008C7.14534 5.00008 7.5172 4.62675 7.5172 4.16675H12.5086C12.5086 4.62675 12.8813 5.00008 13.3405 5.00008C13.8005 5.00008 14.1724 4.62675 14.1724 4.16675C15.085 4.16675 15.8104 4.90675 15.8104 5.83341V6.66675C14.2098 6.66675 5.76438 6.66675 4.1638 6.66675V5.83341C4.1638 4.91925 4.92832 4.16675 5.8534 4.16675ZM4.1638 8.33341C5.76438 8.33341 14.2098 8.33341 15.8104 8.33341L15.8362 14.1667C15.8362 15.0842 15.0916 15.8334 14.1724 15.8334H5.8534C4.93498 15.8334 4.18959 15.0876 4.18959 14.1667L4.1638 8.33341Z" fill="white" />
                          </svg>
                          <span>{event.date}</span>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                          {event.description}
                        </p>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full
                          transition-all duration-300 hover:bg-white hover:text-cyan-600 hover:shadow-lg hover:scale-105
                          group/btn">
                          <span>Lihat Detail</span>
                          <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}