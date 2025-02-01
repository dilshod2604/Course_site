import { create } from "zustand";

interface FavoriteState {
  favorites: any[];
  addToFavorites: (item: any) => void;
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
