export const metadata = {
  title: "The Conference 2025 | Future PropTech Summit Dubai",
  description: "Discover the vision behind Future PropTech Summit 2025 in Dubai. Learn how this global conference is redefining real estate through AI, IoT, and smart solutions.",
};

import AboutConferenceContent from '@/app/components/About-conference'
import ConferenceThemes from '@/app/components/conference-themes'
// import Header from '@/app/components/subnavi'

export default function AboutConference() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <AboutConferenceContent />
      <ConferenceThemes />
    </main>
  )
}

