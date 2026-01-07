"use client"

import { Lightbulb, Package, Rocket, TrendingUp, MapPin, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const iconMap = {
  "Fully Personalized": Lightbulb,
  "Visual Samples": Package,
  "Flexible MOQ": TrendingUp,
  "Made in Bulgaria": MapPin,
  "Full Service": Rocket,
  
  // Bulgarian mappings
  "Напълно персонализирани": Lightbulb,
  "Визуални мостри": Package,
  "Гъвкави количества": TrendingUp,
  "Производство в България": MapPin,
  "Пълно обслужване": Rocket,
}

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.features.items.map((item, index) => {
             // @ts-ignore - simple mapping fallback
            const Icon = iconMap[item.title] || CheckCircle
            
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
