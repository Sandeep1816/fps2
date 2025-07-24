import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CategoryGuidance() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold  text-transparent bg-gradient-to-r from-[#408CFF] to-[#00205B] bg-clip-text mb-6">Not sure which category to apply for?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          With 20 carefully curated categories, we understand that choosing the right one can be overwhelming. Whether
          you're a startup, developer, tech provider, or policymaker, we're here to help you.
        </p>
        <Link href="/register?type=awards">
        <Button size="lg" className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-500 text-white font-semibold px-8 py-3">
          Click Here to Get Category Guidance
        </Button>
        </Link>
      </div>
    </section>
  )
}
