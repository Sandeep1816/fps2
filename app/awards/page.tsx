import HeroSection from "@/components/awards/hero-section"
import AboutSection from "@/components/awards/about-section"
import AwardCategories from "@/components/awards/award-categories"
import TechnologyInnovation from "@/components/awards/technology-innovation"
import CategoryGuidance from "@/components/awards/category-guidance"
import WinnerBenefits from "@/components/awards/winner-benefits"
import SponsorshipSection from "@/components/awards/sponsorship-section"
import AwardsDescription from "@/components/awards/awards-description"
import EnhancedSponsorshipSection from "@/components/awards/enhanced-sponsorship-section"
import ContactFormSection from "@/components/awards/contact-form-section"
import CallToActionSection from "@/components/awards/call-to-action-section"

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
       <AwardsDescription />
      <AboutSection />
      <AwardCategories />
      <TechnologyInnovation />
      <CategoryGuidance />
      <WinnerBenefits />
      <SponsorshipSection />
        <EnhancedSponsorshipSection />
         <CallToActionSection />
    
      {/* <ContactFormSection /> */}

  
    </div>
  )
}
