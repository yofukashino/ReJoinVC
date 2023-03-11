import { PluginInjector, SettingValues, disapperTimeouts } from "../index";
import { AccountDetailsClasses } from "../lib/requiredModules";
import { patchPanelButton } from "../patches/AccountDetails";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const PutButton = (voice): void => {
  voice = voice as Types.Voice;
  if (voice?.currentVoiceChannelId == null) return;
  PluginInjector.uninjectAll();
  Utils.forceUpdate(document.querySelector(`.${AccountDetailsClasses.container}`));
  patchPanelButton(voice);
  Utils.forceUpdate(document.querySelector(`.${AccountDetailsClasses.container}`));
  if (disapperTimeouts.size) {
    for (const timeout of Array.from(disapperTimeouts)) clearTimeout(timeout);
    disapperTimeouts.clear();
  }
  disapperTimeouts.add(
    setTimeout(() => {
      PluginInjector.uninjectAll();
      Utils.forceUpdate(document.querySelector(`.${AccountDetailsClasses.container}`));
    }, SettingValues.get("time")),
  );
};
