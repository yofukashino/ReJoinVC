import Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /className:.{1,3}\.buttons,style:\w+,children:\[/,
        replace: (prefix) =>
          `${prefix}replugged.plugins.getExports("dev.tharki.ReJoinVC")?._addPanelButton?.(),`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
