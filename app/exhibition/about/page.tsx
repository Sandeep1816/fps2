export const metadata = {
  title: "PropTech Summit Dubai- 2025",
  description: "Learn about the leading PropTech exhibition in Dubai. Future PropTech Summit 2025 unites innovators, exhibitors, and investors to shape real estate technology.",
};

// "use client";
import AboutExhibitionContent from '@/app/components/About-exhibition'
import ExhibitionHighlights from '@/app/components/ExhibitionHighlights'

export default function AboutExhibition() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AboutExhibitionContent />
      <ExhibitionHighlights />
    </main>
  )
}

