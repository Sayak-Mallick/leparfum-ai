import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import BrokenGift from "./components/BrokenGift";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50">
      <HeroSection />
      <BrokenGift />
      <Footer />
    </main>
  );
}