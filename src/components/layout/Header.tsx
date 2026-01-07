"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Globe, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"

export function Header() {
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
    <header className="relative z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 h-36 flex items-center justify-between relative">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center shrink-0 z-10">
          <Image
            src="/EcoidealLogo.png"
            alt="EcoIdeal"
            width={320}
            height={120}
            className="h-32 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Absolutely Centered */}
        <nav className="hidden xl:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-600 hover:text-brand-green transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions - Right */}
        <div className="hidden xl:flex items-center gap-5 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-600 hover:text-brand-green"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase font-semibold text-xs">{language}</span>
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span className="font-medium">+421 905 587 699</span>
          </div>

          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6">
            {t.header.bookCall}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden flex items-center gap-2 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-gray-700"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
                      width={180}
                      height={70}
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between py-4 px-4 text-lg font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green/5 rounded-xl transition-all group"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-green" />
                        </Link>
                      </motion.div>
                    ))}
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
                      href="tel:+421905587699"
                      className="flex items-center justify-center gap-3 py-3 px-4 text-gray-600 hover:text-brand-green bg-white rounded-xl border border-gray-200 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">+421 905 587 699</span>
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
