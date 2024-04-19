import { types } from "replugged";
import type { components } from "replugged/common";
import { ContextMenuProps } from "replugged/dist/renderer/modules/components/ContextMenu";
import { Store } from "replugged/dist/renderer/modules/common/flux";

export namespace Types {
  export import DefaultTypes = types;
  export type MenuProps = ContextMenuProps["ContextMenu"] & { children: React.ReactElement[] };
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;
  export type DiscordComponents = typeof components & {
    MenuSliderControl: React.ComponentType<{
      value: number;
      minValue: number;
      maxValue: number;
      onChange: (e: number) => void;
      renderValue?: (e: number) => string;
      "aria-label"?: string;
    }>;
  };
  export interface SelectedChannelStore extends Store {
    getChannelId: DefaultTypes.AnyFunction;
    getCurrentlySelectedChannelId: DefaultTypes.AnyFunction;
    getLastChannelFollowingDestination: DefaultTypes.AnyFunction;
    getLastSelectedChannelId: DefaultTypes.AnyFunction;
    getLastSelectedChannels: DefaultTypes.AnyFunction;
    getMostRecentSelectedTextChannelId: DefaultTypes.AnyFunction;
    getVoiceChannelId: () => string;
  }
  export interface ChannelActions {
    disconnect: DefaultTypes.AnyFunction;
    selectChannel: DefaultTypes.AnyFunction;
    selectPrivateChannel: DefaultTypes.AnyFunction;
    selectVoiceChannel: DefaultTypes.AnyFunction;
  }
  export interface Voice {
    [index: string]: unknown;
    channelId?: null | string;
    currentVoiceChannelId?: null | string;
    guildId?: undefined | string;
    stream?: boolean;
    type?: string;
    video?: boolean;
  }
  export interface SliderComponent {
    $$typeof: symbol;
    render: DefaultTypes.AnyFunction;
  }
  export type PanelButton = React.ComponentClass<{
    onContextMenu?: (event: React.MouseEvent) => void;
    icon?: () => React.ReactNode;
    tooltipText?: string;
    onClick?: () => void;
  }>;
  export interface Modules {
    loadModules?: () => Promise<void>;
    SelectedChannelStore?: SelectedChannelStore;
    PanelButton?: PanelButton;
    ChannelActions?: ChannelActions;
  }

  export interface Settings {
    time: number;
  }
}
export default Types;
