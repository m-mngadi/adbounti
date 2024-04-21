import Link from "next/link";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <header className="flex justify-center w-full border-b ">
      <div className="flex container max-w-screen-2xl h-14 items-center px-4 sm:px-8">
        <div className="flex">
          <Link
            className="flex items-center space-x-2 hover:bg-slate-200/30 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent"
            href="/"
          >
            <div className="flex font-bold tracking-wide text-2xl gap-2">
              <Logo />
            </div>
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
