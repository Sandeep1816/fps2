import Image from "next/image";
import trophy from "@/public/image/awards/trophy.png";
import AwardsPageMainTitle from "./mainTitle";

const techCategories = [
  {
    title: "PropTech Startup of the Year",
    description:
      "Recognizing an emerging company with high-impact disruptive potential in property technology.",
    bgColor: "bg-gradient-to-r from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Best Use of AI in Real Estate",
    description:
      "Celebrating innovative applications of artificial intelligence that are transforming real estate processes.",
    bgColor: "bg-gradient-to-l from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Blockchain Innovation in Real Estate",
    description:
      "Honoring solutions that use blockchain to enhance transparency, transactions, or data in real estate.",
    bgColor: "bg-gradient-to-r from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Tokenization Platform of the Year",
    description:
      "Recognizing platforms that enable fractional ownership and investment through tokenization.",
    bgColor: "bg-gradient-to-l from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Digital Twin or Virtual Modelling Excellence",
    description:
      "Celebrating advanced digital representations and virtual modeling solutions in real estate development.",
    bgColor: "bg-gradient-to-r from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Top Real Estate Data & Analytics Platform",
    description:
      "Honoring platforms delivering powerful insights and data-driven decision-making capabilities.",
    bgColor: "bg-gradient-to-l from-[#00205B] to-[#408CFF]",
  },
  {
    title: "IoT/Smart Infrastructure Solution of the Year",
    description:
      "Recognizing Internet of Things and smart infrastructure solutions that enhance building performance.",
    bgColor: "bg-gradient-to-r from-[#00205B] to-[#408CFF]",
  },
  {
    title: "SaaS Solution of the Year (for Real Estate)",
    description:
      "Celebrating cloud-based software solutions that streamline real estate operations and management.",
    bgColor: "bg-gradient-to-l from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Cybersecurity & Data Protection in Real Estate Tech",
    description:
      "Honoring solutions that protect real estate systems and data from cyber threats.",
    bgColor: "bg-gradient-to-r from-[#00205B] to-[#408CFF]",
  },
  {
    title: "Best Overall PropTech Innovation",
    description:
      "The top recognition for all-around excellence in property technology innovation and game-changing impact in real estate.",
    bgColor: "bg-gradient-to-l from-[#00205B] to-[#408CFF]",
  },
];

export default function TechnologyInnovation() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <AwardsPageMainTitle
          title={"Technology Innovation in PropTech"}
          subTitle="Celebrating platforms, solutions, and companies redefining the property technology ecosystem."
        />

        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`w-full md:w-[80%] ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow-lg text-white ${category.bgColor}`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-blue-100">{category.description}</p>
                </div>

                {/* Image */}
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={trophy}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
