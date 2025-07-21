"use client";

import Image from "next/image";
import AwardsPageMainTitle from "./mainTitle";

const awardCategories = [
  {
    id: 1,
    title: "Innovative Developer of the Year",
    description:
      "Recognizing developers who have demonstrated exceptional innovation in property development, incorporating cutting-edge technologies and sustainable practices to create groundbreaking projects.",
    image: "/image/awards/awardscat1.png",
  },
  {
    id: 2,
    title: "Innovation in Smart Urban Development",
    description:
      "Celebrating projects that integrate smart city technologies to create more efficient, sustainable, and livable urban environments that enhance quality of life for residents.",
    image: "/image/awards/awardscat2.png",
  },
  {
    id: 3,
    title: "Digital Transformation in Property Management",
    description:
      "Honoring companies that have successfully digitized and modernized property management processes through innovative technology solutions, improving efficiency and tenant experience.",
    image: "/image/awards/awardscat1.png",
  },
  {
    id: 4,
    title: "Best HVAC Innovation in Real Estate",
    description:
      "Recognizing breakthrough innovations in heating, ventilation, and air conditioning systems that improve energy efficiency, reduce environmental impact, and enhance occupant comfort.",
    image: "/image/awards/awardscat2.png",
  },
  {
    id: 5,
    title: "Real Estate Brand of the Year - Biggest Inventory",
    description:
      "Celebrating the real estate brand that has built the most comprehensive and diverse property inventory while maintaining high quality standards and customer satisfaction.",
    image: "/image/awards/awardscat1.png",
  },
  {
    id: 6,
    title: "Smart Integrated Development of the Year",
    description:
      "Honoring developments that seamlessly integrate multiple smart technologies to create connected, efficient living and working spaces that enhance user experience.",
    image: "/image/awards/awardscat2.png",
  },
  {
    id: 7,
    title: "PropTech Integration by a Real Estate Agency",
    description:
      "Recognizing real estate agencies that have successfully integrated property technology solutions to enhance their services, streamline operations, and improve client experience.",
    image: "/image/awards/awardscat1.png",
  },
  {
    id: 8,
    title: "Smart Building Project of the Year",
    description:
      "Celebrating building projects that incorporate advanced IoT, automation, and intelligent systems to optimize performance, reduce costs, and enhance user experience.",
    image: "/image/awards/awardscat2.png",
  },
];

export default function AwardCategoriesGrid() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
       
        <AwardsPageMainTitle title={" Award Categories"} />

        {/* Awards Grid */}
        <div className="container mx-auto grid grid-cols-1 gap-4">
          {awardCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`flex items-center w-full ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 h-48 relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="w-1/2 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-cyan-50 leading-relaxed text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
