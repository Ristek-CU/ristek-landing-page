import Image from "next/image";
 
const COLORS = {
  primaryCyan: "#00c6e8",
  primaryTeal: "#14b8a6",
  darkCyan: "#009FC4",
  textDark: "#1f2937",
};
 
const ASSETS = { 
  textSvg: "/hero/text-highlight.svg",
 
  logoSvg: "/images/jumbotron/hero-ristek.svg",
  headerSvg: "/images/jumbotron/hero-header.svg",
 
};
 
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href = "#",
}) => {
  const baseStyle =
    "px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-[8px] font-semibold transition-all duration-300 inline-block text-center whitespace-nowrap flex-shrink-0";

  const variantStyle =
    variant === "primary"
      ? "text-white shadow-lg hover:shadow-xl hover:scale-105"
      : "bg-white text-gray-900 border-2 border-cyan-500 hover:bg-cyan-50 hover:text-gray-900 hover:scale-105";

  const gradientStyle =
    variant === "primary"
      ? {
          background: `linear-gradient(90deg, ${COLORS.primaryCyan} 0%, ${COLORS.darkCyan} 100%)`,
        }
      : {};

  return (
    <a
      href={href}
      className={`${baseStyle} ${variantStyle}`}
      style={gradientStyle}
    >
      {children}
    </a>
  );
};
 
const GeometricLogo: React.FC = () => (
  <Image
    src={ASSETS.logoSvg}
    alt="Hero Ristek"
    fill
    className="object-contain "
    priority
  />
);
 
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-white to-teal-50">
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
         
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
           
          <div className="space-y-4 sm:space-y-6 w-full order-2 lg:order-1 ">
             
            <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] mx-auto lg:mx-0">
              <Image 
                src={ASSETS.headerSvg} 
                alt="Hero Header" 
                width={500}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
 
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
 
            <div className=" flex flex-row flex-nowrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start items-center">
              <Button variant="outline" href="#partner">
                Partner With Us
              </Button>
              <Button variant="primary" href="/register">
                Register As Client
              </Button>
            </div>
          </div>
 
          <div className="relative flex items-center justify-center w-full order-1 lg:order-2">
             
            <div className="relative 
            w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] 
            md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
               
              <div className="absolute inset-0 flex items-center justify-center hover:scale-165 transition-transform duration-800">
                <GeometricLogo />
              </div>
 
              <div className="absolute inset-0 bg-gradient-radial from-cyan-200/30 to-transparent blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
 
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export { HeroSection };
