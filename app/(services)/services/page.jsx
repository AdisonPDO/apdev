import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Awards from "@/components/homes/home-2/Awards";
import Experience from "@/components/homes/home-2/Experience";
import Faq from "@/components/homes/home-2/Faq";
import Services from "@/components/homes/home-2/Services";

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
    title: "Services - Développement web, mobile et SEO à Perpignan",
    description:
        "Découvrez mes services en création de sites web, développement d'applications mobiles et optimisation SEO pour renforcer votre présence en ligne.",
};
const onePage = false;
const dark = false;
export default function BoldServicesPage() {
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
                      <AnimatedText text="Services" />
                    </span>
                  </h1>
                </div>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection pb-0 ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="services"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-md-80">
                    <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                      <span className="text-outline-2">Mes services</span>
                      <span className="text-outline-1">Mes services</span>
                      <span className="text-outline">Mes services</span>
                    </h2>
                    <p className="section-text mb-60 mb-md-40 mb-sm-30">
                      <span className="section-title-inline">Me choisir&nbsp;?</span>
                      Je conçois et développe des solutions web et mobiles sur mesure,
                      tout en optimisant votre visibilité en ligne grâce à des stratégies SEO efficaces.
                      Mon objectif est de transformer vos idées en projets concrets qui boostent votre activité.
                    </p>
                    <div className="local-scroll">
                      <Link
                          href={`/contact`}
                          className="link-hover-anim underline align-middle"
                          data-link-animate="y"
                      >
      <span className="link-strong link-strong-unhovered">
        Devis
      </span>
                        <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                        >
        Devis
      </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-6 offset-xl-1">

                    {/* Accordion */}
                    <Faq/>
                    {/* End Accordion */}
                  </div>
                </div>
                {/* Divider */}
                <div className="page-section">
                  <hr
                      className={`${
                          dark ? "white opacity-015" : "black"
                      } black mt-0 mb-0"`}
                  />
                </div>
                {/* End Divider */}
                {/* Steps */}

                <Services/>
                {/* End Steps */}
              </div>
            </section>

            <div className="page-section overflow-hidden">
              <Experience/>
            </div>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2/>
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
