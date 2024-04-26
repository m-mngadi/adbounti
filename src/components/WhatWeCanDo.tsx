import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconChartBar,
  IconClock24,
  IconPigMoney,
  IconSpeakerphone,
  IconChartLine,
  IconBrandCashapp,
  IconTrendingUp,
} from "@tabler/icons-react";

const WhatWeCanDo = (props: { userType: string }) => {
  const { userType } = props;
  const businessItems = [
    {
      title: "Significantly Lower Your Cost Per Aquisition",
      description: `Our bounty approach to getting organic traffic straight to your business, 
      allows you to invest once-off per bounty. You determine the Cost Per Aquisition, 
      based on how much you place as your bounty.`,
      header: "",
      className: "md:col-span-2",
      icon: <IconChartLine className="h-12 w-12 text-white" />,
    },
    {
      title: "Lower Your Marketing Costs",
      description: `Never become a victim of flactuating ad campaign costs again.
      You allocate a fixed once-off invest.
      Period. `,
      header: "",
      className: "md:col-span-1",
      icon: <IconPigMoney className="h-12 w-12 text-white" />,
    },
    {
      title: "Get Your Valuable Time Back",
      description: `Leave the heavy lifting in the capable hands of content creators worldwide.
         You focus your time into your business.`,
      header: "",
      className: "md:col-span-1",
      icon: <IconClock24 className="h-12 w-12 text-white" />,
    },
    {
      title: "Gain Quick Visibility",
      description: `We will connect your business to a worldwide network of content creators willing to support your business.
        Leverage already established audiences to drive organic traffic to your business.`,
      header: "",
      className: "md:col-span-2",
      icon: <IconChartBar className="h-12 w-12 text-white" />,
    },
    {
      title: "PR on Autopilot",
      description: `As more and more content creators submit their entries in hopes of receiving a share of the bounty,
         the more far and wide the good word about your business will travel.`,
      header: "",
      className: "md:col-span-3",
      icon: <IconSpeakerphone className="h-12 w-12 text-white" />,
    },
  ];

  const creatorItems = [
    {
      title: "Get Paid for Your Top Performing Content",
      description: `Being a Top Performer for a bounty, you recieve a percentage share of the bounty prize pool. 
      Performance is evaluated based on your entry post, creators of all sizes can recieve rewards for their quality content.`,
      header: "",
      className: "md:col-span-3",
      icon: <IconBrandCashapp className="h-12 w-12 text-white" />,
    },
    {
      title: "Limitless Earning Potential",
      description: `You are not limited on the number of bounties you can participate on at any one given time. 
      This means you can do what you do best and pump out content for as many businesses as you want. 
      Bounties distribute the prize pool independently, so get your share of the pie from all of them if you want.`,
      header: "",
      className: "md:col-span-3",
      icon: <IconTrendingUp className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-12 md:py-8 md:pb-6 md:pt-36">
        <div className="text-center text-pretty sm:text-balance text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] pb-18 mb-12 relative">
          <div className="block md:flex flex-wrap gap-2 justify-center w-full">
            {userType === "business" ? (
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
            ) : (
              <div className="flex relative text-pretty flex-wrap justify-center">
                Start
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                  Your Content Creator Dream
                </span>
                the right way with
                <span className="inline-flex relative bg-gradient-to-r from-rose-500 to-orange-500 px-2 bg-clip-text text-transparent">
                  Adbounti
                </span>
              </div>
            )}
          </div>
        </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {(userType === "business" ? businessItems : creatorItems).map(
            (item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            )
          )}
        </BentoGrid>
      </section>
    </>
  );
};

export default WhatWeCanDo;
