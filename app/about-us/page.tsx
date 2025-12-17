import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HeroAbout from "./components/HeroAbout";
import Visi from "./components/Visi";
import Misi from "./components/Misi";
import Stats from "./components/Stats";
import Divisi from "./components/Divisi";
import CTA from "./components/CTA";

export default function AboutUsPage() { 
    return (
        <>
        <main className="w-full ">
            <Header />
            <HeroAbout />
            <Visi />
            <Misi />
            <Stats />
            <Divisi />
            <CTA />
            <Footer />
        </main>
        </>
    )
}