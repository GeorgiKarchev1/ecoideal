"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.webp"
          alt="Supplements Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#f5f1e8]/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6 uppercase tracking-tight">
            {t.hero.title} <br />
            {t.hero.subtitle}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white text-base font-bold px-8 py-6 h-auto rounded-full uppercase tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              Book a discovery call
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/90 hover:bg-white border-2 border-[#00bcd4] text-[#00bcd4] hover:text-[#00bcd4] text-base font-semibold px-6 py-5 h-auto rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <a
                href="https://wa.me/359888492226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp +359 88 8492226

              </a>
            </Button>
          </div>

          {/* Warning Note */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700 max-w-xl mx-auto">
            <span className="text-lg">⚠️</span>
            <span className="font-medium">
              Please note: Our discovery calls are currently available in English only
            </span>
            <span className="text-lg">⚠️</span>
          </div>
        </div>
      </div>
    </section>
  )
}
