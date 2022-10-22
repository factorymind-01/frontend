import React from 'react';

export type CustomizationContextType = {
  opened: boolean;
  setOpened: (T: boolean) => void;
  isOpen: string[] | undefined | null;
  setIsOpen: (item: string[]) => void;
  themeStyle: string;
  setThemeStyle: (theme: string) => void;
};

export interface Props {
  children: React.ReactNode;
}
