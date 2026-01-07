"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export function Products() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">{t.header.products}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="text-gray-600">
              {t.products.subtitle}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.categories.map((product, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="aspect-video bg-gray-200 rounded-t-xl w-full object-cover" /> {/* Placeholder for image */}
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="flex items-center text-brand-orange font-semibold hover:gap-2 transition-all group">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* MOQ Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">{t.products.moqTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
              <p className="text-gray-700 font-medium">{t.products.moqSachets}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
              <p className="text-gray-700 font-medium">{t.products.moqCapsules}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
