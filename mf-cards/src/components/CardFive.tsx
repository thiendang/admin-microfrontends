import React, { ReactNode } from 'react';

interface CardProps {
  id: number;
  title: string;
  icon: string;
  totalShare: string;
  totalReturn: string;
  levelUp?: boolean;
  levelDown?: boolean;
}

const cards: CardProps[] = [
  {
    id: 1,
    title: 'Apple',
    icon: 'https://react-demo.tailadmin.com/assets/brand-07-56332d03.svg',
    levelUp: false,
    levelDown: true,
    totalShare: '$410.5%',
    totalReturn: '-1.1%',
  },
  {
    id: 2,
    title: 'Meta',
    icon: 'https://react-demo.tailadmin.com/assets/brand-08-a826b0eb.svg',
    levelUp: false,
    levelDown: true,
    totalShare: '$157.36%',
    totalReturn: '-0.1%',
  },
  {
    id: 3,
    title: 'Google',
    icon: 'https://react-demo.tailadmin.com/assets/brand-09-3772604e.svg',
    levelUp: true,
    levelDown: false,
    totalShare: '$737.76%',
    totalReturn: '0.95%',
  },
  {
    id: 4,
    title: 'Tesla',
    icon: 'https://react-demo.tailadmin.com/assets/brand-10-074e50c9.svg',
    levelUp: false,
    levelDown: true,
    totalShare: '$234.09%',
    totalReturn: '-1.1%',
  },
];

type Props = {
  scope?: string;
  module?: string;
};

const CardFive: React.FC<Props> = ({scope, module}: Props) => {
  return (
    <div className="relative outline outline-cyan-400 rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      {scope && module && (
        <div className="absolute top-0 left-px text-xs font-semibold">
          mf-scope: {scope} - (mf-module: {module})
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 sm:!grid-cols-2 xl:!grid-cols-4 xl:!gap-0">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`px-10 ${
              index !== cards.length - 1
                ? 'border-r border-stroke dark:border-strokedark last:border-r-0 px-10 swiper-slide swiper-slide-active'
                : ''
            } `}
            style={{ width: '328px' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full">
                  <img src={card.icon} alt="brand" />
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white">
                  {card.title}
                </h4>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-1">
                <p className="text-sm font-medium">Total Share</p>
                <p className="font-medium text-black dark:text-white">
                  {card.totalShare}
                </p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <p className="text-sm font-medium">Total Return</p>
                <p
                  className={`flex items-center gap-1 font-medium ${
                    card.levelUp ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {card.totalReturn}
                  {card.levelUp && (
                    <svg
                      className="fill-current"
                      width="11"
                      height="9"
                      viewBox="0 0 11 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83246 8.41748L0.828662 0.91748L10.8363 0.91748L5.83246 8.41748Z"
                        fill=""
                      ></path>
                    </svg>
                  )}
                  {card.levelDown && (
                    <svg
                      className="fill-current"
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83258 0.417479L10.8364 7.91748L0.828779 7.91748L5.83258 0.417479Z"
                        fill=""
                      ></path>
                    </svg>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFive;
