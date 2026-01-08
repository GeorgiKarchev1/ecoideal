"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function PrivateLabelHero() {
    const { t } = useLanguage()

    return (
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto text-center leading-tight">
                    {t.privateLabelPage.hero.title}
                </h1>
            </div>
        </section>
    )
}
