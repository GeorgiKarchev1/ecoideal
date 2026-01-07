"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const productTypes = [
  { key: 'powder', image: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/product-type-powder.png' },
  { key: 'tablets', image: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/product-type-tables.png' },
  { key: 'capsules', image: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/product-type-capsules.png' },
  { key: 'gummies', image: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/product-type-gummies.png' },
  { key: 'softgels', image: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/product-type-softgels.png' },
  { key: 'liquids', image: '/minitinktures.png' },
]

export function RangeOfProducts() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brand-green uppercase mb-16">
          {t.contractMfg.rangeTitle}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {productTypes.map((type) => (
            <div key={type.key} className="flex flex-col items-center group">
              <div className="relative w-full aspect-[242/141] mb-4 bg-gray-50 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={type.image}
                  alt={t.contractMfg.products[type.key as keyof typeof t.contractMfg.products]}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-sm lg:text-base font-semibold text-center text-brand-green">
                {t.contractMfg.products[type.key as keyof typeof t.contractMfg.products]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

