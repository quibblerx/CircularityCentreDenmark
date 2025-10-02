"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Partners.css";

// This is the infinite scrolling section, i took the logos from figma, but not sure if these are partners or what exacly

const partners = [
  {
    src: "/p_sustainary_logo.png",
    alt: "Sustainary",
    href: "https://sustainary.org/",
  },
  {
    src: "/p_Circular_Copenhagen_logo.png",
    alt: "Circular Copenhagen",
    href: "https://circular.kk.dk/",
  },
  {
    src: "/p_degrowth_copenhagen_logo.png",
    alt: "Degrowth Copenhagen",
    href: "https://degrowth.net/organisations/degrowth-copenhagen/",
  },
  {
    src: "/p_ready2loop_logo.png",
    alt: "Ready 2 Loop",
    href: "https://ready2loop.org/",
  },
  {
    src: "/p_copenhagen_changery_logo.png",
    alt: "Copenhagen Changery",
    href: "https://www.copenhagenchangery.dk/",
  },
  {
    src: "/p_the_common_ones_logo.png",
    alt: "The Common Ones",
    href: "https://thecommonones.com/",
  },
  {
    src: "/p_people_of_2050_logo.png",
    alt: "People of 2050",
    href: "https://www.peopleof2050.org/",
  },
];

const Partners = () => {
  const allPartners = [...partners, ...partners]; // Duplicate for seamless loop

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto bg-primary rounded-[32px] h-[140px] flex items-center overflow-hidden">
        <div className="partners-track">
          {allPartners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
