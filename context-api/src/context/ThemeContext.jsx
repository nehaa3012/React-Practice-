import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Initialize theme from localStorage or default to 'light'
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        
        // Remove any existing theme classes
        root.classList.remove('light', 'dark');
        
        // Add the current theme class
        root.classList.add(theme);
        
        // Set the data-theme attribute for better CSS targeting
        root.setAttribute('data-theme', theme);
        
        // Save theme preference to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
