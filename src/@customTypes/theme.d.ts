import { PaletteOptions } from '@mui/material';

export type CustomizationType = {
  isOpen: string[] | null | undefined; // for active default menu
  fontFamily: string;
  borderRadius: string | number;
  opened: boolean | undefined;
  navType: string | undefined;
};

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
  }

  interface TypographyVariants {
    mainContent: React.CSSProperties;
    commonAvatar?: React.CSSProperties;
    smallAvatar?: React.CSSProperties;
    mediumAvatar?: React.CSSProperties;
    largeAvatar?: React.CSSProperties;
    menuCaption?: React.CSSProperties;
    subMenuCaption?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    mainContent?: React.CSSProperties;
    commonAvatar?: React.CSSProperties;
    smallAvatar?: React.CSSProperties;
    mediumAvatar?: React.CSSProperties;
    largeAvatar?: React.CSSProperties;
    menuCaption?: React.CSSProperties;
    subMenuCaption?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark: string;
    contrastText?: string;
    200?: string;
    800: string;
    900?: string;
  }

  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText?: string;
    200?: string;
    800?: string;
  }

  interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions;
    secondary?: SimplePaletteColorOptions;
    orange?: SimplePaletteColorOptions;
    dark: PaletteOptions['primary'];
    error?: PaletteColor;
    warning?: PaletteColor;
  }
}

export interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  orange?: SimplePaletteColorOptions;
  dark: PaletteOptions['primary'];
  error?: PaletteColor;
  warning?: PaletteColor;
}
