import { FluxDispatcher } from "../index";
import { PutButton } from "./PutButton";
import * as Types from "../types";
export const addListeners = (): void => {
  FluxDispatcher.subscribe("VOICE_CHANNEL_SELECT", PutButton as Types.FluxCallback);
};
export const removeListeners = (): void => {
  FluxDispatcher.unsubscribe("VOICE_CHANNEL_SELECT", PutButton as Types.FluxCallback);
};
