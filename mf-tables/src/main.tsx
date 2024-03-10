import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { MicrofrontendContext, register, z } from "microfrontends";
import TableOne from './components/TableOne.tsx'
import TableTwo from './components/TableTwo.tsx'
import TableThree from './components/TableThree.tsx'
import TableFive from './components/TableFive.tsx'
import TableSix from './components/TableSix.tsx'
import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Tables = () => (
  <div className="flex flex-col gap-10">
    <TableOne />
    <TableTwo />
    <TableThree />
    <TableFive />
    <TableSix />
  </div>
);

function App() {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Tables />
    </QueryClientProvider>
  );
}

export default register(pkg.name, "./main", {
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
        <MicrofrontendContext.Provider
          value={
            {
              ...props,
            } as any
          }
        >
          <App />
        </MicrofrontendContext.Provider>
      </React.StrictMode>
    );

    return () => {
      try {
        root.unmount();
      } catch {}
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
  props: z.object({
    a: z.string(),
    b: z.number(),
    c: z.object({}),
  }),
});
