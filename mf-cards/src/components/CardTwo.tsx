import React, { ReactNode } from 'react';

interface CardProps {
  id: number;
  title: string;
  name: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
}

const cards: CardProps[] = [
  {
    id: 1,
    title: '$4,350',
    name: 'Unique Visitors',
    levelUp: true,
    levelDown: false,
    rate: '18%',
  },
  {
    id: 2,
    title: '55.9K',
    name: 'Total Pageviews',
    levelUp: true,
    levelDown: false,
    rate: '25%',
  },
  {
    id: 3,
    title: '54%',
    name: 'Bounce Rate',
    levelUp: false,
    levelDown: true,
    rate: '7%',
  },
  {
    id: 4,
    title: '2m 56s',
    name: 'Visit Duration',
    levelUp: true,
    levelDown: false,
    rate: '12%',
  },
];

type Props = {
  scope?: string;
  module?: string;
};

const CardTwo: React.FC<Props> = ({scope, module}: Props) => {
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
            className={`flex items-center justify-center gap-2 ${
              index !== cards.length - 1
                ? 'border-b border-stroke pb-5 dark:border-strokedark xl:!border-b-0 xl:!border-r xl:!pb-0'
                : ''
            } `}
          >
            <div>
              <h4 className="mb-1 !text-2xl font-semibold text-black dark:text-white md:text-lg">
                {card.title}
              </h4>
              <p className="text-sm font-medium">{card.name}</p>
            </div>
            <div className="flex items-center gap-1">
              {card.levelUp && (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z"
                    fill="#4ade80"
                  ></path>
                </svg>
              )}
              {card.levelDown && (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75302 12.1328L13.7773 8.10856L14.8381 9.16939L9.00279 15.0047L3.16748 9.16939L4.22831 8.10856L8.25256 12.1328V3.00098H9.75302V12.1328Z"
                    fill="#fb923c"
                  ></path>
                </svg>
              )}
              <span
                className={card.levelUp ? 'text-green-400' : 'text-orange-400'}
              >
                {card.rate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTwo;
