import { z, ZodType } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import { assert, sleep } from "../utils";
import {
  MicrofrontendController,
  MountFn,
  UnmountFn,
} from "../../components/Microfrontend/Microfrontend.types";

type Prettify<T> = { [K in keyof T]: T[K] } & {};

const getWindow = () => {
  const $window: Partial<Window> & { [key: string]: any } =
    typeof window === "undefined" ? {} : window;
  return $window;
};

/**
 *
 * @param {string} scope
 * @param {{ hasZeroInstances: () => boolean }} tracker
 */
const unloadMicrofrontendAssets = (
  scope: string,
  tracker: { hasZeroInstances: () => boolean }
) => {
  const mfName = `mf-${scope.toLocaleLowerCase()}-entry`;
  const mfScript = document.getElementById(mfName);
  if (!mfScript) {
    return;
  }
  const src = assert(
    mfScript.getAttribute("src"),
    `script #${mfName} must have attr [src]`
  );
  const lastSlash = src.lastIndexOf("/");
  const urlStart = src.slice(0, lastSlash);

  const maxAttempts = 3;

  async function attemptToRemoveAssets(attempt = 0): Promise<Element[]> {
    const scripts = Array.from(document.querySelectorAll("head script")).filter(
      (script) => script.getAttribute("src")?.startsWith(urlStart)
    );
    const links = Array.from(document.querySelectorAll("head link")).filter(
      (link) => link.getAttribute("href")?.startsWith(urlStart)
    );

    if (links.length && tracker.hasZeroInstances()) {
      console.log("Removed assets", [...scripts, ...links]);
      scripts.forEach((script) => {
        script.remove();
      });
      links.forEach((link) => {
        link.remove();
      });
      return [...scripts, ...links];
    } else {
      return sleep(100).then(() => {
        if (attempt < maxAttempts) {
          return attemptToRemoveAssets(attempt + 1);
        }
        return [];
      });
    }
  }
  return sleep(100).then(() => attemptToRemoveAssets());
};

/**
 * Keeps track of how many running instances of a Microfrontend there are.
 *
 * By tracking, we are able to unload the Microfrontend's assets when there are no more instances running.
 */
const instanceTracker = ($ctrl: MicrofrontendController) => {
  return {
    increment: () => {
      $ctrl.instances++;
    },
    decrement: () => {
      if ($ctrl.instances > 0) {
        $ctrl.instances--;
      }
    },
    hasZeroInstances: () => {
      const $window = getWindow();
      const scope = $window.$mfs?.[$ctrl.scope] as {
        [key: string]: { instances: number };
      };
      return (
        Object.values(
          assert(scope, `window.$mfs.${$ctrl.scope} must exist`)
        ).reduce((sum, scope) => sum + scope.instances, 0) === 0
      );
    },
  };
};

/**
 * The Microfrontend Controller is the engine room for a Microfrontend.
 * It contains the `mount` and `unmount` functions, as well as other variables for managing the microfrontend.
 *
 * Usually, a Microfrontend's controller is located in `window.$mfs[scope][module]`
 *
 * If no controller exists for the scope<>module pair, then a new placeholder controller will be created in the appropriate location
 *
 */
const getMicrofrontendController = <
  TScope extends string,
  TModule extends string
>(
  scope: TScope,
  module: TModule
): MicrofrontendController<TScope, TModule> => {
  if (typeof window === "undefined") {
    console.warn(
      "Microfrontend cannot be registered without a global window scope"
    );
  }
  const $window = getWindow();
  $window.$mfs = $window.$mfs || {};
  $window.$mfs[scope] = $window.$mfs[scope] || {};
  const $scope = $window.$mfs[scope];
  if ($scope) {
    $scope[module] = $scope[module] || {
      mount: () => {
        console.warn(`No ${scope} mount fn exists`);
        return () => {};
      },
      unmount: () => console.warn(`No ${scope} unmount fn exists`),
      instances: 0,
      scope,
      module,
      props: {},
    };
    return $scope?.[module]! as MicrofrontendController<TScope, TModule>;
  }
  console.warn(`No ${scope} scope exists in window.$mfs`);
  return $scope?.[module]!;
};

/**
 * Registers a microfrontend's scope and module in the window, returning a controller
 */
export const register = <
  TMountPropsSchema extends ZodType<{}>,
  TMountProps extends TMountPropsSchema extends ZodType<infer Props>
    ? Props
    : never,
  TScope extends string = string,
  TModule extends string = string
>(
  scope: TScope,
  module: TModule,
  {
    mount,
    unmount,
    props,
  }: {
    mount: MountFn<TMountProps>;
    unmount: UnmountFn;
    props: TMountPropsSchema;
  }
): Prettify<MicrofrontendController<TScope, TModule, TMountProps>> => {
  const $ctrl = getMicrofrontendController(scope, module);
  $ctrl.props = jsonSchemaOf(props);
  $ctrl.tracker = $ctrl.tracker || instanceTracker($ctrl);
  const runUnmountFn = (unmount: () => () => void) => {
    $ctrl.tracker?.decrement();
    if ($ctrl.tracker?.hasZeroInstances()) {
      unloadMicrofrontendAssets(scope, $ctrl.tracker);
    }
    return () => {
      setTimeout(() => {
        unmount()();
      });
    };
  };
  const getHTMLElement = (ref: HTMLElement | string) =>
    ref instanceof HTMLElement ? ref : document.getElementById(ref);
  $ctrl.mount = (containerRef, props) => {
    $ctrl.tracker?.increment();
    const unmount = assert(mount, "mount fn must exist")(
      containerRef,
      props as any
    );
    const container = getHTMLElement(containerRef);
    const eventBus = props?.eventBus;
    console.log(`%c [eventBus] emit mount - mf-scope: ${scope} - (mf-module: ${module})`, 'background: green; color: #ffffff')
    eventBus?.emit("mf:mount", {
      container,
      scope,
      module,
    });
    return () => {
      console.log(`%c [eventBus] emit unmount - mf-scope: ${scope} - (mf-module: ${module})`, 'background: orange; color: #ffffff')
      eventBus?.emit("mf:unmount", {
        container,
        scope,
        module,
      });
      return runUnmountFn(unmount);
    };
  };
  $ctrl.unmount = (containerRef) => {
    return runUnmountFn(() =>
      assert(unmount, "unmount fn must exist")(containerRef)
    );
  };
  return $ctrl;
};

export const jsonSchemaOf = <TSchema extends {}>(schema: ZodType<TSchema>) =>
  zodToJsonSchema(schema, "props") as TSchema;

export { z };
