import { RejoinConsts, SettingValues, UltimateChannelStore } from "../index";
import { AccountDetailsClasses } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
import * as Types from "../types";

export const PutButton: unknown = (voice: Types.Voice): void => {
  if (
    voice?.currentVoiceChannelId == null ||
    UltimateChannelStore.getVoiceChannelId() == voice.currentVoiceChannelId
  )
    return;
  RejoinConsts.buttonShouldExist = false;
  RejoinConsts.voice = null;
  Utils.forceUpdate(
    document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
  );
  RejoinConsts.buttonShouldExist = true;
  RejoinConsts.voice = voice;
  Utils.forceUpdate(
    document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
  );
  if (RejoinConsts.disapperTimeouts.size) {
    for (const timeout of Array.from(RejoinConsts.disapperTimeouts)) clearTimeout(timeout);
    RejoinConsts.disapperTimeouts.clear();
  }
  RejoinConsts.disapperTimeouts.add(
    setTimeout(() => {
      RejoinConsts.buttonShouldExist = false;
      RejoinConsts.voice = null;
      Utils.forceUpdate(
        document.querySelector(`.${AccountDetailsClasses.container}:not(.spotify-modal)`),
      );
    }, SettingValues.get("time")),
  );
};
