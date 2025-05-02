'use client';

import { useToggleActions, useToggleOpen } from '@/store/side-toggle-store';
import { navList } from '@/util/constants';
import Link from 'next/link';
import { useEffect } from 'react';
import ThemeButton from '../common/ThemeButton';

const SideBar = ({ iconImage }: { iconImage: string }) => {
  const isOpen = useToggleOpen();
  const { setOpen } = useToggleActions();

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');

    const handleResize = () => {
      if (media.matches && isOpen) {
        setOpen(false);
      }
    };

    media.addEventListener('change', handleResize);
    return () => media.removeEventListener('change', handleResize);
  }, [isOpen, setOpen]);

  const handleToggleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 right-0 w-64 z-[1000] shadow-xl bg-white dark:bg-gray-700 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button id="closeMenu" className="p-1 m-4" onClick={handleToggleClose}>
          <p className="text-4xl text-gray-700 dark:text-white ">&times;</p>
        </button>
        <nav className="mt-10">
          <ul className="flex flex-col items-center gap-6">
            {navList.map((item) => (
              <li key={item.label}>
                <Link className="font-semibold hover:text-blue-500 transition-colors duration-100" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-3 mt-6">
          <ThemeButton
            iconImage={iconImage}
            className="w-full flex justify-center p-2 rounded-full bg-yellow-200 dark:bg-gray-600"
            id="darkModeMobileToggle"
            ariaLabel="모바일 전용 다크모드 버튼입니다."
          />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
