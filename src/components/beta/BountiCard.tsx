import Link from "next/link";
import { IconPlayerPlay, IconMoneybag, IconUser } from "@tabler/icons-react";

interface BountiCardType {
  id: string;
  title: string;
  host: string;
  status: string;
  prizePool: number;
  participantCount: number;
}

const BountiCard = ({ ...props }) => {
  const { items } = props;
  return items.map((item: BountiCardType) => (
    <Link href={`/bounti/view`} key={item.id}>
      <div className="flex flex-col justify-between gap-3 px-4 py-2 bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-bold">{item.title}</span>
            <span className="text-sm text-gray-500 -translate-y-1">
              Hosted by {item.host}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center bg-green-400 text-white font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
              {item.status}
            </span>
            <div className="flex gap-2">
              <span className="flex items-center text-gray-500 font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
                <IconMoneybag />$ {item.prizePool}
              </span>
              <span className="flex items-center text-gray-500 font-bold rounded-full w-fit px-2 py-1 text-sm gap-1 select-none">
                <IconUser />
                {item.participantCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default BountiCard;
