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

export interface Settings {
  time: number;
}
