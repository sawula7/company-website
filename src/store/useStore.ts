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
  gdprConsent: {
    given: boolean;
    analyticsConsent: boolean;
    marketingConsent: boolean;
  };
  acceptAllCookies: () => void;
  acceptEssentialCookies: () => void;
  setCustomConsent: (analytics: boolean, marketing: boolean) => void;
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
      gdprConsent: {
        given: false,
        analyticsConsent: false,
        marketingConsent: false,
      },
      acceptAllCookies: () =>
        set({
          gdprConsent: {
            given: true,
            analyticsConsent: true,
            marketingConsent: true,
          },
        }),
      acceptEssentialCookies: () =>
        set({
          gdprConsent: {
            given: true,
            analyticsConsent: false,
            marketingConsent: false,
          },
        }),
      setCustomConsent: (analytics, marketing) =>
        set({
          gdprConsent: {
            given: true,
            analyticsConsent: analytics,
            marketingConsent: marketing,
          },
        }),
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
