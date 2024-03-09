import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MicrofrontendContext, register, z } from 'microfrontends';
import ChartOne from './components/ChartOne.tsx';
import ChartThree from './components/ChartThree.tsx';
import ChartTwo from './components/ChartTwo.tsx';
import ChartFour from './components/ChartFour.tsx';
import ChartSix from './components/ChartSix.tsx';
import ChartSeven from './components/ChartSeven.tsx';
import ChartEight from './components/ChartEight.tsx';
import pkg from '../package.json';
import ChartNine from './components/ChartNine.tsx';

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Charts = () => (
  <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-8">
    <div className="col-span-12 xl:col-span-8">
      <ChartOne />
    </div>
    <div className="col-span-12 xl:col-span-4">
      <ChartTwo />
    </div>
    <div className="col-span-12 xl:col-span-5">
      <ChartThree />
    </div>
    <div className="col-span-12 xl:col-span-7">
      <ChartSix />
    </div>
    <div className="col-span-12 xl:col-span-7">
      <ChartSeven />
    </div>
    <div className="col-span-12 xl:col-span-5">
      <ChartEight />
    </div>
    <div className="col-span-12">
      <ChartFour />
    </div>
    <div className="col-span-12">
      <ChartNine />
    </div>
  </div>
);

function App() {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Charts />
    </QueryClientProvider>
  );
}

export default register(pkg.name, './main', {
  mount: (containerRef, props) => {
    const container = getHTMLElement(containerRef);
    if (container?.getAttribute('data-mf-mounted') === 'true') {
      return () => {
        ReactDOM.unmountComponentAtNode(container!);
      };
    }
    container?.setAttribute('data-mf-mounted', 'true');
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
  props: z.object({}),
});
