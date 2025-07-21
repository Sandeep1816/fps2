import Image from "next/image"

export default function AwardsDescription() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                The Future PropTech Awards have been established to recognize and celebrate the outstanding achievements
                of professionals, companies, and forward-thinking projects that are redefining the real estate and
                property technology landscape. By shining a spotlight on innovation, impact, and leadership, the awards
                aim to elevate industry standards, encourage bold ideas, and promote a culture of collaboration and
                progress within the built environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[#3AC6D9] to-[#F9AC5F00]  z-10"></div>
              <Image
                src="/image/awards/business-meeting.png"
                alt="Business professionals in meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
