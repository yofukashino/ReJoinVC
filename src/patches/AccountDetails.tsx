import { ContextMenuApi, PluginInjector } from "../index";
import {
  AccountDetails,
  AccountDetailsClasses,
  ChannelActions,
  PanelButton,
} from "../lib/requiredModules";
import { ReJoinContextMenu } from "../Components/ContextMenu";
import * as Icons from "../Components/Icons";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchPanelButton = (voice: Types.Voice): void => {
  PluginInjector.after(
    AccountDetails.prototype,
    "render",
    (args: [], res: Types.ReactElement): Types.ReactElement => {
      const flexBox = Utils.findInReactTree(res, (m: Types.ReactElement) =>
        Utils.hasProps(m?.props, ["basis", "children", "grow", "shrink"]),
      );
      if (!flexBox) return res;
      const {
        props: { children },
      } = flexBox as Types.ReactElement;
      children.unshift(
        <PanelButton
          {...{
            icon: () => Icons.callJoin("20", "20"),
            tooltipText: "Rejoin Voice Channel",
            onClick: () => {
              PluginInjector.uninjectAll();
              ChannelActions.selectVoiceChannel(voice.currentVoiceChannelId);
              Utils.forceUpdate(document.querySelector(`.${AccountDetailsClasses.container}`));
            },
            onContextMenu: (event: Types.MouseEvent) =>
              ContextMenuApi.open(event, ((e: Types.ContextMenuArgs) => (
                <ReJoinContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
              )) as unknown as Types.ContextMenu),
          }}
        />,
      );
      return res;
    },
  );
};
