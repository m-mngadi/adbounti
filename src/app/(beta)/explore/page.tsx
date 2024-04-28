import { Dropdown } from "@/components/beta/Dropdown";
import Link from "next/link";

const sortByDirection = [
  {
    value: "asc",
    label: "Ascending",
  },
  {
    value: "desc",
    label: "Descending",
  },
];

const sortByItems = [
  {
    value: "recent",
    label: "Recently added",
  },
  {
    value: "participantCount",
    label: "Participant count",
  },
];

const ExplorePage = () => {
  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <header className="flex flex-col justify-between items-center gap-3 px-3 py-2 bg-white rounded-lg md:flex-row w-full">
            <div className="flex w-full">
              <input
                className="border rounded-lg h-10 w-full md:max-w-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex gap-3 justify-normal md:justify-end w-full">
              <div className="w-full md:w-[200px]">
                <Dropdown
                  defaultTitle="Recently added"
                  defaultValue="recent"
                  items={sortByItems}
                />
              </div>
              <div className="w-full md:w-[200px]">
                <Dropdown
                  defaultTitle="Ascending"
                  defaultValue="asc"
                  items={sortByDirection}
                />
              </div>
            </div>
          </header>
          <div className="flex flex-grow relative">
            {/* Bounti Cards will be here */}
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
      </div>
    </>
  );
};

export default ExplorePage;
