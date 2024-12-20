import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);
export const metadata = {
    title: "Développement de sites web, applications mobiles et SEO à Perpignan",
    description:
        "Expert en création de sites web modernes, développement d'applications mobiles sur mesure et optimisation SEO pour améliorer votre visibilité en ligne.",
};
export default function Home2MainDemoMultiPage() {
    return (
        <>
            <div className="theme-bold">
                <div className="page" id="top">
                    <nav className="main-nav transparent stick-fixed wow-menubar">
                        <Header2 links={boldMultipage} />
                    </nav>
                    <main id="main">
                        <ParallaxContainer
                            className="home-section bg-light-alpha-70 parallax-5 scrollSpysection"
                            style={{
                                backgroundImage:
                                    "url(/assets/images/demo-bold/section-bg-1.jpg)",
                            }}
                            id="home"
                        >
                            <Hero />
                        </ParallaxContainer>

                        <Home2 />
                    </main>
                    <footer className="footer-1 bg-dark-1 light-content">
                        <Footer2 />
                    </footer>
                </div>{" "}
            </div>{" "}
        </>
    );
}
