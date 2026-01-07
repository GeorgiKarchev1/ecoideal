"use client"

import { CheckCircle2, FlaskConical, PackageCheck, PenTool, ShoppingCart, Search } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export function Process() {
  const { t } = useLanguage()

  // Map steps to icons based on index since content is dynamic
  const icons = [Search, FlaskConical, CheckCircle2, PackageCheck, PenTool, ShoppingCart]

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative max-w-lg lg:max-w-none mx-auto">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
          
          {/* Mobile Connector Line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-8">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div 
                  key={index} 
                  className="group flex lg:flex-col items-start lg:items-center gap-6 lg:gap-4 relative bg-white lg:bg-transparent p-2 lg:p-0"
                >
                  {/* Icon Container */}
                  <div className="shrink-0 relative">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full border-2 lg:border-4 border-gray-50 group-hover:border-brand-green/20 transition-colors flex items-center justify-center shadow-sm z-10 relative">
                      <Icon className="w-6 h-6 lg:w-10 lg:h-10 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Step Badge - Mobile: Top Left of Icon, Desktop: Bottom Centered */}
                    <div className="absolute -top-2 -right-2 lg:-bottom-3 lg:top-auto lg:left-1/2 lg:-translate-x-1/2 bg-brand-orange text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full shadow-sm z-20">
                      STEP {index + 1}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-left lg:text-center pt-2 lg:pt-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-brand-green transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
