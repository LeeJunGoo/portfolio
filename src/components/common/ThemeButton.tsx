'use client';

import { useToggleOpen } from '@/store/side-toggle-store';
import { ThemeButtonProps } from '@/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ThemeButton = ({ iconImage, className, id, ariaLabel }: ThemeButtonProps) => {
  const theme = useRef<'light' | 'dark'>('light');
  const [icon, setIcon] = useState<string>(iconImage);
  const isOpen = useToggleOpen();

  useEffect(() => {
    if (!isOpen) return;

    const isDark = document.documentElement.classList.contains('dark');
    theme.current = isDark ? 'dark' : 'light';
    setIcon(isDark ? '/moon.svg' : '/sun.svg');
    console.log('너 실행', isOpen);
  }, [isOpen]);

  const setThemeValue = (nextTheme: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000`;
    theme.current = nextTheme;
    setIcon(nextTheme === 'dark' ? '/moon.svg' : '/sun.svg');
  };

  const toggleTheme = () => {
    const nextTheme = theme.current === 'dark' ? 'light' : 'dark';
    setThemeValue(nextTheme);
  };

  return (
    <button className={className} onClick={toggleTheme} id={id} aria-label={ariaLabel}>
      <Image
        src={icon}
        alt="아이콘 이미지입니다."
        width={20}
        height={20}
        className="hover:scale-150 transition-transform duration-300"
      />
    </button>
  );
};

export default ThemeButton;
