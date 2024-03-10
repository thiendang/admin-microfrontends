import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import loadable from 'loadable-components';
const ReactApexChart = loadable(() => import('react-apexcharts'));

interface SeriesData {
  data: number[];
}

interface ChartNineState {
  series: SeriesData[];
}

const options: ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
    id: 'areachart-2',
  },
  annotations: {
    yaxis: [
      {
        y: 8200,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Support',
        },
      },
      {
        y: 8600,
        y2: 9000,
        // borderColor: '#000',
        // fillColor: '#FEB019',
        opacity: 0.2,
        label: {
          // borderColor: '#333',
          style: {
            fontSize: '10px',
            color: '#fff',
            background: '#FEB019',
          },
          text: 'Y-axis range',
        },
      },
    ],
    xaxis: [
      {
        x: new Date('23 Nov 2017').getTime(),
        strokeDashArray: 0,
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Anno Test',
        },
      },
      {
        x: new Date('26 Nov 2017').getTime(),
        x2: new Date('28 Nov 2017').getTime(),
        fillColor: '#B3F7CA',
        opacity: 0.4,
        label: {
          borderColor: '#B3F7CA',
          style: {
            fontSize: '10px',
            color: '#fff',
            background: '#00E396',
          },
          offsetY: -10,
          text: 'X-axis range',
        },
      },
    ],
    points: [
      {
        x: new Date('01 Dec 2017').getTime(),
        y: 8607.55,
        marker: {
          size: 8,
          fillColor: '#fff',
          strokeColor: 'red',
          radius: 2,
          cssClass: 'apexcharts-custom-class',
        },
        label: {
          borderColor: '#FF4560',
          offsetY: 0,
          style: {
            color: '#ffffff',
            background: '#FF4560',
          },

          text: 'Point Annotation',
        },
      },
      {
        x: new Date('08 Dec 2017').getTime(),
        y: 9340.85,
        marker: {
          size: 0,
        },
        image: {
          path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346',
        },
      },
    ],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    padding: {
      right: 30,
      left: 20,
    },
  },
  title: {
    // text: 'Line with Annotations',
    align: 'left',
  },
  labels: [
    '13 Nov 2017',
    '14 Nov 2017',
    '15 Nov 2017',
    '16 Nov 2017',
    '17 Nov 2017',
    '20 Nov 2017',
    '21 Nov 2017',
    '22 Nov 2017',
    '23 Nov 2017',
    '24 Nov 2017',
    '27 Nov 2017',
    '28 Nov 2017',
    '29 Nov 2017',
    '30 Nov 2017',
    '01 Dec 2017',
    '04 Dec 2017',
    '05 Dec 2017',
    '06 Dec 2017',
    '07 Dec 2017',
    '08 Dec 2017',
  ],
  xaxis: {
    type: 'datetime',
  },
};

const ChartNine: React.FC = () => {
  const [state, setState] = useState<ChartNineState>({
    series: [
      {
        data: [
          8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
          8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
          8496.25, 8600.65, 8881.1, 9340.85,
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
            8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
            8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
            8496.25, 8600.65, 8881.1, 9340.85,
          ],
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
            Socials Overview
          </h4>
        </div>
      </div>

      <div>
        <div id="chartNine" className="-ml-5">
          <div style={{ minHeight: '365px' }}>
            {typeof window !== 'undefined' && (
              <ReactApexChart
                options={options}
                series={state.series}
                type="line"
                height={350}
              />
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChartNine;
