import Waitlist from "@/components/Waitlist";

const Hero = (props: { userType: string }) => {
  const { userType } = props;
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 pt-4 pb-12 md:py-8 md:pb-6 md:pt-36">
        <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 text-sm font-medium text-white">
          {userType === "business"
            ? `Organic marketing, made easy!`
            : `Montize your content, from the start!`}
        </span>
        <h1 className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          {userType === "business"
            ? `Cost-effective Alternative to Paid Ads.`
            : `Make Your Content Work for You.`}
        </h1>
        <span className="max-w-[750px] text-center text-lg text-pretty whitespace-pre-line sm:text-balance sm:text-xl inline-block align-top text-gray-400">
          {userType === "business"
            ? `Say goodbye to fluctuating paid ad campaign costs.
            Simply post a bounty and leave your organic marketing in the capable hands of content creators worldwide. 
            Simplicity itself.`
            : `Get paid for your top performing content regardless of your size.
            No montization restricts based on follow or view count.`}
        </span>
      </section>
      <Waitlist />
    </>
  );
};

export default Hero;
