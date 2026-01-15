import { RangeOfProducts } from "@/components/contract-manufacturing/RangeOfProducts"
import { Packaging } from "@/components/contract-manufacturing/Packaging"
import { KeyBenefits } from "@/components/contract-manufacturing/KeyBenefits"

export default function ContractManufacturingPage() {
  return (
    <div className="pt-20">
      <KeyBenefits />
      <RangeOfProducts />
      <Packaging />
    </div>
  )
}

