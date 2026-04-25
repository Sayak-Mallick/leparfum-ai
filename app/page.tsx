import HeroSection from "./components/Hero-section";
import Footer from "./components/Footer";
import BrokenGift from "./components/Broken-gift";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BottleOrbit from "./components/Bottle-orbit";
import HowItWorks from "./components/How-it-works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50">
      <HeroSection />
      <BrokenGift />
      <HowItWorks />
      <BottleOrbit />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}