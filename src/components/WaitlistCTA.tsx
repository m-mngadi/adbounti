import Waitlist from "@/components/Waitlist";

const WaitlistCTA = () => {
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] pb-18 relative">
          <div className="block md:flex flex-wrap gap-2 justify-center w-full pb-8">
            <span className="block md:flex relative">Does </span>
            <span className="block md:flex bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
              Adbounti
            </span>
            <span className="block md:flex-grow relative">
              {" "}
              Resonate with Your Business Needs?
            </span>
          </div>
        </div>
        <div className="text-center mb-12 text-lg text-pretty sm:text-balance sm:text-xl">
          <div className="block md:flex md:justify-center relative">
            <span className=" tracking-wide  text-gray-400">
              We will be launching a beta release. <br />
            </span>
          </div>
          <div className="block md:flex md:justify-center  text-center relative">
            <span className=" text-gray-400 leading-normal tracking-wide">
              Be amongst the first that join our waitlist. <br />
              We will be considering 15 businesses to be apart of our beta
              release.
              <br />
              Interested businesses can connect with us via email. <br /> We
              look forward to partnering up with you.
            </span>
          </div>
        </div>
      </section>
      <Waitlist />
    </>
  );
};

export default WaitlistCTA;
