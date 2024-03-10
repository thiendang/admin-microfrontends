import { config } from "dotenv";
import { MicrofrontendManifest } from "microfrontends";

import Main from "./main.tsx";
import MFCardOne from "./card-one.tsx";
import MFCardTwo from "./card-two.tsx";
import MFCardThree from "./card-three.tsx";
import MFCardFour from "./card-four.tsx";
import MFCardFive from "./card-five.tsx";

config();

const manifest = {
  scope: Main.scope,
  module: "./unused-root-module.js",
  entry: `http://localhost:${process.env.PORT}/remoteEntry.js`,
  events: {
    consumes: [],
  },
  slots: {
    routes: [],
    "card-one": [
      {
        name: "MFCardOne",
        module: MFCardOne.module,
        props: MFCardOne.props,
      },
    ],
    "card-two": [
      {
        name: "MFCardTwo",
        module: MFCardTwo.module,
        props: MFCardTwo.props,
      },
    ],
    "card-three": [
      {
        name: "MFCardThree",
        module: MFCardThree.module,
        props: MFCardThree.props,
      },
    ],
    "card-four": [
      {
        name: "MFCardFour",
        module: MFCardFour.module,
        props: MFCardFour.props,
      },
    ],
    "card-five": [
      {
        name: "MFCardFive",
        module: MFCardFive.module,
        props: MFCardFive.props,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/cards/*",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));
