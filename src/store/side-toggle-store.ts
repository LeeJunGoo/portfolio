import { create } from 'zustand';

type ToggleState = {
  open: boolean;
  actions: {
    setOpen: (isOpen: boolean) => void;
  };
};

const useToggleStore = create<ToggleState>((set) => ({
  open: false,
  actions: {
    setOpen: (isOpen) => set({ open: isOpen }),
  },
}));

export const useToggleOpen = () => useToggleStore((state) => state.open);
export const useToggleActions = () => useToggleStore((state) => state.actions);
