import { Button } from "@/components/ui/button"

export default function SponsorshipSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-t from-[#00205B] to-[#3AC6D9] rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Sponsorship Opportunities – FPS Awards 2025
          </h2>
          <div className="space-y-4 text-lg leading-relaxed mb-8">
            <p>
              Be part of a high-impact platform that celebrates the trailblazers redefining the future of real estate
              and property technology. Sponsoring the Future PropTech Summit Awards positions your brand at the heart of
              innovation, sustainability, and digital transformation in the built environment.
            </p>
            <p>
              As a sponsor, you'll gain access to an elite audience of developers, PropTech leaders, government
              officials, investors, and top-tier media. Your brand will be showcased not just during the awards but
              throughout the nomination campaign, judging phase, and post-award recognition.
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] text-white font-semibold px-8 py-3">
              Explore Sponsorship Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
