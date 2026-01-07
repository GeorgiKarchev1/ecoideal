import { RangeOfProducts } from "@/components/contract-manufacturing/RangeOfProducts"
import { Packaging } from "@/components/contract-manufacturing/Packaging"

export default function ContractManufacturingPage() {
  return (
    <div className="pt-20">
      <RangeOfProducts />
      <Packaging />
    </div>
  )
}

