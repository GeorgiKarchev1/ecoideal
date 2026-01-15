"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export function Process() {
  const { t } = useLanguage()

  // Images corresponding to the 5 steps
  const stepImages = [
    "https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-new-product.svg",
    "https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-request-sample.svg",
    "https://www.greenpharm.sk/wp-content/uploads/2025/04/brand-illustration.png",
    "https://www.greenpharm.sk/wp-content/uploads/2025/04/order-illustration.png",
    "https://www.greenpharm.sk/wp-content/uploads/2025/04/delivery-illustration.png"
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Container */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
            {t.process.title}
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-8 mb-16 relative">

          {t.process.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group w-full lg:w-1/5 relative z-10"
            >
              {/* Connector Line (Desktop) - skipping for last item */}


              {/* Image Container */}
              <div className="mb-6 h-28 flex items-end justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={stepImages[index]}
                  alt={step.title}
                  className="max-h-full w-auto object-contain filter hover:brightness-110"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button Container */}
        <div className="flex justify-center">
          <a
            href="https://www.greenpharm.sk/en/private-label/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-brand-green border-2 border-brand-green rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 uppercase tracking-wide"
          >
            {t.process.button}
          </a>
        </div>
      </div>
    </section>
  )
}
