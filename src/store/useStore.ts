import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '../types';

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  selectedProjectCategory: string;
  setSelectedProjectCategory: (category: string) => void;
  selectedBlogCategory: string;
  setSelectedBlogCategory: (category: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { theme: newTheme };
        }),
      setTheme: (theme) =>
        set(() => {
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { theme };
        }),
      selectedProjectCategory: 'All',
      setSelectedProjectCategory: (category) =>
        set({ selectedProjectCategory: category }),
      selectedBlogCategory: 'All',
      setSelectedBlogCategory: (category) =>
        set({ selectedBlogCategory: category }),
    }),
    {
      name: 'app-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      },
    }
  )
);
