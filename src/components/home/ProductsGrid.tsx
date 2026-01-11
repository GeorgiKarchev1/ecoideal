"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"

export function ProductsGrid() {
    const { t } = useLanguage()

    return (
        <div className="w-full flex flex-col gap-5 py-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gp-services-bg.jpg')" }}>
            {/* SECTION 1: PRODUCTS (Images Left, Content Right-Center) */}
            <section className="relative w-full">
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left Side - Images - Full width on mobile, 50% on desktop */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-home-yellow-box-photo-1.webp"
                                alt="Natural Supplements"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-home-yellow-box-photo-2.jpg"
                                alt="Quality Products"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Overlapping Content Box - Centered */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] bg-[#f4b41a] p-8 md:p-14 lg:p-20 shadow-2xl z-10"
                >
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                            {t.productsGrid?.title || "Products"}
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-white mb-8 leading-relaxed max-w-2xl font-medium">
                            {t.productsGrid?.description || "Our goal is to produce high-quality supplements that will promote the health of your customers. That's why we choose only ingredients that meet ISO-GMP standards, are EU-approved and come from the most reputable suppliers."}
                        </p>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#f4b41a] font-bold px-10 py-6 h-auto rounded-full uppercase tracking-widest transition-all"
                            >
                                <Link href="/products">
                                    {t.productsGrid?.button || "View products"}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: PRIVATE LABEL (Images Right, Content Left-Center) - Reflected Layout */}
            <section className="relative w-full">
                <div className="flex flex-col lg:flex-row w-full lg:justify-end">
                    {/* Right Side - Images - Images on the right due to lg:justify-end */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/woman-over-sea-bg-img-1024x683.jpg"
                                alt="Private Label 1"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-home-blue-box-photo-2.jpg"
                                alt="Private Label 2"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Overlapping Content Box - Centered - Mirrored colors (Teal) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] bg-[#47CDB6] p-8 md:p-14 lg:p-20 shadow-2xl z-10"
                >
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                            {t.header?.privateLabel || "Private Label"}
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-white mb-8 leading-relaxed max-w-2xl font-medium">
                            {t.privateLabelPage?.benefits?.items?.[0]?.description || "Private labelling allows businesses to stay current with market trends by quickly adapting to changing consumer preferences."}
                        </p>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#47CDB6] font-bold px-10 py-6 h-auto rounded-full uppercase tracking-widest transition-all"
                            >
                                <Link href="/private-label">
                                    Get a price quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: CONTRACT MANUFACTURING (Images Left, Content Right-Center) - Same as Section 1 */}
            <section className="relative w-full">
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left Side - Images - Full width on mobile, 50% on desktop */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/young-woman-traveler-walking-at-red-sand-dunes-in-2023-11-27-05-05-26-utc-1024x683.jpg"
                                alt="Contract Manufacturing 1"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full aspect-[1030/521]"
                        >
                            <Image
                                src="https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-home-red-box-photo-2-768x388.jpg"
                                alt="Contract Manufacturing 2"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Overlapping Content Box - Centered - Brand Orange */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] bg-[#FD883A] p-8 md:p-14 lg:p-20 shadow-2xl z-10"
                >
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
                            {t.header?.contractMfg || "Contract Manufacturing"}
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-white mb-8 leading-relaxed max-w-2xl font-medium">
                            {t.hero?.description || "GreenPharm is a manufacturer specialised in powder and capsule supplements ranging from collagen drinks to organic products. We are your partner that will help you develop products that are right for your customers."}
                        </p>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FD883A] font-bold px-10 py-6 h-auto rounded-full uppercase tracking-widest transition-all"
                            >
                                <Link href="/contract-manufacturing">
                                    {t.header?.bookCall || "Book a call"}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
