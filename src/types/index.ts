import { ButtonHTMLAttributes } from 'react';

export type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconImage: string;
  ariaLabel: string;
};
