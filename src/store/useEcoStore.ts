import { create } from "zustand";

type Store = {
  material: string;
  lighting: string;
  price: number;
  sustainability: number;
  setMaterial: (m: string) => void;
  setLighting: (l: string) => void;
  addToCart: () => void;
};

export const useEcoStore = create<Store>((set) => ({
  material: "Jute",
  lighting: "Morning",
  price: 1290,
  sustainability: 85,
  setMaterial: (m) => set({ material: m }),
  setLighting: (l) => set({ lighting: l }),
  addToCart: () => {
    // For demo: just log (could be extended to real cart)
    console.log("Added to cart");
  },
}));
