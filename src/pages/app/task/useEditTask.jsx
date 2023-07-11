import { create } from "zustand";

export const useEditTask = create((set) => ({
  title: "1",
  notes: "2",
  setNotes: (notes) => set({ notes }),
  setTitle: (title) => set({ title }),
}));
