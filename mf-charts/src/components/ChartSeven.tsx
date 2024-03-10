import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartSevenState {
  series: SeriesData[];
}

const options: ApexOptions = {
  legend: {
    show: !1,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#C7D2E2'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 310,
    type: 'area',
    toolbar: {
      show: !1,
    },
  },
  fill: {
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 320,
        },
      },
    },
  ],
  stroke: {
    curve: 'smooth',
  },
  markers: {
    size: 0,
  },
  grid: {
    xaxis: {
      lines: {
        show: !0,
      },
    },
    yaxis: {
      lines: {
        show: !0,
      },
    },
  },
  dataLabels: {
    enabled: !1,
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (n) {
          return '';
        },
      },
    },
    marker: {
      show: !1,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: !1,
    },
    axisTicks: {
      show: !1,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
  },
};

const ChartSeven: React.FC = () => {
  const [state, setState] = useState<ChartSevenState>({
    series: [
      {
        name: 'Received Amount',
        data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
      },
      {
        name: 'Due Amount',
        data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Received Amount',
          data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
        },
        {
          name: 'Due Amount',
          data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
        },
      ],
    }));
  };

  if (typeof window !== 'undefined') {
    handleReset;
  }

  return (
    <div className="h-full sm:px-8 rounded-sm border border-stroke bg-white px-5 pb-5 pt-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex flex-col gap-2 sm:!flex-row sm:!items-center sm:!justify-between">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Payments Overview
          </h4>
        </div>
        <div className="flex items-center">
          <p className="font-medium uppercase text-black dark:text-white">
            Short by:
          </p>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark">
                Weekly
              </option>
            </select>
            <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                  fill="#64748B"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartSeven" className="-ml-5">
          <div style={{ minHeight: '325px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="area"
                height={310}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex text-center xsm:!flex-row">
        <div style={{width: "50%"}} className="xsm:!w-1/2 border-solid py-2 dark:border-strokedark border-r-1">
          <p className="font-medium">Received Amount</p>
          <h4 className="mt-1 text-title-sm2 font-bold text-black dark:text-white">
            $45,070.00
          </h4>
        </div>
        <div style={{width: "50%"}} className="xsm:!w-1/2 py-2">
          <p className="font-medium">Due Amount</p>
          <h4 className="mt-1 text-title-sm2 font-bold text-black dark:text-white">
            $32,400.00
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartSeven;
