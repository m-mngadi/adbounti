import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconChartBar,
  IconClock24,
  IconPigMoney,
  IconSpeakerphone,
} from "@tabler/icons-react";

const WhatWeCanDo = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );

  const items = [
    {
      title: "Lower marketing costs",
      description:
        "“Let us be honest, not all businesses are built the same. Not all businesses have the deep pockets needed to invest\
         variable amounts of money into paid ad campaigns. \
         Adbounti lets you determine your ad spend. By investing a once-off sum per bounty, you will never have to\
        become a victim of flactuating ad costs ever again.”",
      header: "",
      className: "md:col-span-2",
      icon: <IconPigMoney className="h-12 w-12 text-white" />,
    },
    {
      title: "Give you back your valuable time.",
      description:
        "“Leave the heavy lifting in the capable hands of content creators - so you can\
      invest more of your time into your business.”",
      header: "",
      className: "md:col-span-1",
      icon: <IconClock24 className="h-12 w-12 text-white" />,
    },
    {
      title: "PR on autopilot",
      description:
        "“As more and more content creators submit their entries in hopes of receiving \
        a share of the bounty, the more far and wide the good word about your business will travel.”",
      header: "",
      className: "md:col-span-1",
      icon: <IconSpeakerphone className="h-12 w-12 text-white" />,
    },
    {
      title: "Quick visibility",
      description:
        "“We will connect your business to a worldwide network of content creators willing to support your business. \
        Leverage already established content creator audiences to drive organic traffic to your businesses doorstep.”",
      header: "",
      className: "md:col-span-2",
      icon: <IconChartBar className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-12 md:py-8 md:pb-6 md:pt-36 z-50">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] z-50 pb-18 mb-12 relative">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="flex relative">What can </span>
            <span className="flex bg-gradient-to-r from-rose-500 to-orange-500 px-2 animate-bounce bg-clip-text text-transparent">
              <span className="ml-2">"Ad</span>
              <span className="text-black underline">bounti"</span>
            </span>
            <span className="flex-grow relative"> do for you.</span>
          </div>
        </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>

      {/**/}
    </>
  );
};

export default WhatWeCanDo;
