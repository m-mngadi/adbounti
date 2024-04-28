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
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const sidebarItems = [
    {
      value: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutGrid />,
    },
    {
      value: "explore",
      label: "Explore",
      href: "/explore",
      icon: <IconCompass />,
    },
    {
      value: "rewards",
      label: "Rewards",
      href: "/rewards",
      icon: <IconMoneybag />,
    },
    {
      value: "settings",
      label: "Settings",
      href: "/settings",
      icon: <IconSettings />,
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <aside className="max-w-7xl w-full mx-auto">
        <div className="flex flex-grow justify-between drop-shadow-lg relative py-2 mx-4">
          <div className="flex items-center justify-between w-full">
            <Link href="/dashboard" className="mr-2">
              <Logo logoOnly={true} />
            </Link>
            <ul className="flex justify-between">
              {sidebarItems.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className="hover:bg-slate-300/30"
                >
                  <li
                    className={clsx(
                      `flex gap-3 px-4 py-2 hover:justify-normal justify-center`,
                      {
                        " text-white bg-gradient-to-r from-rose-500 to-orange-500":
                          `/${pathname.split("/")[1]}` === item.href,
                      }
                    )}
                  >
                    {item.icon}
                    <span className={`hidden md:inline`}>{item.label}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <Link href="/settings/accounts">
              <div className="flex relative h-8 w-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full text-white font-bold justify-center items-center">
                P
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
