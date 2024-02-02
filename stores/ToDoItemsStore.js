import { create } from 'zustand'

export const useToDoItemsStore = create((set) => ({
  cachedItems: null,
  lastVisible: null,
  saveItems: (items, lastVisible) => {
    set({ cachedItems: items, lastVisible: lastVisible })
  },
  clearItems: () => set({ cachedItems: null, lastVisible: null }),
}))