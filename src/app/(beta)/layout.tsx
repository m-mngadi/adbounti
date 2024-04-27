import Sidebar from "@/components/beta/Sidebar";

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-slate-200/30">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-grow flex-col mx-auto py-4">
          <div className="flex justify-between items-center pb-4 mx-8">
            <div className="flex max-w-sm"></div>
            <div className="flex">User</div>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
