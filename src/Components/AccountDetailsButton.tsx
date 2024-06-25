import { contextMenu as ContextMenuApi, fluxHooks as FluxHooks, React } from "replugged/common";
import { SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import ReJoinContextMenu from "../Components/ContextMenu";
import Icons from "../Components/Icons";
export const RejoinPanelButton = (): React.ReactElement | null => {
  const { ChannelActions, PanelButton, SelectedChannelStore } = Modules;
  const [lastChannelId, setLastChannelId] = React.useState<string | null>(null);
  const { currentChannelId } = FluxHooks.useStateFromStores(
    [SelectedChannelStore],
    () => ({
      currentChannelId: SelectedChannelStore.getVoiceChannelId(),
    }),
    [],
    (previous, current) => {
      if (
        current?.currentChannelId !== previous?.currentChannelId &&
        previous?.currentChannelId != null
      ) {
        setLastChannelId(() => previous?.currentChannelId);
      }
      return false;
    },
  );

  React.useEffect(() => {
    if (lastChannelId == null || currentChannelId === lastChannelId) return () => {};
    const timeout = setTimeout(() => {
      setLastChannelId(() => null);
    }, SettingValues.get("time"));
    return () => {
      clearTimeout(timeout);
    };
  }, [lastChannelId, currentChannelId]);

  return lastChannelId ? (
    <PanelButton
      icon={() => <Icons.callJoin width="18" height="18" />}
      tooltipText="Rejoin Voice Channel"
      onClick={() => {
        ChannelActions.selectVoiceChannel(lastChannelId);
        setLastChannelId(() => null);
      }}
      onContextMenu={(event: React.MouseEvent) =>
        ContextMenuApi.open(event, (props) => (
          <ReJoinContextMenu {...props} onClose={ContextMenuApi.close} />
        ))
      }
    />
  ) : null;
};

export default () =>
  Modules.ChannelActions && Modules.PanelButton && Modules.SelectedChannelStore ? (
    <RejoinPanelButton />
  ) : null;
