"use client";
import {
  IconLayoutGrid,
  IconSettings,
  IconCompass,
  IconMoneybag,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import Logo from "../waitlist/Logo";

const Sidebar = () => {
  const sidebarItems = [
    {
      value: "0_DASHBOARD",
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutGrid />,
    },
    {
      value: "1_EXPLORE",
      label: "Explore",
      href: "/explore",
      icon: <IconCompass />,
    },
    {
      value: "2_REWARDS",
      label: "Rewards",
      href: "/rewards",
      icon: <IconMoneybag />,
    },
    {
      value: "3_SETTINGS",
      label: "Settings",
      href: "/settings",
      icon: <IconSettings />,
    },
  ];

  const [sidebarValue, setSidebarValue] = useState("0_DASHBOARD");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <aside className="flex md:flex-col md:min-w-[96] bg-white">
        <div className="flex flex-grow justify-between flex-col drop-shadow-lg relative left-0">
          <div className="flex flex-col">
            <Link href="/dashboard">
              <div
                className={clsx("flex px-4 py-6", {
                  "md:justify-center": !sidebarOpen,
                })}
              >
                {sidebarOpen ? <Logo /> : <Logo logoOnly={true} />}
              </div>
            </Link>
            <ul className="flex md:flex-col justify-between px-4 gap-3">
              {sidebarItems.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className={`group/item`}
                >
                  <li
                    className={clsx(
                      `flex gap-3 px-4 py-2 rounded-lg group-hover/item:justify-normal transition ease-in-out delay-150 duration-300 group-hover/item:bg-slate-200/30 justify-center`,
                      {
                        " text-white bg-gradient-to-r from-rose-500 to-orange-500":
                          sidebarValue === item.value,
                      }
                    )}
                    onClick={() => {
                      setSidebarValue(item.value);
                    }}
                  >
                    {item.icon}
                    <span
                      className={`hidden transition ease-in-out delay-150 duration-300 group-hover/item:inline`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
