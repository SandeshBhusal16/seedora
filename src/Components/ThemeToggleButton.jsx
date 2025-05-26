// src/components/ThemeToggleButton.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme(); // Make sure this line is correct

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg transition-colors"
    >
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggleButton;
