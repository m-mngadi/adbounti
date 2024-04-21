import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import WhatWeCanDo from "@/components/WhatWeCanDo";

export default function LandingPage() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <main className="flex justify-center">
        <div className="relative container px-4">
          <div className="snap-mandatory snap-y">
            <div className="snap-start">
              <Hero />
              <Waitlist />
            </div>
            <div className="snap-start">
              <WhatWeCanDo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
