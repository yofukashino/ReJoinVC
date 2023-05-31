import { ContextMenuApi, RejoinConsts } from "../index";
import { AccountDetailsClasses, ChannelActions, PanelButton } from "../lib/requiredModules";
import { ReJoinContextMenu } from "../Components/ContextMenu";
import * as Icons from "../Components/Icons";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const addPanelButton = (): Types.ReactElement | null => {
  if (!RejoinConsts.buttonShouldExist) return null;
  return (
    <PanelButton
      {...{
        icon: () => Icons.callJoin("20", "20"),
        tooltipText: "Rejoin Voice Channel",
        onClick: () => {
          ChannelActions.selectVoiceChannel(RejoinConsts.voice.currentVoiceChannelId);
          const AccountDetailsElement = document.querySelector(
            `.${AccountDetailsClasses.container}:not(.spotify-modal)`,
          ) as HTMLElement;
          RejoinConsts.buttonShouldExist = false;
          Utils.forceUpdate(AccountDetailsElement);
        },
        onContextMenu: (event: Types.MouseEvent) =>
          ContextMenuApi.open(event, ((e: Types.ContextMenuArgs) => (
            <ReJoinContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
          )) as unknown as Types.ContextMenu),
      }}
    />
  );
};
