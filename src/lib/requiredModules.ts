import { webpack } from "replugged";
import * as Types from "../types";

export const PanelButton = webpack.getBySource<Types.ComponentClass>("Masks.PANEL_BUTTON");

export const AccountDetailsClasses = webpack.getByProps<Types.AccountDetailsClasses>(
  "godlike",
  "container",
);

export const ChannelActions = webpack.getByProps<Types.ChannelActions>("selectChannel");
export const SliderComponentModule = webpack.getBySource(".sliderContainer");

export const SliderComponent = Object.values(SliderComponentModule).find(
  (m: Types.SliderComponent) => m?.render?.toString().includes("sliderContainer"),
) as Types.ComponentClass;
