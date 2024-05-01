import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { IconChevronLeft, IconPin } from "@tabler/icons-react";

const ViewBountiPage = () => {
  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <Link href="/dashboard" className="flex text-gray-500">
            <IconChevronLeft />
            Back
          </Link>
          <header className="flex flex-col justify-between gap-3 px-4 py-2 bg-white rounded-lg md:flex-row">
            <div className="flex flex-col">
              <span>Bounti Title</span>
              <span>Hosted by</span>
              <span>Bounti Prize Pool</span>
              <span>Current number of participants</span>
            </div>
            <div className="flex justify-start md:justify-end items-center">
              <Link
                href=""
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600"
              >
                Participate
                <IconPin />
              </Link>
            </div>
          </header>
          <div className="max-w-7xl w-full h-full">
            <Tabs defaultValue="overview" className="flex flex-col">
              <TabsList className="flex justify-around w-full md:w-fit md:mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="submit">Submit</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">Overview</TabsContent>
              <TabsContent value="leaderboard">Leaderboard</TabsContent>
              <TabsContent value="submit">Submit</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBountiPage;
