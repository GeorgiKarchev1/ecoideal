"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Adapted to market trends",
    description: "Private labeling allows businesses to stay current with market trends by quickly adapting to changing consumer preferences. This flexibility enables companies to introduce new products or variations that align with the latest demands, giving them a competitive edge.",
  },
  {
    title: "Lower order quantity",
    description: "Private label products often come with lower minimum order quantities (MOQs) compared to creating custom products from scratch. This is particularly advantageous for smaller businesses or startups with limited budgets, as it reduces the financial risk associated with holding large inventories.",
  },
  {
    title: "Ideal for startup companies",
    description: "Start-up companies can benefit from private labeling as it provides a cost-effective way to enter the market. By leveraging existing products and branding, start-ups can focus on building their brand presence and customer base without the complexities and high costs of product development.",
  },
  {
    title: "Fast delivery",
    description: "Private label products are usually readily available, leading to faster turnaround times. This is especially beneficial when responding to sudden increases in demand or when trying to quickly establish a product line. Fast delivery can contribute to improved customer satisfaction and loyalty.",
  },
]

export function KeyBenefits() {
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
            Key Benefits
          </motion.h2>

          {/* Benefits Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12 mb-12 sm:mb-16">
            {benefits.map((benefit, index) => (
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
                Ready to order
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Private label products are pre-manufactured and ready for sale, eliminating the need for businesses to invest time and resources in product development. This allows companies to streamline their operations, reduce time-to-market, and concentrate on marketing and sales efforts.
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
