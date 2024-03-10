import { config } from 'dotenv';
import { MicrofrontendManifest } from 'microfrontends';

import Main from './main.tsx';
import MFChartOne from './chart-one.tsx';
import MFChartTwo from './chart-two.tsx';
import MFChartThree from './chart-three.tsx';
import MFChartFour from './chart-four.tsx';
import MFChartFive from './chart-five.tsx';
import MFChartSix from './chart-six.tsx';
import MFChartSeven from './chart-seven.tsx';
import MFChartEight from './chart-eight.tsx';
import MFChartNine from './chart-nine.tsx';
import MFChartTen from './chart-ten.tsx';

config();

const manifest = {
  scope: Main.scope,
  module: './unused-root-module.js',
  entry: `http://localhost:${process.env.PORT}/remoteEntry.js`,
  events: {
    consumes: [],
  },
  slots: {
    routes: [],
    'chart-one': [
      {
        name: 'MFChartOne',
        module: MFChartOne.module,
        props: MFChartOne.props,
      },
    ],
    'chart-two': [
      {
        name: 'MFChartTwo',
        module: MFChartTwo.module,
        props: MFChartTwo.props,
      },
    ],
    'chart-three': [
      {
        name: 'MFChartThree',
        module: MFChartThree.module,
        props: MFChartThree.props,
      },
    ],
    'chart-four': [
      {
        name: 'MFChartFour',
        module: MFChartFour.module,
        props: MFChartFour.props,
      },
    ],
    'chart-five': [
      {
        name: 'MFChartFive',
        module: MFChartFive.module,
        props: MFChartFive.props,
      },
    ],
    'chart-six': [
      {
        name: 'MFChartSix',
        module: MFChartSix.module,
        props: MFChartSix.props,
      },
    ],
    'chart-seven': [
      {
        name: 'MFChartSeven',
        module: MFChartSeven.module,
        props: MFChartSeven.props,
      },
    ],
    'chart-eight': [
      {
        name: 'MFChartEight',
        module: MFChartEight.module,
        props: MFChartEight.props,
      },
    ],
    'chart-nine': [
      {
        name: 'MFChartNine',
        module: MFChartNine.module,
        props: MFChartNine.props,
      },
    ],
    'chart-ten': [
      {
        name: 'MFChartTen',
        module: MFChartTen.module,
        props: MFChartTen.props,
      },
    ],
    'main:content': [
      {
        name: 'Main',
        module: Main.module,
        props: Main.props,
        route: '/charts/*',
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));
