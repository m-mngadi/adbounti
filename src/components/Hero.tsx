const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 pt-24 pb-12 md:py-8 md:pb-6 md:pt-36 z-50">
      <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 text-sm font-medium text-white z-50">
        Organic marketing, made easy!
      </span>
      <h1 className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] z-50">
        Cost-effective alternative to paid ads.
      </h1>
      <span className="max-w-[750px] text-center text-lg text-pretty sm:text-balance sm:text-xl inline-block align-top text-gray-400 z-50">
        Say goodbye to fluctuating paid ad campaign costs. <br /> Simply
        <span className="bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
          post a bounty
        </span>
        and leave the marketing in the capable hands of content creators
        worldwide. <br />
        Simplicity itself.
      </span>
    </section>
  );
};

export default Hero;
