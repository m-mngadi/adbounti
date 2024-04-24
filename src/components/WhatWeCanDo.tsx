import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconChartBar,
  IconClock24,
  IconPigMoney,
  IconSpeakerphone,
} from "@tabler/icons-react";

const WhatWeCanDo = () => {
  const items = [
    {
      title: "Lower Your Marketing Costs",
      description: `By investing a once-off sum per bounty, you will never have to\
        become a victim of flactuating ad costs ever again.`,
      header: "",
      className: "md:col-span-2",
      icon: <IconPigMoney className="h-12 w-12 text-white" />,
    },
    {
      title: "Get Back Your Valuable Time.",
      description:
        "Leave the heavy lifting in the capable hands of content creators - so you can\
      invest more of your time into your business.",
      header: "",
      className: "md:col-span-1",
      icon: <IconClock24 className="h-12 w-12 text-white" />,
    },
    {
      title: "Gain Quick Visibility",
      description:
        "We will connect your business to a worldwide network of content creators willing to support your business. \
        Leverage already established audiences to drive organic traffic to your business.",
      header: "",
      className: "md:col-span-1",
      icon: <IconChartBar className="h-12 w-12 text-white" />,
    },
    {
      title: "PR on Autopilot",
      description:
        "As more and more content creators submit their entries in hopes of receiving \
        a share of the bounty, the more far and wide the good word about your business will travel.",
      header: "",
      className: "md:col-span-2",
      icon: <IconSpeakerphone className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-12 md:py-8 md:pb-6 md:pt-36">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] pb-18 mb-12 relative">
          <div className="block md:flex flex-wrap gap-2 justify-center w-full">
            <div className="flex relative text-pretty flex-wrap justify-center">
              Realize
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                Your Business Ambitions
              </span>
              with
              <span className="block md:flex relative bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                Adbounti
              </span>
            </div>
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
