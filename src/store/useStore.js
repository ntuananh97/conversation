import { create } from 'zustand'

const useStore = create((set) => ({
  comments: [],
  getComments: async () => {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    set((state) => ({ comments: [...state.comments, ...data] }))
  },

}))

export default useStore;