import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    
    const isNight = () => {
        const date = new Date();
        if (date.getHours() >= 18 || date.getHours() < 6) {
            return true;
        } else {
            return false;
        }
    }
    const [isDarkMode, setIsDarkMode] = useState(isNight() ? true : false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};