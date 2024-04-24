import Link from "next/link";
import Logo from "@/components/Logo";
import { IconMail } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="justify-center w-full border-b sticky top-0 z-50 backdrop-blur-sm bg-white/30">
      <div className="flex container max-w-screen-2xl h-14 items-center px-4 sm:px-8">
        <div className="flex justify-between w-full items-center">
          <Link
            className="flex items-center space-x-2 hover:bg-gray-200/30 px-4 py-2 rounded-lg"
            href="/"
          >
            <div className="flex font-bold tracking-wide text-2xl gap-2">
              <Logo userType="business" />
            </div>
          </Link>
          <Link
            className="flex hover:bg-slate-200/30 px-4 py-2 rounded-lg"
            href="mailto:info@adbounti.com"
            target="_blank"
          >
            <IconMail />
            <span className="ml-2 hidden md:inline">info@adbounti.com</span>
          </Link>
          {/* 
            <nav className="flex items-center gap-4 lg:gap-6 text-sm"></nav> 
            */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
