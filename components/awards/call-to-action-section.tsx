import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToActionSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Join us at the <span className="font-semibold">FPS Awards 2025</span> and be part of a movement that's
            redefining how cities are built, lived in, and experienced.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF]  text-white px-8 py-3 font-semibold">
              Book Your Awards Seat Now
            </Button>
            <Link href="/register?type=sponsor" >
            <Button size="lg" className="bg-gradient-to-l from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-600 text-white px-8 py-3 font-semibold">
              Become a Sponsor
            </Button>
            </Link>
            <Button size="lg" className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-blue-600 text-white px-8 py-3 font-semibold">
              Nominate Your Project
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Have questions or want to get involved?</p>
        </div>
      </div>
    </section>
  )
}
