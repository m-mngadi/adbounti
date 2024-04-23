import Waitlist from "@/components/Waitlist";

const WaitlistCTA = () => {
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 z-50">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] z-50 pb-18 relative">
          <div className="block md:flex flex-wrap gap-2 justify-center w-full pb-8">
            <span className="block md:flex relative">Ready to drive </span>
            <span className="block md:flex bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
              organic traffic
            </span>
            <span className="block md:flex-grow relative">
              straight to your business's doorstep?
            </span>
          </div>
        </div>
        <div className="text-center text-pretty mb-12">
          <div className="block md:flex md:justify-center relative">
            <span className="text-xl tracking-wide  text-gray-400">
              We will be launching a beta release. <br />
            </span>
          </div>
          <div className="block md:flex md:justify-center  text-center relative">
            <span className="text-xl text-gray-400 leading-normal tracking-wide">
              The first 15 businesses that join our waitlist, and connect with
              us via email will be considered.
              <br />
              Successful applicant will be
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                featured on our landing page for the first 3 months
              </span>
              post public launch.
            </span>
          </div>
        </div>
      </section>
      <Waitlist />
    </>
  );
};

export default WaitlistCTA;
