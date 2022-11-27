import create from 'zustand'

const useAuthStore = create((set) => ({
  user: undefined,
  saveUser: (user) => set((state) => ({ user })),
}))

export default useAuthStore
