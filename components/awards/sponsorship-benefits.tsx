import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SponsorshipBenefits() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-8">
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/sponsorship-ceremony.png"
                  alt="Awards ceremony with sponsors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Sponsor the FPS Awards?</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    High-calibre networking opportunities during the awards ceremony and associated events
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Exclusive access to industry leaders with top decision-makers and thought leaders
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Brand recognition and brand appeal of innovation and excellence in the PropTech industry
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Comprehensive media coverage and digital exposure across multiple channels
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">
                Align your brand with the leaders shaping tomorrow's real estate landscape and position yourself as a
                champion of innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-l from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-600 text-white px-6 py-2">Sponsorship Enquiry</Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-6 py-2 bg-transparent"
                >
                  Download Sponsorship Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
