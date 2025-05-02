'use client';

import { useToggleActions } from '@/store/side-toggle-store';
import { MdOutlineMenu } from 'react-icons/md';

const HeaderToggle = () => {
  const { setOpen } = useToggleActions();

  const handleToggleMenu = () => {
    setOpen(true);
  };

  return (
    <button id="menuToggle" className="md:hidden text-gray-700 dark:text-white" onClick={handleToggleMenu}>
      <MdOutlineMenu className="text-3xl" />
    </button>
  );
};

export default HeaderToggle;
