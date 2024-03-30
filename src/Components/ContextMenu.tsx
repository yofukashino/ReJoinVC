import { util } from "replugged";
import { components } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";
const { MenuSliderControl } = components as Types.DiscordComponents;
export const ReJoinContextMenu = (props) => {
  return (
    <ContextMenu.ContextMenu {...props} navId="yofukashino">
      <ContextMenu.MenuControlItem
        id="show-time"
        label="Show Time"
        control={() => (
          <MenuSliderControl
            {...util.useSetting(SettingValues, "time", defaultSettings.time)}
            minValue={5000}
            maxValue={60000}
            renderValue={(value: number) => {
              const seconds = value / 1000;
              const minutes = value / 1000 / 60;
              return value < 60000 ? `${seconds.toFixed(0)} secs` : `${minutes.toFixed(0)} min`;
            }}
          />
        )}
      />
    </ContextMenu.ContextMenu>
  );
};
