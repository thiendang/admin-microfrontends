import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartSixState {
  series: SeriesData[];
}

const options: ApexOptions = {
  legend: {
    show: !1,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#13C296', '#3C50E0'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 200,
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
    width: [2, 2],
    curve: 'smooth',
  },
  markers: {
    size: 0,
  },
  grid: {
    strokeDashArray: 7,
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

const ChartSix: React.FC = () => {
  const [state, setState] = useState<ChartSixState>({
    series: [
      {
        name: 'Product One',
        data: [168, 285, 131, 248, 187, 295, 191, 269, 201, 185, 252, 151],
      },
      {
        name: 'Product Two',
        data: [268, 185, 251, 198, 287, 205, 281, 199, 259, 185, 150, 111],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Product One',
          data: [168, 285, 131, 248, 187, 295, 191, 269, 201, 185, 252, 151],
        },
        {
          name: 'Product Two',
          data: [268, 185, 251, 198, 287, 205, 281, 199, 259, 185, 150, 111],
        },
      ],
    }));
  };

  if (typeof window !== 'undefined') {
    handleReset;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-8 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h4 className="text-xl font-bold text-black dark:text-white">
            Campaign Visitors
          </h4>
          <div className="mt-2 flex gap-2">
            <h3 className="mb-2 text-3xl font-bold text-black dark:text-white">
              $560.93
            </h3>
            <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_554_43030)">
                  <path
                    d="M13.4731 5.62415H9.95118C9.68868 5.62415 9.46993 5.8429 9.46993 6.1054C9.46993 6.3679 9.68868 6.58665 9.95118 6.58665H12.1168L9.3168 8.4679C9.20743 8.5554 9.0543 8.5554 8.92305 8.4679L6.03555 6.56477C5.57618 6.25852 5.00743 6.25852 4.54805 6.56477L1.1793 8.8179C0.960552 8.97102 0.894927 9.27727 1.04805 9.49602C1.13555 9.62727 1.28868 9.71477 1.46368 9.71477C1.55118 9.71477 1.66055 9.6929 1.72618 9.62727L5.1168 7.37415C5.22618 7.28665 5.3793 7.28665 5.51055 7.37415L8.39805 9.29915C8.85743 9.6054 9.42618 9.6054 9.88555 9.29915L12.9699 7.22102V9.64915C12.9699 9.91165 13.1887 10.1304 13.4512 10.1304C13.7137 10.1304 13.9324 9.91165 13.9324 9.64915V6.1054C13.9762 5.8429 13.7356 5.62415 13.4731 5.62415Z"
                    fill="#10B981"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_554_43030">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.45752 0.877319)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              +2.5%
            </span>
          </div>
          <span className="mt-1 block font-medium">
            Average cost per interaction
          </span>
        </div>
        <div className="relative flex">
          <button className="text-[#98A6AD] hover:text-body">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
                fill=""
              ></path>
              <path
                d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                fill=""
              ></path>
              <path
                d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
                fill=""
              ></path>
            </svg>
          </button>
          <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark block">
            <button className="flex w-full items-center gap-2 rounded-sm px-4 py-2 text-left text-sm hover:bg-gray dark:hover:bg-gray-4">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_62_9787)">
                  <path
                    d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z"
                    fill=""
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_62_9787">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Edit
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-4 py-2 text-left text-sm hover:bg-gray dark:hover:bg-gray-4">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.225 2.20005H10.3V1.77505C10.3 1.02505 9.70005 0.425049 8.95005 0.425049H7.02505C6.27505 0.425049 5.67505 1.02505 5.67505 1.77505V2.20005H3.75005C3.02505 2.20005 2.42505 2.80005 2.42505 3.52505V4.27505C2.42505 4.82505 2.75005 5.27505 3.22505 5.47505L3.62505 13.75C3.67505 14.775 4.52505 15.575 5.55005 15.575H10.4C11.425 15.575 12.275 14.775 12.325 13.75L12.75 5.45005C13.225 5.25005 13.55 4.77505 13.55 4.25005V3.50005C13.55 2.80005 12.95 2.20005 12.225 2.20005ZM6.82505 1.77505C6.82505 1.65005 6.92505 1.55005 7.05005 1.55005H8.97505C9.10005 1.55005 9.20005 1.65005 9.20005 1.77505V2.20005H6.85005V1.77505H6.82505ZM3.57505 3.52505C3.57505 3.42505 3.65005 3.32505 3.77505 3.32505H12.225C12.325 3.32505 12.425 3.40005 12.425 3.52505V4.27505C12.425 4.37505 12.35 4.47505 12.225 4.47505H3.77505C3.67505 4.47505 3.57505 4.40005 3.57505 4.27505V3.52505V3.52505ZM10.425 14.45H5.57505C5.15005 14.45 4.80005 14.125 4.77505 13.675L4.40005 5.57505H11.625L11.25 13.675C11.2 14.1 10.85 14.45 10.425 14.45Z"
                  fill=""
                ></path>
                <path
                  d="M8.00005 8.1001C7.70005 8.1001 7.42505 8.3501 7.42505 8.6751V11.8501C7.42505 12.1501 7.67505 12.4251 8.00005 12.4251C8.30005 12.4251 8.57505 12.1751 8.57505 11.8501V8.6751C8.57505 8.3501 8.30005 8.1001 8.00005 8.1001Z"
                  fill=""
                ></path>
                <path
                  d="M9.99994 8.60004C9.67494 8.57504 9.42494 8.80004 9.39994 9.12504L9.24994 11.325C9.22494 11.625 9.44994 11.9 9.77494 11.925C9.79994 11.925 9.79994 11.925 9.82494 11.925C10.1249 11.925 10.3749 11.7 10.3749 11.4L10.5249 9.20004C10.5249 8.87504 10.2999 8.62504 9.99994 8.60004Z"
                  fill=""
                ></path>
                <path
                  d="M5.97497 8.60004C5.67497 8.62504 5.42497 8.90004 5.44997 9.20004L5.62497 11.4C5.64997 11.7 5.89997 11.925 6.17497 11.925C6.19997 11.925 6.19997 11.925 6.22497 11.925C6.52497 11.9 6.77497 11.625 6.74997 11.325L6.57497 9.12504C6.57497 8.80004 6.29997 8.57504 5.97497 8.60004Z"
                  fill=""
                ></path>
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartSix" className="-ml-5">
          <div style={{ minHeight: '215px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="area"
                height={200}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSix;
