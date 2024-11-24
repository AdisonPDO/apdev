import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Portfolio from "@/components/homes/home-2/Portfolio";

import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";

import Link from "next/link";
import React from "react";
const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
      ssr: false, // Disable server-side rendering
    }
);
export const metadata = {
  title: "Projets - Réalisations web et mobiles à Perpignan",
  description:
      "Explorez mes réalisations en développement web, applications mobiles et optimisation SEO. Des solutions concrètes et performantes pour booster votre activité.",
};
const onePage = false;
const dark = false;
export default function BoldPortfolioPage() {
  return (
      <>
        <div className="theme-bold">
          <div className="page" id="top">
            <nav className="main-nav transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                  className="page-section bg-light-alpha-70 parallax-5"
                  style={{
                    backgroundImage:
                        "url(/assets/images/demo-bold/section-bg-1.jpg)",
                  }}
                  id="home"
              >
                <div className="container position-relative pt-sm-40">
                  <div className="text-center">
                    <h1 className="hs-title-4 font-alt mb-0">
                    <span
                        className="wow charsAnimInLong-1"
                        data-splitting="chars"
                    >
                      <AnimatedText text="Projets" />
                    </span>
                    </h1>
                  </div>
                </div>
              </ParallaxContainer>
              <section
                  className={`page-section  scrollSpysection  ${
                      dark ? "bg-dark-1 light-content" : ""
                  } `}
                  id="portfolio"
              >
                <Portfolio desc />
              </section>
              <hr
                  className={`${
                      dark ? "white opacity-015" : "black"
                  } black mt-0 mb-0"`}
              />
              <section className="page-section">
                <div className="container text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
      <span className="text-outline-2" aria-hidden="true">
        Envie d’en voir plus ?
      </span>
                        <span className="text-outline-1" aria-hidden="true">
        Envie d’en voir plus ?
      </span>
                        <span className="text-outline">Envie d’en voir plus ?</span>
                      </h2>

                      <p className="section-text mb-60 mb-md-40 mb-sm-30">
                        <span className="section-title-inline">Super !</span> Vous êtes séduit
                        par mon portfolio et mes réalisations ? N’attendez plus pour passer à
                        l’étape suivante. Contactez-moi dès maintenant pour bénéficier d’une
                        consultation en ligne gratuite et personnalisée, adaptée aux besoins de
                        votre entreprise.
                      </p>

                      <div className="local-scroll">
                        <Link
                            href={`/contact`}
                            className="link-hover-anim underline align-middle"
                            data-link-animate="y"
                        >
        <span className="link-strong link-strong-unhovered">
          Lancer un projet
        </span>
                          <span
                              className="link-strong link-strong-hovered"
                              aria-hidden="true"
                          >
          Lancer un projet
        </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </main>
            <footer className="footer-1 bg-dark-1 light-content">
              <Footer2/>
            </footer>
          </div>
          {" "}
        </div>
        {" "}
      </>
  );
}
