'use client';

import { ThemeButtonProps } from '@/types';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeButton = ({ className, id, ariaLabel }: ThemeButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!resolvedTheme) return;

    setIcon(resolvedTheme === 'dark' ? '/moon.svg' : '/sun.svg');
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className={className}>
        <div className="w-[20] h-[20]" />
      </div>
    );
  }

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
