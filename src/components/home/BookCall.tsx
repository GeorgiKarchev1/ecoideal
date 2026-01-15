"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function BookCall() {
    const { t } = useLanguage()

    return (
        <section
            className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("https://www.greenpharm.sk/wp-content/uploads/2025/04/book-a-call-greenpharm.webp")'
            }}
        >
            {/* Added a subtle overlay to help with overall contrast if needed, but the main readability fix is the card below */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl">
                    {/* Image */}
                    <div className="flex-shrink-0 relative w-[250px] h-[226px] md:w-[305px] md:h-[276px]">
                        <img
                            src="https://www.greenpharm.sk/wp-content/uploads/2025/07/contact-person-photo-radovan.png"
                            alt="Radovan Mozner - Supplement Expert"
                            className="w-full h-full object-contain filter drop-shadow-md"
                            loading="lazy"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-heading max-w-xl text-brand-green">
                            {t.bookCallSection.title}
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            {/* Book Call Button */}
                            <a
                                href="https://meetings-eu1.hubspot.com/radovan-mozner?uuid=e9716e21-1c38-40d9-9531-fb263e6f91f8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-brand-orange rounded-full hover:bg-brand-orange/90 transition-all duration-300 uppercase tracking-wide min-w-[200px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                {t.bookCallSection.bookCallBtn}
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/359888492226"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-white bg-[#25D366] rounded-full hover:bg-[#25D366]/90 transition-all duration-300 min-w-[250px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    className="w-5 h-5 brightness-0 invert"
                                />
                                {t.bookCallSection.whatsappBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
