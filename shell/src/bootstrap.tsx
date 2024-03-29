import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AppRouter } from "./pages/AppRouter.tsx";
// import './css/style.css';
// import './css/satoshi.css';
// import './css/config.css';

const queryClient = new QueryClient();

function App({
  getManifestsUri = process.env.NODE_ENV === "production"
    ? `${process.env.PUBLIC_URL || ""}/microfrontend-manifests.json`
    : process.env.REACT_APP_API_ROOT_URL || "http://localhost:3333",
} = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppRouter
        getMicrofrontendManifests={async () =>
          await fetch(getManifestsUri).then((res) => res.json())
        }
      />
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
