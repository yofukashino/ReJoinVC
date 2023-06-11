import { util } from "replugged";
import { PluginInjector } from "../index";

export const isObject = (testMaterial: unknown): boolean =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;

export const hasProps = (mod: object, props: string[] | unknown[]): boolean =>
  isObject(mod) && props.every((prop: string | unknown) => Object.hasOwnProperty.call(mod, prop));

export const forceUpdate = (element: HTMLElement): void => {
  if (!element) return;
  const toForceUpdate = util.getOwnerInstance(element);
  const forceRerender = PluginInjector.instead(toForceUpdate, "render", () => {
    forceRerender();
    return null;
  });
  toForceUpdate.forceUpdate(() => toForceUpdate.forceUpdate(() => {}));
};
