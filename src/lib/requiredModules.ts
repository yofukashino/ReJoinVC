import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.SelectedChannelStore =
    webpack.getByStoreName<Types.SelectedChannelStore>("SelectedChannelStore");
  Modules.PanelButton = await webpack.waitForModule<Types.PanelButton>(
    webpack.filters.bySource("Masks.PANEL_BUTTON"),
  );

  Modules.ChannelActions = await webpack.waitForProps<Types.ChannelActions>("selectChannel");
};

export default Modules;
