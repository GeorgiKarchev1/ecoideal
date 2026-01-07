"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

// Images derived from the provided HTML
const packagingData = [
  {
    key: 'bottles',
    icon: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/bottle.png',
    detailImage: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/bottle-collage.png',
  },
  {
    key: 'jars',
    icon: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/jar.png',
    detailImage: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/jar-collage.png',
  },
  {
    key: 'bags',
    icon: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/doypack.png',
    detailImage: 'https://www.greenpharm.sk/wp-content/uploads/2025/04/doypack-collage.png',
  },
  {
    key: 'sticks',
    icon: 'https://www.greenpharm.sk/wp-content/uploads/2025/08/sticks-1.png',
    detailImage: 'https://www.greenpharm.sk/wp-content/uploads/2025/08/sticks-2.png',
  },
  {
    key: 'boxes',
    icon: '/tinkturi.png',
    detailImage: '/tinkturi.png',
  },
]

export function Packaging() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('bottles')

  // Helper to safely get nested content
  const getContent = (key: string) => {
    // @ts-ignore - dynamic access to packagingTypes
    return t.contractMfg.packagingTypes[key] || {}
  }

  const activeContent = getContent(activeTab)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brand-green uppercase mb-16">
          {t.contractMfg.packagingTitle}
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16">
          {packagingData.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={cn(
                "group relative p-4 rounded-xl transition-all duration-300 border-2",
                activeTab === item.key
                  ? "border-brand-green bg-brand-green/5 shadow-md"
                  : "border-transparent hover:bg-gray-50 hover:border-gray-200"
              )}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 relative">
                <Image
                  src={item.icon}
                  alt={item.key}
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="border-t border-brand-green/20 w-full max-w-4xl mx-auto mb-16" />

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 lg:p-12 rounded-2xl max-w-6xl mx-auto min-h-[500px]">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-brand-green uppercase mb-6">
              {activeContent.title}
            </h3>
            
            <div className="space-y-4 text-gray-700">
              {Object.entries(activeContent).map(([key, value]) => {
                if (key === 'title') return null
                return (
                  <p key={key} className="leading-relaxed">
                    {/* @ts-ignore */}
                    <span dangerouslySetInnerHTML={{ __html: value.replace(/:/, ':</b>').replace(/^/, '<b>') }} />
                  </p>
                )
              })}
            </div>
          </div>

          <div className="relative h-64 md:h-[400px] bg-white rounded-xl flex items-center justify-center p-8 shadow-sm animate-in zoom-in-95 duration-500">
            <Image
              src={packagingData.find(p => p.key === activeTab)?.detailImage || ''}
              alt={activeContent.title || 'Packaging'}
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
