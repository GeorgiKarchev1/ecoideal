"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative overflow-hidden bg-brand-green/5 py-32 lg:py-40">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            {t.hero.title} <br />
            <span className="text-brand-green">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 h-14">
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 border-brand-green text-brand-green hover:bg-brand-green/10">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-green/10 to-transparent pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none -z-0" />
    </section>
  )
}
