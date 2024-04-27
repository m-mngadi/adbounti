import Link from "next/link";
import Logo from "@/components/waitlist/Logo";
import { IconMail } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="flex flex-col container w-full max-w-screen-2xl h-fit px-4 sm:px-8 gap-4">
      <div className="flex items-center justify-between w-full py-4">
        <div className="flex font-bold tracking-wide text-2xl gap-2">
          <Logo />
        </div>
        <Link
          className="flex hover:bg-slate-200/60 px-4 py-2 rounded-lg"
          href={`mailto:support@adbounti.com?subject=Adbounti Beta:Interested [Specify whether you are a Business/Creator]&body=Hi Adbounti Team,%0D%0A%0D%0AI would like to be a part of the beta release.%0D%0A%0D%0A[Your motivation for wanting to be a part of the beta release.]%0D%0A%0D%0A Kind regards,%0D%0A[Your Name]`}
          target="_blank"
        >
          <IconMail />
          <span className="ml-2 hidden md:inline">support@adbounti.com</span>
        </Link>
      </div>
      <div className="flex items-center justify-center text-sm text-gray-400 py-4">
        &copy; 2024 Adbounti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
