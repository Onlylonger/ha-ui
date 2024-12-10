import { create } from "zustand";

interface Action {
  label: string;
  onClick: (actionName: string, item: MessageItem) => void | Promise<void>;
}

interface OpenParams {
  title: string;
  content: string;
  type: string;
  hideBackDrop?: boolean;
  primaryAction?: Action;
  otherAction?: Action[];
}

type MessageItem = OpenParams & {
  open: boolean;
  id: string;
  promise: {
    re: (value: string) => void;
    rj: (reason?: any) => void;
  };
};

let id = 0;

export const useMessageBoxStore = create<{
  list: MessageItem[];
  open: (item: OpenParams) => Promise<string>;
  close: (id: string) => void;
}>((set, get) => ({
  list: [],

  open(item) {
    return new Promise((re, rj) => {
      set({
        list: [
          ...get().list,
          {
            ...item,
            open: true,
            id: `message-box-${id++}`,
            promise: { re, rj },
          },
        ],
      });
    });
  },
  close(id) {
    const tmp = [...get().list];
    set({
      list: tmp.filter((v) => v.id !== id),
    });
  },
}));
