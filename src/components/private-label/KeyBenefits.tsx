"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export function KeyBenefits() {
  const { t } = useLanguage()
  const { benefits } = t.privateLabelPage

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f5f4f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-green uppercase tracking-wide mb-10 sm:mb-14 lg:mb-16 text-center sm:text-left"
          >
            {benefits.title}
          </motion.h2>

          {/* Benefits Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12 mb-12 sm:mb-16">
            {benefits.items.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-green uppercase tracking-wide mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Ready to Order - with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-green uppercase tracking-wide mb-3 sm:mb-4">
                {benefits.readyToOrder.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {benefits.readyToOrder.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-40 sm:h-48 md:h-64 order-1 md:order-2"
            >
              <Image
                src="/gelcapsules.png"
                alt="Gel capsules"
                fill
                className="object-contain object-center md:object-right-bottom"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
