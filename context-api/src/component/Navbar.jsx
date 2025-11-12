import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Theme Toggler
                </h1>
                
                <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-full bg-${theme === 'dark' ? 'gray-700' : 'gray-200'} hover:bg-${theme === 'dark' ? 'gray-600' : 'gray-300'} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? (
                        <Sun className="w-6 h-6 text-yellow-400" />
                    ) : (
                        <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
