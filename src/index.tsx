import { Injector, Logger, common, components, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("ReJoinVC");
export const SettingValues = await settings.init("dev.tharki.ReJoinVC", defaultSettings);
export const {
  fluxDispatcher: FluxDispatcher,
  contextMenu: ContextMenuApi,
  channels: UltimateChannelStore,
} = common;
export const { ContextMenu } = components;
export const RejoinConsts = {
  disapperTimeouts: new Set<ReturnType<typeof setTimeout>>(),
  buttonShouldExist: false,
  voice: null,
};
import { addListeners, removeListeners } from "./listeners/index";

export const start = (): void => {
  registerSettings();
  addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  removeListeners();
};

export { addPanelButton } from "./patches/index";

export { Settings } from "./Components/Settings.jsx";
