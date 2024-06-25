import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.SelectedChannelStore =
    webpack.getByStoreName<Types.SelectedChannelStore>("SelectedChannelStore");

  Modules.PanelButton = await webpack
    .waitForModule<Types.PanelButton>(webpack.filters.bySource("Masks.PANEL_BUTTON"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find PanelButton Module");
    });

  Modules.ChannelActions = await webpack
    .waitForProps<Types.ChannelActions>(["selectChannel"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find ChannelActions Module");
    });
};

export default Modules;
