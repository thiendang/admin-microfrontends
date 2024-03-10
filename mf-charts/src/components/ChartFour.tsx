import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface SeriesData {
  data: number[];
}

interface ChartFourState {
  series: SeriesData[];
}

const options: ApexOptions = {
  colors: ['#3C50E0'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 365,
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: !1,
      columnWidth: '55%',
      borderRadius: 2,
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
    categories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
    ],
    axisBorder: {
      show: !1,
    },
    axisTicks: {
      show: !1,
    },
  },
  legend: {
    show: !0,
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    markers: {
      radius: 99,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
    xaxis: {
      lines: {
        show: !1,
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

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        data: [
          168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212,
          270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290,
          380, 312,
        ],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          data: [
            168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123,
            212, 270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115,
            290, 380, 312,
          ],
        },
      ],
    }));
  };

  if (typeof window !== 'undefined') {
    handleReset;
  }

  return (
    <div className="h-full col-span-12 rounded-sm border border-stroke bg-white px-5 pt-8 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-8">
      <div>
        <h4 className="text-title-sm2 font-bold text-black dark:text-white">
          Visitors Analytics
        </h4>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5">
          <div style={{ minHeight: '365px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="bar"
                height={350}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
