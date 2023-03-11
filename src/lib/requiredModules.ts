import { webpack } from "replugged";
import * as Types from "../types";

export const PanelButton = webpack.getBySource(
  "Masks.PANEL_BUTTON",
) as unknown as Types.ComponentClass;

export const { AccountDetails } = webpack.getBySource(
  "isCopiedStreakGodlike",
) as unknown as Types.AccountDetails;
export const AccountDetailsClasses = webpack.getByProps(
  "godlike",
  "container",
) as unknown as Types.AccountDetailsClasses;

export const ChannelActions = webpack.getByProps(
  "selectChannel",
) as unknown as Types.ChannelActions;
export const SliderComponentModule = webpack.getBySource(".sliderContainer");

export const SliderComponent = Object.values(SliderComponentModule).find(
  (m: Types.SliderComponent) => m?.render?.toString().includes("sliderContainer"),
) as unknown as Types.ComponentClass;
