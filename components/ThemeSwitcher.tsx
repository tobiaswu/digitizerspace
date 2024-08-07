'use client';

import { useDarkMode } from '@/lib/hooks/useDarkMode';
import { useEffect, useState } from 'react';
import { PiMoonStarsLight, PiSunLight } from 'react-icons/pi';

export const ThemeSwitcher = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [className, setClassName] = useState('hidden');

  useEffect(() => {
    if (darkMode) {
      setClassName('swap swap-rotate text-4xl hover:text-primary');
    } else {
      setClassName('swap swap-rotate text-4xl hover:text-primary');
    }
  }, [darkMode]);

  return (
    <label className={className}>
      <input
        type="checkbox"
        className="theme-controller"
        value="lightTheme"
        checked={!darkMode}
        onChange={toggleDarkMode}
      />
      <PiSunLight className="swap-off" />
      <PiMoonStarsLight className="swap-on" />
    </label>
  );
};
