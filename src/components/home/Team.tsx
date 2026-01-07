"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Users, Microscope, ClipboardCheck, UserCheck } from "lucide-react"

export function Team() {
  const { t } = useLanguage()

  const roles = [
    { icon: Users, label: "Production Dept" },
    { icon: Microscope, label: "Technologist" },
    { icon: ClipboardCheck, label: "Quality Control" },
    { icon: UserCheck, label: "Client Manager" },
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.team.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.team.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <role.icon className="w-8 h-8 text-brand-green" />
              </div>
              <span className="font-medium text-gray-900">{role.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl border border-gray-100 max-w-3xl mx-auto">
          <p className="text-gray-500 italic text-sm">
            * Real photos of our team and facilities will be displayed here as requested.
          </p>
        </div>
      </div>
    </section>
  )
}

