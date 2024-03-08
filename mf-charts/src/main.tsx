import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MicrofrontendContext, register, z } from 'microfrontends';
import ChartOne from './components/ChartOne.tsx';
import ChartThree from './components/ChartThree.tsx';
import ChartTwo from './components/ChartTwo.tsx';
import pkg from '../package.json';

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Charts = () => (
  <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
    <ChartOne />
    <ChartTwo />
    <ChartThree />
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
