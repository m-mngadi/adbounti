import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeCanDo from "@/components/WhatWeCanDo";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <main className="flex justify-center">
        <div className="relative container px-4">
          <div className="snap-mandatory snap-y">
            <div className="snap-start pb-36">
              <Hero />
            </div>
            <div className="snap-start pb-36">
              <WhatWeCanDo />
            </div>
            <div className="snap-start pb-36 border-b">
              <WaitlistCTA />
            </div>
            <div className="snap-start">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
