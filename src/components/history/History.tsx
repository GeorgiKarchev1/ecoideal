"use client"


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { useLanguage } from "@/contexts/LanguageContext"

export function History() {
  const { t } = useLanguage()
  const [activeYear, setActiveYear] = useState(0)

  return (
    <div className="bg-white min-h-screen">



      {/* Timeline Section */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t.historyPage.timelineTitle}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Year Navigation */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              {t.historyPage.timeline?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveYear(index)}
                  className={`
                    relative text-lg md:text-2xl font-bold transition-all duration-300 px-4 py-2 rounded-full
                    ${activeYear === index
                      ? "text-brand-green scale-110 shadow-lg bg-green-50 ring-2 ring-brand-green/20"
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"}
                  `}
                >
                  {item.year}
                  {activeYear === index && (
                    <motion.div
                      layoutId="activeYearIndicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-orange rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden"
                >
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Big Year Number */}
                    <div className="flex-shrink-0">
                      <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-green to-teal-600 opacity-20 select-none">
                        {t.historyPage.timeline[activeYear].year}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow pt-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-2 h-8 bg-brand-orange rounded-full" />
                        {t.historyPage.timeline[activeYear].year}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {t.historyPage.timeline[activeYear].text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
