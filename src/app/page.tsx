import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeCanDo from "@/components/WhatWeCanDo";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LandingPage() {
  return (
    <main className="flex flex-col relative justify-center min-h-screen">
      <Navbar />
      <div className="relative container px-4 mt-4 md:mt-12">
        <Tabs defaultValue="business">
          <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
            <TabsTrigger value="business">Businesses</TabsTrigger>
            <TabsTrigger value="creator">Creators</TabsTrigger>
          </TabsList>
          <TabsContent value="business">
            <div className="relative container px-4">
              <div className="flex flex-col">
                <div className="pb-36">
                  <Hero userType="business" />
                </div>
                <div className="pb-18 md:pb-36 mt-4">
                  <WhatWeCanDo userType="business" />
                </div>
                <div className="pb-36 border-b">
                  <WaitlistCTA userType="business" />
                </div>
                <Footer />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="creator">
            <div className="relative container px-4">
              <div className="flex flex-col">
                <div className="pb-36">
                  <Hero userType="creator" />
                </div>
                <div className="pb-18 md:pb-36 mt-4">
                  <WhatWeCanDo userType="creator" />
                </div>
                <div className="pb-36 border-b">
                  <WaitlistCTA userType="creator" />
                </div>
                <Footer />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
