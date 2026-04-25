import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import BrokenGift from "./components/BrokenGift";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BottleOrbit from "./components/BottleOrbit";
import HowItWorks from "./components/HowItWorks";
import ChooseYourWorld from "./components/ChooseYourWorld";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50">
      <HeroSection />
      <BrokenGift />
      <HowItWorks />
      <ChooseYourWorld />
      <BottleOrbit />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}