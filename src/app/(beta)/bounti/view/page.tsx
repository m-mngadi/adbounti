"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconChevronLeft,
  IconPlayerPlay,
  IconMoneybag,
  IconUser,
} from "@tabler/icons-react";
import { constants } from "@/constants";

const ViewBountiPage = () => {
  const router = useRouter();
  const userType: string = constants.userType;
  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <button
            className="flex text-gray-500"
            onClick={() => {
              router.back();
            }}
          >
            <IconChevronLeft />
            Back
          </button>
          <header className="flex flex-col justify-between gap-3 px-4 py-2 bg-white rounded-lg md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold">
                  Bounti Title
                </span>
                <span className="text-sm text-gray-500 -translate-y-1">
                  Hosted by
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center bg-green-400 text-white font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
                  Active
                </span>
                <div className="flex gap-2">
                  <span className="flex items-center text-gray-500 font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
                    <IconMoneybag />$ 500.00
                  </span>
                  <span className="flex items-center text-gray-500 font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
                    <IconUser />
                    15
                  </span>
                </div>
              </div>
            </div>
            {userType !== "business" && (
              <div className="flex justify-start items-center">
                <Link
                  href=""
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600"
                >
                  Participate
                  <IconPlayerPlay />
                </Link>
              </div>
            )}
          </header>
          <div className="max-w-7xl w-full h-full">
            <Tabs defaultValue="overview" className="flex flex-col">
              <TabsList className="flex justify-around w-full md:w-fit md:mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                {userType === "creator" && (
                  <TabsTrigger value="submit">Submit</TabsTrigger>
                )}
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
