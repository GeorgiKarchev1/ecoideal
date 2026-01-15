"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export function Certificates() {
    const { t } = useLanguage()

    const certificates = [
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-diamond.png",
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-fda.png",
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-gmp.png",
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-green.png",
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-haccp.png",
        "https://www.greenpharm.sk/wp-content/uploads/2025/04/greenpharm-certification-ukas.png"
    ]

    // Clone items to create a seamless loop
    const displayCertificates = [...certificates, ...certificates]

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading text-secondary text-brand-green">
                        {t.certificates.title}
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative w-full max-w-[1240px] mx-auto overflow-hidden">
                    <div className="flex animate-scroll hover:[animation-play-state:paused]">
                        {displayCertificates.map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-4 flex items-center justify-center min-w-[200px]"
                            >
                                <div className="w-[150px] h-[150px] relative flex items-center justify-center">
                                    <img
                                        src={src}
                                        alt="Certificate"
                                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
