import { PluginInjector, SettingValues, disapperTimeouts } from "../index";
import { AccountDetailsClasses } from "../lib/requiredModules";
import { patchPanelButton } from "../patches/AccountDetails";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const PutButton = (voice: Types.Voice): void => {
  if (voice?.currentVoiceChannelId == null) return;
  const AccountDetailsElement = document.querySelector(
    `.${AccountDetailsClasses.container}:not(.spotify-modal)`,
  );
  PluginInjector.uninjectAll();
  Utils.forceUpdate(AccountDetailsElement as HTMLElement);
  patchPanelButton(voice);
  Utils.forceUpdate(AccountDetailsElement as HTMLElement);
  if (disapperTimeouts.size) {
    for (const timeout of Array.from(disapperTimeouts)) clearTimeout(timeout);
    disapperTimeouts.clear();
  }
  disapperTimeouts.add(
    setTimeout(() => {
      PluginInjector.uninjectAll();
      Utils.forceUpdate(AccountDetailsElement as HTMLElement);
    }, SettingValues.get("time")),
  );
};
