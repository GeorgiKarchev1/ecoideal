"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, Phone, Globe, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en')
  }

  const navigation = [
    { name: t.header.home, href: "/" },
    { name: t.header.privateLabel, href: "/private-label" },
    { name: t.header.contractMfg, href: "/contract-manufacturing" },
    // { name: t.header.products, href: "/products" },
    { name: t.header.history, href: "/history" },
    { name: t.header.contact, href: "/contact" },
  ]

  return (
    <header className="relative z-50 w-full bg-white shadow-sm font-sans">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 xl:px-12 h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-between relative gap-4">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center shrink-0 z-10 w-auto p-2">
          <Image
            src="/EcoidealLogo.png"
            alt="EcoIdeal"
            width={400}
            height={150}
            className="h-24 md:h-32 lg:h-36 xl:h-44 w-auto object-contain transform scale-110 origin-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center justify-center gap-4 xl:gap-8 2xl:gap-12 flex-1 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors whitespace-nowrap relative py-1",
                  "text-base",
                  isActive
                    ? "text-brand-green font-semibold"
                    : "text-gray-600 hover:text-brand-green"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Actions - Right */}
        <div className="hidden xl:flex items-center justify-end gap-4 2xl:gap-8 z-10 w-[300px] shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-600 hover:text-brand-green px-2"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase font-semibold text-xs">{language}</span>
          </Button>

          <div className="flex items-center gap-2 text-gray-600 whitespace-nowrap">
            <Phone className="h-4 w-4" />
            <span className="font-medium text-xs xl:text-sm">+359 88 8492226</span>
          </div>

          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 h-11 text-base">
            {t.header.bookCall}
          </Button>
        </div>

        {/* Mobile Menu Trigger - Visible on LG and below now since we moved desktop to XL */}
        <div className="xl:hidden flex items-center gap-3 z-10 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-gray-700 h-10 w-10 rounded-full hover:bg-gray-100"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-700 rounded-full hover:bg-gray-100">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="/EcoidealLogo.png"
                      alt="EcoIdeal"
                      width={280}
                      height={100}
                      className="h-28 w-auto object-contain"
                    />
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-2">
                    {navigation.map((item, index) => {
                      const isActive = pathname === item.href
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "flex items-center justify-between py-4 px-4 text-lg font-medium rounded-xl transition-all group",
                              isActive
                                ? "text-brand-green bg-brand-green/5 font-semibold"
                                : "text-gray-700 hover:text-brand-green hover:bg-brand-green/5"
                            )}
                          >
                            <span>{item.name}</span>
                            {isActive ? (
                              <ArrowRight className="h-5 w-5 text-brand-green" />
                            ) : (
                              <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-green" />
                            )}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>

                {/* Footer */}
                <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="flex flex-col gap-4"
                  >
                    <a
                      href="tel:+359888492226"
                      className="flex items-center justify-center gap-3 py-3 px-4 text-gray-600 hover:text-brand-green bg-white rounded-xl border border-gray-200 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">+359 88 8492226</span>
                    </a>
                    <Button
                      className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full h-14 text-lg font-semibold rounded-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.header.bookCall}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
