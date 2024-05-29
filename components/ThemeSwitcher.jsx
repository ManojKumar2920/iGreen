'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Load theme preference from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Save theme preference to local storage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className='flex items-center cursor-pointer'>
      <div className='relative'>
        <input
          type='checkbox'
          className='sr-only'
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <div className='block bg-gray-600 w-12 h-6 rounded-full'></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center ${
            theme === 'dark'
              ? 'transform translate-x-6 bg-green-200'
              : 'bg-green-600'
          }`}
        >
          {theme === 'dark' ? (
            <FiSun className='text-gray-800 w-3 h-3' />
          ) : (
            <FiMoon className='text-white w-3 h-3' />
          )}
        </div>
      </div>
    </label>
  );
}
