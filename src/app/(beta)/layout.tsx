import Sidebar from "@/components/beta/Sidebar";
import { constants } from "@/constants";

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userType: string = constants.userType;
  return (
    <main className="flex flex-col min-h-screen bg-slate-200/30">
      <div className="flex w-full bg-white">
        <Sidebar userType={userType} />
      </div>
      <div className="max-w-7xl size-full mx-auto">
        <div className="flex flex-grow flex-col">{children}</div>
      </div>
    </main>
  );
}
