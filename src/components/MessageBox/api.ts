import { useMessageBoxStore } from "./store";

export const messageBox = {
  open: useMessageBoxStore.getState().open,
};
