import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import Settings from "./Components/Settings";
import Modules from "./lib/requiredModules";
import "./style.css";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("ReJoinVC");
export const SettingValues = await settings.init("dev.tharki.ReJoinVC", defaultSettings);

export const start = (): void => {
  Settings.registerSettings();
  void Modules.loadModules().catch((err) => PluginLogger.error(err));
};

export { default as _addPanelButton } from "./Components/AccountDetailsButton";

export { Settings } from "./Components/Settings.jsx";
