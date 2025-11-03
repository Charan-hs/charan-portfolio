import { createTheme, ThemeOptions } from '@mui/material/styles';
import { colors } from './colors';

// Light theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    background: {
      default: colors.lightBackground.default,
      paper: colors.lightBackground.paper,
    },
    text: {
      primary: colors.lightText.primary,
      secondary: colors.lightText.secondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.14)',
    '0px 20px 40px rgba(0,0,0,0.16)',
    '0px 24px 48px rgba(0,0,0,0.18)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.14)',
    '0px 20px 40px rgba(0,0,0,0.16)',
    '0px 24px 48px rgba(0,0,0,0.18)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.14)',
    '0px 20px 40px rgba(0,0,0,0.16)',
    '0px 24px 48px rgba(0,0,0,0.18)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0px 6px 20px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
} as ThemeOptions);

// Dark theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary.light,
      light: colors.primary.main,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.light,
      light: colors.secondary.main,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    background: {
      default: colors.darkBackground.default,
      paper: colors.darkBackground.paper,
    },
    text: {
      primary: colors.darkText.primary,
      secondary: colors.darkText.secondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.3)',
    '0px 4px 8px rgba(0,0,0,0.35)',
    '0px 8px 16px rgba(0,0,0,0.4)',
    '0px 12px 24px rgba(0,0,0,0.45)',
    '0px 16px 32px rgba(0,0,0,0.5)',
    '0px 20px 40px rgba(0,0,0,0.55)',
    '0px 24px 48px rgba(0,0,0,0.6)',
    '0px 2px 4px rgba(0,0,0,0.3)',
    '0px 4px 8px rgba(0,0,0,0.35)',
    '0px 8px 16px rgba(0,0,0,0.4)',
    '0px 12px 24px rgba(0,0,0,0.45)',
    '0px 16px 32px rgba(0,0,0,0.5)',
    '0px 20px 40px rgba(0,0,0,0.55)',
    '0px 24px 48px rgba(0,0,0,0.6)',
    '0px 2px 4px rgba(0,0,0,0.3)',
    '0px 4px 8px rgba(0,0,0,0.35)',
    '0px 8px 16px rgba(0,0,0,0.4)',
    '0px 12px 24px rgba(0,0,0,0.45)',
    '0px 16px 32px rgba(0,0,0,0.5)',
    '0px 20px 40px rgba(0,0,0,0.55)',
    '0px 24px 48px rgba(0,0,0,0.6)',
    '0px 2px 4px rgba(0,0,0,0.3)',
    '0px 4px 8px rgba(0,0,0,0.35)',
    '0px 8px 16px rgba(0,0,0,0.4)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0px 6px 20px rgba(0,0,0,0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.4)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
} as ThemeOptions);
