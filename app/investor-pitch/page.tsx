export const metadata = {
   title: "Investor Pitch 2025 | Future PropTech Summit Dubai ",
  description: "Pitch your PropTech startup to global investors at Future PropTech Summit 2025 in Dubai. Connect, showcase innovations, and secure funding opportunities."
}

import InvestorPitchContent from '@/app/components/Investor-ptch'
import PitchBenefits from '@/app/components/pitch-benefits'

export default function InvestorPitch() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mb-0">
        <InvestorPitchContent />
      </div>
      <div className="mt-0">
        <PitchBenefits />
      </div>
    </main>
  )
}


