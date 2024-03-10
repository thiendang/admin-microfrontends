import { config } from 'dotenv';
import { MicrofrontendManifest } from 'microfrontends';

import Main from './main.tsx';
import MFTableOne from './table-one.tsx';
import MFTableTwo from './table-two.tsx';
import MFTableThree from './table-three.tsx';
import MFTableFour from './table-four.tsx';
import MFTableFive from './table-five.tsx';
import MFTableSix from './table-six.tsx';

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
    'table-one': [
      {
        name: 'MFTableOne',
        module: MFTableOne.module,
        props: MFTableOne.props,
      },
    ],
    'table-two': [
      {
        name: 'MFTableTwo',
        module: MFTableTwo.module,
        props: MFTableTwo.props,
      },
    ],
    'table-three': [
      {
        name: 'MFTableThree',
        module: MFTableThree.module,
        props: MFTableThree.props,
      },
    ],
    'table-four': [
      {
        name: 'MFTableFour',
        module: MFTableFour.module,
        props: MFTableFour.props,
      },
    ],
    'table-five': [
      {
        name: 'MFTableFive',
        module: MFTableFive.module,
        props: MFTableFive.props,
      },
    ],
    'table-six': [
      {
        name: 'MFTableSix',
        module: MFTableSix.module,
        props: MFTableSix.props,
      },
    ],
    'main:content': [
      {
        name: 'Main',
        module: Main.module,
        props: Main.props,
        route: '/tables/*',
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));
