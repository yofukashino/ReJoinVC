import { webpack } from "replugged";
import Types from "../types";

export const PanelButton = webpack.getBySource<Types.PanelButton>("Masks.PANEL_BUTTON");

export const ChannelActions = webpack.getByProps<Types.ChannelActions>("selectChannel");

export const SelectedChannelStore =
  webpack.getByStoreName<Types.SelectedChannelStore>("SelectedChannelStore");
