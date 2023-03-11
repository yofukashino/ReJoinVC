import { util } from "replugged";
import { PluginInjector } from "../index";
import * as Types from "../types";

export const findInTree = (
  tree: object,
  searchFilter: Types.DefaultTypes.AnyFunction,
  searchOptions: { ignore?: string[]; walkable?: null | string[] },
): unknown => {
  const { walkable = null, ignore = [] } = searchOptions;
  if (typeof searchFilter === "string") {
    if (Object.hasOwnProperty.call(tree, searchFilter)) return tree[searchFilter];
  } else if (searchFilter(tree)) {
    return tree;
  }
  if (typeof tree !== "object" || tree == null) return;

  let tempReturn: unknown;
  if (Array.isArray(tree)) {
    for (const value of tree) {
      tempReturn = findInTree(value, searchFilter, { walkable, ignore });
      if (typeof tempReturn !== "undefined") return tempReturn;
    }
  } else {
    const toWalk = walkable == null ? Object.keys(tree) : walkable;
    for (const key of toWalk) {
      if (!Object.hasOwnProperty.call(tree, key) || ignore.includes(key)) continue;
      tempReturn = findInTree(tree[key], searchFilter, { walkable, ignore });
      if (typeof tempReturn !== "undefined") return tempReturn;
    }
  }
  return tempReturn;
};

export const findInReactTree = (
  tree: Types.ReactElement,
  searchFilter: Types.DefaultTypes.AnyFunction,
): unknown | Types.ReactElement => {
  return findInTree(tree, searchFilter, { walkable: ["props", "children", "child", "sibling"] });
};

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
