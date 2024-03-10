import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface SeriesData {
  data: number[];
}

interface ChartTenState {
  series: SeriesData[];
}

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 250,
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: !1,
      columnWidth: '35%',
      borderRadius: 0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  stroke: {
    show: !0,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    axisBorder: {
      show: !1,
    },
    axisTicks: {
      show: !1,
    },
  },
  legend: {
    show: !1,
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    markers: {
      radius: 99,
    },
  },
  grid: {
    strokeDashArray: 7,
    yaxis: {
      lines: {
        show: !0,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    x: {
      show: !1,
    },
  },
};

const ChartTen: React.FC = () => {
  const [state, setState] = useState<ChartTenState>({
    series: [
      {
        data: [268, 385, 201, 298, 187, 195, 291],
      },
      {
        data: [345, 160, 291, 187, 195, 298, 201],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          data: [268, 385, 201, 298, 187, 195, 291],
        },
        {
          data: [345, 160, 291, 187, 195, 298, 201],
        },
      ],
    }));
  };

  if (typeof window !== 'undefined') {
    handleReset;
  }

  return (
    <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col gap-2 border-b border-stroke px-6 py-5 dark:border-strokedark sm:flex-row sm:justify-between">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Campaigns
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

      <div className="px-6 pt-4">
        <div id="chartTen" className="-ml-5">
          <div style={{ minHeight: '265px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="bar"
                height={250}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTen;
