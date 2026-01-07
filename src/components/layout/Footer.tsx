"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        {/* Newsletter / E-book Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-100">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase">
              {t.footer.ebookTitle}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.footer.ebookDesc}
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <div className="flex gap-2">
              <Input placeholder={t.footer.emailPlaceholder} className="bg-white" />
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white shrink-0">
                {t.footer.downloadBtn}
              </Button>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input type="checkbox" id="privacy" className="mt-1" />
              <label htmlFor="privacy">
                {t.footer.privacyAgree}
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-brand-green block">
              EcoIdeal
            </Link>
            <p className="text-gray-600 leading-relaxed">
              {t.footer.companyDesc}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">{t.footer.headers.company}</h4>
            <ul className="space-y-4">
              <li><Link href="/private-label" className="text-gray-600 hover:text-brand-green">{t.header.privateLabel}</Link></li>
              <li><Link href="/contract-manufacturing" className="text-gray-600 hover:text-brand-green">{t.header.contractMfg}</Link></li>
              <li><Link href="/family-business" className="text-gray-600 hover:text-brand-green">{t.header.familyBusiness}</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-brand-green">{t.header.products}</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-brand-green">{t.header.blog}</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-brand-green">{t.header.contact}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">{t.footer.headers.products}</h4>
            <ul className="space-y-4">
              <li><Link href="/products/gummies" className="text-gray-600 hover:text-brand-green">Gummies</Link></li>
              <li><Link href="/products/capsules" className="text-gray-600 hover:text-brand-green">Capsules</Link></li>
              <li><Link href="/products/dry-mixes" className="text-gray-600 hover:text-brand-green">Dry Mixes</Link></li>
              <li><Link href="/products/tinctures" className="text-gray-600 hover:text-brand-green">Tinctures</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">{t.footer.headers.contact}</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{t.footer.headOfSales}</p>
                  <p className="text-gray-600">Mgr. Klaudia Dolanská</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-brand-green shrink-0" />
                <Link href="/contact" className="text-gray-600 hover:text-brand-green">{t.footer.writeToUs}</Link>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0" />
                <p className="text-gray-600">
                  {t.footer.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="/gdpr" className="hover:text-brand-green">{t.footer.links.gdpr}</Link>
            <Link href="/terms" className="hover:text-brand-green">{t.footer.links.terms}</Link>
            <Link href="/complaints" className="hover:text-brand-green">{t.footer.links.complaints}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
