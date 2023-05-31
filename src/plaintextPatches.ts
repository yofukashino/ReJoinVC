import * as Types from "./types";

export default [
  {
    find: "isCopiedStreakGodlike",
    replacements: [
      {
        match: /this\.renderNameZone\(\),\(0,.\.\w+\)\([\w_$]+.\w+,{grow:0,children:\[/,
        replace: `$&typeof replugged.plugins.getExports("dev.tharki.ReJoinVC")?.addPanelButton=="function"?replugged.plugins.getExports("dev.tharki.ReJoinVC")?.addPanelButton?.():null,`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
