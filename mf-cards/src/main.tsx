import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MicrofrontendContext, register, z } from 'microfrontends';
import CardOne from './components/CardOne.tsx';
import CardTwo from './components/CardTwo.tsx';
import pkg from '../package.json';
import CardThree from './components/CardThree.tsx';
import CardFour from './components/CardFour.tsx';
import CardFive from './components/CardFive.tsx';

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Cards = () => (
  <div className="flex flex-col gap-10">
    <div className="col-span-12">
      <CardOne />
    </div>
    <div className="col-span-12">
      <CardTwo />
    </div>
    <div className="col-span-12">
      <CardThree />
    </div>
    <div className="col-span-12">
      <CardFour />
    </div>
    <div className="col-span-12">
      <CardFive />
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
      <Cards />
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
  props: z.object({
    a: z.string(),
    b: z.number(),
    c: z.object({}),
  }),
});
