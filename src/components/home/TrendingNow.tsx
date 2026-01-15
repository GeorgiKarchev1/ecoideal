"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export function TrendingNow() {
    const { t } = useLanguage()

    const items = [
        {
            image: "https://www.greenpharm.sk/wp-content/uploads/2025/02/product_category_graphic_electrolytes.png",
            link: "/en/prod/electrolytes/"
        },
        {
            image: "https://www.greenpharm.sk/wp-content/uploads/2025/04/product_category_graphic_creatine.png",
            link: "/en/p_cat/creatine/"
        },
        {
            image: "https://www.greenpharm.sk/wp-content/uploads/2024/06/collagen-category-img.png",
            link: "/en/p_cat/collagen/"
        }
    ]

    return (
        <section
            className="py-24 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-services-bg-1024x715.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-12">
                    <span className="block text-xl md:text-2xl font-semibold text-brand-orange mb-1 font-heading">
                        {t.trendingNow.accent}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-brand-green uppercase font-heading max-w-4xl">
                        {t.trendingNow.title}
                    </h2>
                    <div className="max-w-4xl mt-6">
                        <p className="text-lg text-gray-700 leading-relaxed font-normal">
                            {t.trendingNow.description}
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.trendingNow.items.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                            {/* Card Container */}
                            <div className="flex-1 flex flex-col items-center bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 transition-colors duration-300 hover:bg-white mb-6 border border-transparent hover:border-gray-100 shadow-sm">
                                {/* Image */}
                                <div className="w-full relative aspect-[457/360] mb-8">
                                    <img
                                        src={items[index].image}
                                        alt={item.title}
                                        className="w-full h-full object-contain filter hover:brightness-105 transition-all duration-300 mix-blend-multiply"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                                        {item.title}
                                    </h3>
                                    <div className="text-gray-600 leading-relaxed text-sm">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="text-center">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-brand-green hover:border-brand-green hover:text-white transition-all duration-300 uppercase tracking-wide bg-transparent min-w-[160px]"
                                >
                                    {item.button}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
