import { PluginInjector, SettingValues, disapperTimeouts } from "../index";
import { AccountDetailsClasses } from "../lib/requiredModules";
import { patchPanelButton } from "../patches/AccountDetails";
import * as Utils from "../lib/utils";
import * as Types from "../types";

export const PutButton: unknown = (voice: Types.Voice): void => {
  if (voice?.currentVoiceChannelId == null) return;
  PluginInjector.uninjectAll();
  Utils.forceUpdate(
    document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
  );
  patchPanelButton(voice);
  Utils.forceUpdate(
    document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
  );
  if (disapperTimeouts.size) {
    for (const timeout of Array.from(disapperTimeouts)) clearTimeout(timeout);
    disapperTimeouts.clear();
  }
  disapperTimeouts.add(
    setTimeout(() => {
      PluginInjector.uninjectAll();
      Utils.forceUpdate(
        document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
      );
    }, SettingValues.get("time")),
  );
};
