import { create } from "zustand";
import { ICorses } from "../constants/couse";

interface FavoriteState {
  favorites: ICorses[];
  addToFavorites: (item: ICorses) => void;
  removeFromFavorites: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],

  addToFavorites: (item) =>
    set((state) => ({
      favorites: [...state.favorites, item],
    })),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));
