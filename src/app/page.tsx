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
          <div className="flex flex-col">
            <div className="pb-36">
              <Hero />
            </div>
            <div className="pb-18 md:pb-36 mt-4">
              <WhatWeCanDo />
            </div>
            <div className="pb-36 border-b">
              <WaitlistCTA />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
