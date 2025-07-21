import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const sponsorshipBenefits = [
  {
    title: "High-Visibility Branding",
    description: "before, during, and after the awards",
  },
  {
    title: "Thought Leadership Opportunities",
    description: "via speaking slots or jury participation",
  },
  {
    title: "Targeted Networking Access",
    description: "with key decision-makers and industry disruptors",
  },
  {
    title: "Exclusive Recognition",
    description: "as a champion of innovation and excellence in PropTech",
  },
  {
    title: "Custom Branding Touchpoints",
    description: "across on-site and digital platforms",
  },
]

export default function EnhancedSponsorshipSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Why Sponsor the FPS Awards?</h2>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Image */}
            <div className="lg:w-1/2 relative">
              <div className="h-64 lg:h-full relative   bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/image/awards/whysponsor.png"
                  alt="Awards ceremony with audience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6 mb-8">
                {sponsorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Align your brand with the leaders shaping tomorrow's real estate, and position yourself as a catalyst
                  for change in the industry.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-600 text-white px-8 py-3 font-semibold">
                  Become a Sponsor
                </Button>
                <Button className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-500 text-white px-8 py-3 font-semibold">
                  Download the Sponsorship Prospectus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
