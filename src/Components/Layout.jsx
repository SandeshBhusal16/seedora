import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">MERN Theme Switcher</h1>
        <ThemeToggleButton />
      </header>
      <main className="p-8">{children}</main>
    </div>
  );
};

export default Layout;
