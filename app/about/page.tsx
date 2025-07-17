
export const metadata = {
  title: "About Future PropTech Summit",
  description: "Learn about the mission behind the Future PropTech Summit.",
};

// ✅ Standard server component render function
import AboutHeroSection from '@/app/components/AboutHerosection';
import About from '../components/About';

export default function Page() {
  return (
    <div>
      <AboutHeroSection />
      <About />
    </div>
  );
}
