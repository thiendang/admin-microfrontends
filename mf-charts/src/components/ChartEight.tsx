import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface ChartEightState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#0FADCF', '#80CAEE', '#3C50E0'],
  labels: ['Desktop', 'Tablet', 'Mobile'],
  legend: {
    show: !1,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: !1,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 250,
        },
      },
    },
  ],
};

const ChartEight: React.FC = () => {
  const [state, setState] = useState<ChartEightState>({
    series: [70, 20, 10],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [70, 20, 10],
    }));
  };

  if (typeof window !== 'undefined') {
    handleReset;
  }

  return (
    <div className="sm:px-8 rounded-sm border border-stroke bg-white px-5 pb-5 pt-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-bold text-black dark:text-white">
            Used Devices
          </h4>
        </div>
        <div className="mt-2 flex items-center sm:mt-0">
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

      <div className="mb-2">
        <div id="chartEight" className="mx-auto flex justify-center">
          <div style={{ minHeight: '295.367px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="donut"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-[#8FD0EF]"></span>
            <span className="font-medium text-black-2 dark:text-white">Mobile</span>
          </div>
          <span className="inline-block rounded-md bg-[#8FD0EF] px-2 py-1 text-xs font-medium text-white">
            10%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-[#6577F3]"></span>
            <span className="font-medium text-black-2 dark:text-white">Tablet</span>
          </div>
          <span className="inline-block rounded-md bg-[#6577F3] px-2 py-1 text-xs font-medium text-white">
            20%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-[#3c50e0]"></span>
            <span className="font-medium text-black-2 dark:text-white">
              Desktop
            </span>
          </div>
          <span className="inline-block rounded-md bg-[#3c50e0] px-2 py-1 text-xs font-medium text-white">
            70%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartEight;