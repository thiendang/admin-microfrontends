import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventEmitter } from 'eventemitter3';
import {
  MicrofrontendContext,
  MicrofrontendManifest,
  ErrorBoundary,
} from 'microfrontends';
import { useQuery } from 'react-query';

import { Layout } from '../components/Layout/index.tsx';
import PageTitle from '../components/PageTitle.tsx';
import Settings from './Settings.tsx';
import FormLayout from './Form/FormLayout.tsx';
import FormElements from './Form/FormElements.tsx';
import Profile from './Profile.tsx';
import Calendar from './Calendar.tsx';
import Alerts from './UiElements/Alerts.tsx';
import Buttons from './UiElements/Buttons.tsx';
import SignIn from './Authentication/SignIn.tsx';
import SignUp from './Authentication/SignUp.tsx';

const eventBus = new EventEmitter();

const Fallback = () => (
  <div>Something went wrong. This is a Fallback component.</div>
);

const AppRoutes = ({ manifests }: { manifests: MicrofrontendManifest[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const homedir = `${process.env.PUBLIC_URL || ''}${location.pathname}`;

  return (
    <MicrofrontendContext.Provider
      value={{
        manifests,
        navigate,
        eventBus,
        fetch,
        homedir,
        url: location.pathname,
        user: { permissions: [] },
        layout: {
          navItems: [],
          logout: () => {},
        },
        ErrorBoundary: (props: any) => (
          <ErrorBoundary Fallback={Fallback} {...props} />
        ),
      }}
    >
      <Routes>
        <Route path="*" element={<Layout />} />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </MicrofrontendContext.Provider>
  );
};

type MicrofrontendRoutesProps = {
  getMicrofrontendManifests: (
    overrides: string[]
  ) => Promise<MicrofrontendManifest[]>;
};

export const AppRouter = ({
  getMicrofrontendManifests,
}: MicrofrontendRoutesProps) => {
  const { data: manifests = [] } = useQuery('manifests', () =>
    getMicrofrontendManifests([]).then((manifests) =>
      overrideManifests(manifests)
    )
  );
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes manifests={manifests} />
    </BrowserRouter>
  );
};

async function overrideManifests(
  manifests: MicrofrontendManifest[]
): Promise<MicrofrontendManifest[]> {
  const allowedDomains = [/mykeels.github.io$/, /localhost:\d{4,5}$/];
  const { override_manifest = [] } = getSearchParams<'override_manifest'>();

  return await Promise.all(
    override_manifest
      .filter((url) => {
        const isUrlAllowed = allowedDomains.some((rgx) => {
          try {
            return rgx.test(new URL(url).origin);
          } catch {
            return null;
          }
        });
        if (!isUrlAllowed) {
          console.warn(`URL is not allowed to override manifests.`, {
            url,
            allowedDomains,
          });
        }
        return isUrlAllowed;
      })
      .filter(Boolean)
      .map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const urlParams = new URL(url);
            return {
              ...data,
              entry: `${urlParams.origin}${urlParams.pathname.replace(
                '/microfrontend-manifest.json',
                ''
              )}/remoteEntry.js`,
            };
          })
          .catch((err) => {
            console.error('Error fetching manifest', err);
            return null;
          })
      )
  )
    .then((overrides: MicrofrontendManifest[]) => overrides.filter(Boolean))
    .then((overrides) => {
      return manifests
        .map((manifest) => {
          const override =
            overrides.find((o) => o.scope === manifest.scope) || manifest;
          return override;
        })
        .concat(
          overrides.filter(
            (o) => !manifests.map((m) => m.scope).includes(o.scope)
          )
        );
    })
    .then((manifests) => {
      console.log(manifests);
      return manifests;
    });
}

function getSearchParams<TKeys extends string>(): {
  [key in TKeys]: string[] | undefined;
} {
  const params = new URLSearchParams(
    location.search ??
      location.hash.split('?')?.[location.hash.split('?').length - 1]
  );
  const entries = {} as Record<any, string[]>;
  for (let key of Array.from(params.keys())) {
    entries[key] = params.getAll(key);
  }
  return entries as {
    [key in TKeys]: string[] | undefined;
  };
}
