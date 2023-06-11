import { components, util } from "replugged";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { SliderComponent } from "../lib/requiredModules";

const {
  ContextMenu: { ContextMenu, MenuControlItem },
} = components;

export const ReJoinContextMenu = (props) => {
  return (
    <ContextMenu {...{ ...props, navId: "tharki" }}>
      <MenuControlItem
        {...{
          id: "show-time",
          label: "Show Time",
          control: () => (
            <SliderComponent
              {...{
                ...util.useSetting(SettingValues, "time", defaultSettings.time),
                initialValue: SettingValues.get("time", defaultSettings.time),
                note: "The amount of time to show the button after disconnecting.",
                minValue: 5000,
                maxValue: 60000,
                renderValue: (value: number) => {
                  const seconds = value / 1000;
                  const minutes = value / 1000 / 60;
                  return value < 60000 ? `${seconds.toFixed(0)} secs` : `${minutes.toFixed(0)} min`;
                },
              }}
            />
          ),
        }}
      />
    </ContextMenu>
  );
};
