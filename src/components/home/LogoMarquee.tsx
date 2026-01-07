"use client"

import Image from "next/image"

const logos = [
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-14_at_23.48.07.png?height=80&v=1760474894",
    alt: "Certification 1",
    width: 135,
    height: 40,
  },
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-14_at_23.49.17.png?height=80&v=1760474966",
    alt: "Certification 2",
    width: 127,
    height: 40,
  },
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-23_at_18.20.49.png?height=56&v=1761232858",
    alt: "Certification 3",
    width: 200,
    height: 28,
  },
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-20_at_15.47.33.png?height=160&v=1760964462",
    alt: "Certification 4",
    width: 115,
    height: 80,
  },
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-20_at_15.48.24.png?height=88&v=1760964513",
    alt: "Certification 5",
    width: 121,
    height: 44,
  },
  {
    src: "https://www.ecoideal.eu/cdn/shop/files/Screenshot_2025-10-20_at_15.49.03.png?height=104&v=1760964551",
    alt: "Certification 6",
    width: 194,
    height: 52,
  },
]

export function LogoMarquee() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
          Certified & Trusted
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`dup1-${index}`}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Another duplicate for longer screens */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`dup2-${index}`}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Fourth duplicate for extra wide screens */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`dup3-${index}`}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
