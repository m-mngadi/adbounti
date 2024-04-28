import Link from "next/link";
import { Dropdown } from "@/components/beta/Dropdown";
import { IconPlus } from "@tabler/icons-react";

const filterItems = [
  {
    value: "all",
    label: "All Bounties",
  },
  {
    value: "active",
    label: "Active Bounties",
  },
  {
    value: "ended",
    label: "Ended Bounties",
  },
  {
    value: "draft",
    label: "Draft Bounties",
  },
];

const DashboardPage = () => {
  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <header className="flex flex-col justify-end gap-3 px-4 py-2 bg-white rounded-lg md:flex-row">
            <div className="w-full md:w-[200px]">
              <Dropdown
                defaultTitle="All Bounties"
                defaultValue="all"
                items={filterItems}
              />
            </div>
            <Link
              href="/bounti/create"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600"
            >
              <IconPlus />
              New Bounti
            </Link>
          </header>
          <div className="max-w-7xl w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-stretch">
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
              <div className="size-full h-48 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
