import { FluxDispatcher } from "../index";
import { PutButton } from "./PutButton";
export const addListeners = (): void => {
  FluxDispatcher.subscribe("VOICE_CHANNEL_SELECT", PutButton);
};
export const removeListeners = (): void => {
  FluxDispatcher.unsubscribe("VOICE_CHANNEL_SELECT", PutButton);
};
