import { util } from "replugged";
import { SliderItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  return (
    <div>
      <SliderItem
        {...util.useSetting(SettingValues, "time", defaultSettings.time)}
        note="The amount of time to show the button after disconnecting."
        minValue={5000}
        maxValue={60000}
        onValueRender={(value: number) => {
          const seconds = value / 1000;
          const minutes = value / 1000 / 60;
          return value < 60000 ? `${seconds.toFixed(0)} secs` : `${minutes.toFixed(0)} min`;
        }}>
        Show Time
      </SliderItem>
    </div>
  );
};
