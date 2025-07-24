"use client";
import { Button } from "@/components/ui/button";
import { Award, Camera, Megaphone, TrendingUp } from "lucide-react";
import AwardsPageMainTitle from "./mainTitle";
import Link from "next/link";
import { useState } from "react";
import AwardsModal from "@/app/components/register/awardsModal";

const benefits = [
  {
    icon: Award,
    title: "Prestigious Trophy & Recognition Awards FPS 2025",
    description: "Receive a prestigious trophy and official recognition",
  },
  {
    icon: Camera,
    title: "Featured Coverage Across Media Channels & Digital Channels",
    description: "Get featured across multiple media and digital platforms",
  },
  {
    icon: Megaphone,
    title: "Spotlight Interviews and Features Post-Event",
    description: "Exclusive interviews and feature stories after the event",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Brand Trust & Visibility in the Global Market",
    description: "Boost your brand's credibility and global market presence",
  },
];

export default function WinnerBenefits() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <AwardsPageMainTitle title="What Winners Receive" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-300 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
      
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#3AC6D9] to-[#408CFF] hover:bg-cyan-500 text-white font-semibold px-8 py-3"
             onClick={() => setIsOpen(true)}
          >
            Nominate Now & Get Recognised
          </Button>

        </div>
      </div>
        <AwardsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
