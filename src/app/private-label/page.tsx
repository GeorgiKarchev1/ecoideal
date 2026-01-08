import { PrivateLabelHero } from "@/components/private-label/Hero"
import { KeyBenefits } from "@/components/private-label/KeyBenefits"
import { TopProducts } from "@/components/private-label/TopProducts"

export default function PrivateLabelPage() {
  return (
    <div>
      <PrivateLabelHero />

      <KeyBenefits />
      <TopProducts />
    </div>
  )
}
