// ThemeSwitcher.js

import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <button
        className={`p-2 rounded-full ${
          isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'
        }`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
