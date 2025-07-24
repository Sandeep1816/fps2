import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-screen mx-auto">
        <div className="bg-gradient-to-r from-[#408CFF] to-[#00205B] rounded-none p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#F9AC5F] to-[#3AC6D9] bg-clip-text text-transparent">
  About the Future PropTech Awards
</h2>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
       The Future PropTech Awards are a prestigious new addition to the region’s most anticipated PropTech event, the Future Proptech Summit. 
These awards are designed to recognize, celebrate, and amplify the achievements of visionary leaders, pioneering companies, and
 cutting-edge solutions that are transforming the real estate and built environment industries.
            </p>
            <p>
            As the real estate sector undergoes a profound digital and sustainable transformation, the need to spotlight trailblazers and innovators 
has never been more important. The Future Proptech Awards bring together the brightest minds from across the globe to highlight 
outstanding accomplishments in both Property Technology and Real Estate value chain.
            </p>
            <p>
          This year, we are proud to unveil 20 exclusive award categories, 10 for PropTech innovation and 10 for real estate excellence, covering
everything from smart city initiatives and sustainable construction to AI-powered platforms and next-gen property management tools.
            </p>
            <p>
              Whether you're a tech startup revolutionizing asset management or a developer redefining urban living, the FPS Awards are your
opportunity to gain industry-wide recognition, enhance your brand, and inspire future innovation.
            </p>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] text-white font-semibold px-8 py-3">
              Submit Your Nomination
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
