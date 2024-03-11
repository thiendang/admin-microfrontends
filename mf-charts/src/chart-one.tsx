import { MicrofrontendContext, register, z } from "microfrontends";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";
import ChartOne from "./components/ChartOne.tsx";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const MFChartOne = () => {
  const { navigate } = useContext(MicrofrontendContext);
  return (
    <ChartOne scope="charts" module="./chart-one" />
  );
};

export default register(pkg.name, "./chart-one", {
  mount: (containerRef, props) => {
    const container = getHTMLElement(containerRef);
    if (container?.getAttribute("data-mf-mounted") === "true") {
      return () => {
        ReactDOM.unmountComponentAtNode(container!);
      };
    }
    container?.setAttribute("data-mf-mounted", "true");
    const root = createRoot(container!);
    root.render(
      <React.StrictMode>
        <MicrofrontendContext.Provider value={props as any}>
          <MFChartOne />
        </MicrofrontendContext.Provider>
      </React.StrictMode>
    );

    return () => {
      root.unmount();
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
  props: z.object({}),
});
