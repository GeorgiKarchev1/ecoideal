import { KeyBenefits } from "@/components/private-label/KeyBenefits"
import { TopProducts } from "@/components/private-label/TopProducts"

export default function PrivateLabelPage() {
  return (
    <div>
      {/* Hero Heading */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto text-center leading-tight">
            Optimize Costs and Innovate Fast With Private Label Supplements
          </h1>
        </div>
      </section>

      <KeyBenefits />
      <TopProducts />
    </div>
  )
}
