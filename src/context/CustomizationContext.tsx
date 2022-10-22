import { CustomizationContextType, Props } from '@customTypes/context';
import { useState } from 'react';
import { createContext } from 'react';

export const CustomizationContext = createContext<CustomizationContextType | null>(null);

export const CustomizationProvider: React.FC<Props> = ({ children }) => {
  // `opened` refers to Drawer is opened
  const [opened, setOpened] = useState(true);
  // `isOpen` refers to the selected page
  const [isOpen, setIsOpen] = useState<string[]>(['']);
  // dark/light string used to toggle theme
  const [themeStyle, setThemeStyle] = useState('light');

  return (
    <CustomizationContext.Provider
      value={{
        opened,
        setOpened,
        isOpen,
        setIsOpen,
        themeStyle,
        setThemeStyle
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};
