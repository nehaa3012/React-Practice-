import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Code, Palette, Zap } from 'lucide-react';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Theme Toggler App
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
        }`}>
          Experience seamless theme switching with our React Context API powered theme toggler.
          Toggle between light and dark modes with a single click!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-16 transition-all duration-300">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              {theme === 'dark' ? (
                <Sun className="w-12 h-12" />
              ) : (
                <Moon className="w-12 h-12" />
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'} Active
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The current theme is set to {theme === 'dark' ? 'dark' : 'light'} mode.
            Click the toggle button in the navigation bar to switch themes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">Built with React</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Leveraging the power of React's Context API for efficient state management.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">Beautiful UI</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Modern and responsive design with smooth transitions between themes.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">Fast & Lightweight</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Optimized for performance with minimal dependencies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;