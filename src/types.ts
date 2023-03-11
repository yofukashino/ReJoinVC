import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export { ReactElement, ComponentClass, MouseEvent } from "react";

export interface AccountDetailsClasses {
  accountProfilePopoutWrapper: string;
  avatar: string;
  avatarWrapper: string;
  buildOverrideButton: string;
  canCopy: string;
  container: string;
  copySuccess: string;
  customStatus: string;
  emoji: string;
  godlike: string;
  hasBuildOverride: string;
  nameTag: string;
  panelSubtextContainer: string;
  panelTitleContainer: string;
  redIcon: string;
  statusTooltip: string;
  strikethrough: string;
  usernameContainer: string;
  withTagAsButton: string;
  withTagless: string;
}
export interface AccountDetails {
  AccountDetails: DefaultTypes.AnyFunction;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface ChannelActions {
  disconnect: DefaultTypes.AnyFunction;
  selectChannel: DefaultTypes.AnyFunction;
  selectPrivateChannel: DefaultTypes.AnyFunction;
  selectVoiceChannel: DefaultTypes.AnyFunction;
}
export interface Voice {
  channelId: null | string;
  currentVoiceChannelId: null | string;
  guildId: undefined | string;
  stream: boolean;
  type: string;
  video: boolean;
}
export interface ContextMenuArgs {
  className: string;
  config: { context: string };
  context: string;
  onHeightUpdate: DefaultTypes.AnyFunction;
  position: null | number;
  target: HTMLElement;
  theme: string;
}
export interface ExtendedContextMenuArgs extends ContextMenuArgs {
  onClose: DefaultTypes.AnyFunction;
}
export interface ContextMenu {
  close: DefaultTypes.AnyFunction;
  open: (
    event: React.UIEvent,
    render?: ContextMenu,
    options?: { enableSpellCheck?: boolean },
    renderLazy?: Promise<ContextMenu>,
  ) => void;
  openLazy: (
    event: React.UIEvent,
    renderLazy?: Promise<ContextMenu>,
    options?: { enableSpellCheck?: boolean },
  ) => void;
}

export interface SliderComponent {
  $$typeof: symbol;
  render: DefaultTypes.AnyFunction;
}

export interface Settings {
  time: number;
}
