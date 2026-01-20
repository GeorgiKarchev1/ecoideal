"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export function KeyBenefits() {
    const { t } = useLanguage()
    const benefits = t.contractMfg.page.benefits.items

    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-services-bg.jpg')",
                }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Main Page Title */}
                <div className="text-center mb-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A786A] leading-tight max-w-4xl mx-auto">
                        {t.contractMfg.page.hero.title}
                    </h1>
                </div>

                {/* Key Benefits Grid Section */}
                <div>
                    <h2 className="text-3xl font-bold text-[#2A796A] uppercase mb-12 text-left">
                        {t.contractMfg.page.benefits.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {/* Row 1 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">{benefits[0].title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {benefits[0].description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">{benefits[1].title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {benefits[1].description}
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">{benefits[2].title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {benefits[2].description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">{benefits[3].title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {benefits[3].description}
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">{benefits[4].title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {benefits[4].description}
                            </p>
                        </div>

                        {/* Image Cell */}
                        <div className="flex items-center justify-center md:justify-start pl-0 md:pl-10">
                            <div className="relative w-full max-w-[534px]">
                                <Image
                                    src="https://www.greenpharm.sk/wp-content/uploads/2025/04/contract-manufacturing-capsules.png"
                                    alt="Contract Manufacturing Capsules"
                                    width={616}
                                    height={224}
                                    className="w-full h-auto object-contain filter drop-shadow-sm"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
