import Waitlist from "@/components/Waitlist";
import Link from "next/link";

const WaitlistCTA = (props: { userType: string }) => {
  const { userType } = props;
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] pb-18 relative">
          {userType === "business" ? (
            <div className="block md:flex flex-wrap gap-2 justify-center w-full pb-8">
              <span className="block md:flex relative">Does </span>
              <span className="block md:flex bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                Adbounti
              </span>
              <span className="block md:flex-grow relative">
                Resonate with Your Business Needs?
              </span>
            </div>
          ) : (
            <div className="block md:flex flex-wrap gap-2 justify-center w-full pb-8">
              <span className="block md:flex relative">
                Ready to Start Earning with{" "}
              </span>
              <span className="block md:flex bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                Adbounti
              </span>
              <span className="block md:flex relative">?</span>
            </div>
          )}
        </div>
        <div className="text-center mb-12 text-lg text-pretty sm:text-balance sm:text-xl">
          <div className="block md:flex md:justify-center relative">
            <span className=" tracking-wide  text-gray-400">
              We will be launching a beta release. <br />
            </span>
          </div>
          <br />
          <div className="block md:flex md:justify-center  text-center relative">
            <span className=" text-gray-400 leading-normal tracking-wide">
              Be amongst the first that join our waitlist. <br />
              We will be considering{" "}
              <span className="underline font-bold">
                {userType === "business"
                  ? `15 businesses`
                  : `30 content creators`}{" "}
              </span>
              to be apart of our beta release.
              <br />
              <br />
              Interested individuals can connect with us via email on{" "}
              <Link
                className="inline bg-slate-200/30 rounded-lg"
                href={`mailto:support@adbounti.com?subject=Adbounti Beta:Interested [Specify whether you are a Business/Creator]&body=Hi Adbounti Team,%0D%0A%0D%0AI would like to be a part of the beta release.%0D%0A%0D%0A[Your motivation for wanting to be a part of the beta release.]%0D%0A%0D%0A Kind regards,%0D%0A[Your Name]`}
                target="_blank"
              >
                <span className="ml-2 inline font-bold">
                  support@adbounti.com
                </span>
              </Link>{" "}
              <br /> We look forward to partnering up with you.
            </span>
          </div>
        </div>
      </section>
      <Waitlist userType={userType} />
    </>
  );
};

export default WaitlistCTA;
