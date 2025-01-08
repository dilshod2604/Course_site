import { create } from "zustand";
interface useBurgerState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useBurgerStore = create<useBurgerState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
