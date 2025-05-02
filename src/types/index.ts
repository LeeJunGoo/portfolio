import { ButtonHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel: string;
};

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxRows: number;
};

export type ToggleContextType = {
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
};
