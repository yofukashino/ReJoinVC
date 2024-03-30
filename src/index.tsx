import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("ReJoinVC");
export const SettingValues = await settings.init("dev.tharki.ReJoinVC", defaultSettings);

export const start = (): void => {
  registerSettings();
};

export { default as _addPanelButton } from "./Components/AccountDetailsButton";

export { Settings } from "./Components/Settings.jsx";
