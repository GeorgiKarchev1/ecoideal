"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function History() {
  return (
    <section className="py-24 lg:py-32 bg-gray-100">
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
                Our Story
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Company History
              </h1>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                GreenPharm was founded as a private label nutrition company in 2016 to support our family business in the health and beauty industry. We have 25 years of experience in selling medical devices for home care. In 2014, we started to offer collagen supplements together with these devices and we had excellent feedback.
              </p>

              <p className="text-lg">
                GreenPharm has begun to produce these products and thanks to the high quality of collagen, we have acquired new partners from across Europe. In the following years, we have added the manufacturing of capsules and tablets to our portfolio and, currently, we can offer a variety of dietary supplements.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
              <div>
                <p className="text-3xl font-bold text-brand-green">25+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-green">2016</p>
                <p className="text-sm text-gray-500 mt-1">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-green">EU</p>
                <p className="text-sm text-gray-500 mt-1">Partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
