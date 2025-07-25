import Image from "next/image";

export default function AwardsDescription() {
  return (
    <section className="py-12 px-12 md:px-6 lg:px-52 lg:py-20 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed">
              <p>
                The Future PropTech Awards have been established to recognize and celebrate the outstanding achievements
                of professionals, companies, and forward-thinking projects that are redefining the real estate and
                property technology landscape.
              </p>
              <p className="mt-4">
                By shining a spotlight on innovation, impact, and leadership, the awards aim to elevate industry standards,
                encourage bold ideas, and promote a culture of collaboration and progress within the built environment.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 ">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-none overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[#3AC6D9] to-transparent z-10"></div>
              <Image
                src="/image/awards/business-meeting.png"
                alt="Business professionals in meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
    
    </section>
  );
}
