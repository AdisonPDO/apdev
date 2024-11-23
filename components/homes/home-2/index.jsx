import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";
export default function Home2({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/me.jpg"
                  className="w-100 wow scaleOutIn"
                  alt="Adison pereira"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    À propos
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    À propos
                  </span>
                  <span className="text-outline">À propos</span>
                </h2>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  <span className="section-title-inline">Qui?</span> Le rôle du développeur web et mobile dans le processus de communication est d’interpréter et structurer les besoins numériques du client. Il transforme une demande linguistique, qu’elle soit écrite ou orale, en solutions digitales concrètes : sites web performants, applications mobiles innovantes et stratégies SEO optimisées. Chaque projet est conçu pour garantir une présence en ligne forte et efficace, grâce à une présentation visuelle et technique qui répond aux objectifs spécifiques de chaque client.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        En savoir plus{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        En savoir plus{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/bold-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        En savoir plus{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        En savoir plus{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
        {/*<section
            className={`page-section scrollSpysection  pt-0  ${
                dark ? "bg-dark-1 light-content" : ""
            } `}
            id="awards"
        >
            <Awards/>
        </section>*/}

        <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">Services</span>
                <span className="text-outline-1">Services</span>
                <span className="text-outline">Services</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">Pourquoi?</span> J'utilise la puissance des technologies web et mobiles pour résoudre des problèmes complexes et proposer des solutions adaptées aux besoins des entreprises.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Demander un devis
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Demander un devis
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Demander un devis
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Demander un devis
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
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

          <Services />
          {/* End Steps */}
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section>
        {/*<hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />*/}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
