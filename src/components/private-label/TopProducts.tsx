"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

const productMeta = [
  {
    image: "/oneoftheproducts.png",
    link: "/products",
  },
  {
    image: "/vtoriproduct.png",
    link: "/products",
  },
  {
    image: "/tretiproduct.png",
    link: "/products",
  },
]

export function TopProducts() {
  const { t } = useLanguage()
  const { topProducts } = t.privateLabelPage

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            {topProducts.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {topProducts.items.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square mb-6 sm:mb-8 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[280px] max-h-[280px] group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={productMeta[index].image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">
                {product.name}
              </h3>

              {/* Product Description */}
              <p
                className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              {/* View Product Button */}
              <Button
                asChild
                className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6 sm:px-8 py-3 rounded-full uppercase tracking-wide text-sm sm:text-base mt-auto"
              >
                <Link href={productMeta[index].link}>{topProducts.viewProduct}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
