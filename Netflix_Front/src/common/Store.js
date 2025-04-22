import { create } from "zustand";
import { persist } from "zustand/middleware";

export const ThemeStore = create(
  persist((set) => ({
    theme: "light",
    accessToken: "",
    refreshToken: "",
    selectedLanguage: "en",

    toggle: () =>
      set((prevState) => ({
        ...prevState,
        theme: prevState.theme === "light" ? "dark" : "light",
      })),
      
    addAccessToken: (token) =>
      set((prevState)=>({ ...prevState, accessToken: token })),
    
    addRefreshToken: (token) =>
      set((prevState)=>({ ...prevState, refreshToken: token })),
    
    setSelectedLanguage: (language) =>
      set((prevState)=>({ ...prevState, selectedLanguage: language })),
  }))
);
