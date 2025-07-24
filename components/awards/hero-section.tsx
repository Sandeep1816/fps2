import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/image/awards/hero.png"
        alt="Awards background"
        fill
        className="object-cover"
        priority
      />

      {/* Subtle Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00205Bcc] via-[#00205B88] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
     
        <h1 className="text-6xl md:text-7xl font-bold mb-6  text-transparent bg-clip-text bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] ">Future Proptech Awards</h1>
        <p className="text-xl mb-2 max-w-2xl mx-auto">
          Recognising Excellence | Celebrating Innovation | Defining the Future of Real Estate
        </p>
        <p className="text-4xl font-semibold mb-8  text-transparent bg-clip-text bg-gradient-to-r from-[#3AC6D9] to-[#408CFF]">14th October 2025</p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-500 text-white font-semibold px-8 py-3 text-lg"
        >
          SPONSOR AWARDS
        </Button>
      </div>
    </section>
  )
}
