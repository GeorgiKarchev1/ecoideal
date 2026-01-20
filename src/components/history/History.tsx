"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { useLanguage } from "@/contexts/LanguageContext"

export function History() {
  const { t } = useLanguage()
  const [activeYear, setActiveYear] = useState(0)

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-24 lg:py-32 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image with decorative shape */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative border shape */}
              <div className="relative">
                {/* Outer decorative ring */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] z-0"
                >
                  <path
                    d="M200,20 C320,20 380,100 380,200 C380,300 300,380 200,380 C100,380 20,280 20,200 C20,120 80,20 200,20"
                    fill="none"
                    stroke="#47CDB6"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                    className="opacity-60"
                  />
                </svg>

                {/* Main image container with organic shape */}
                <div
                  className="relative z-10 overflow-hidden rounded-[40%_60%_60%_40%/60%_40%_60%_40%] border-4 border-brand-green/40"
                >
                  <div className="aspect-[3/4]">
                    <Image
                      src="/teamimg.jpg"
                      alt="EcoIdeal Team"
                      width={500}
                      height={667}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl z-0" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">
                  {t.historyPage.subHeader}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t.historyPage.title}
                </h1>
              </div>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {t.historyPage.content[0]}
                </p>

                <p className="text-lg">
                  {t.historyPage.content[1]}
                </p>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
                <div>
                  <p className="text-3xl font-bold text-brand-green">25+</p>
                  <p className="text-sm text-gray-500 mt-1">{t.historyPage.stats.experience}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-green">2016</p>
                  <p className="text-sm text-gray-500 mt-1">{t.historyPage.stats.founded}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-green">EU</p>
                  <p className="text-sm text-gray-500 mt-1">{t.historyPage.stats.partners}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
