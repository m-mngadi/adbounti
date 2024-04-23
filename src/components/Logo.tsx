const Logo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center bg-gradient-to-r from-rose-500 to-orange-500 stroke-white/75 rounded-full px-0.5 ">
        <div className="size-3 bg-white z-50 rounded-full"></div>
      </div>
      <div className="flex items-center hover:bg-slate-200/30 rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
        <div className="flex font-bold tracking-wide text-2xl gap-2">
          <span className="ml-3 select-none">adbounti</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
