// Color palette - Customize these colors to match your brand
export const colors = {
  // Primary colors - Main brand colors
  primary: {
    main: '#1976d2',      // Blue
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  
  // Secondary colors - Accent colors
  secondary: {
    main: '#9c27b0',      // Purple
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },
  
  // Success colors
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
  },
  
  // Error colors
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
  },
  
  // Warning colors
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
  },
  
  // Info colors
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
  },
  
  // Background colors for light mode
  lightBackground: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  
  // Background colors for dark mode
  darkBackground: {
    default: '#0a1929',
    paper: '#132f4c',
  },
  
  // Text colors for light mode
  lightText: {
    primary: '#1e293b',
    secondary: '#64748b',
  },
  
  // Text colors for dark mode
  darkText: {
    primary: '#e2e8f0',
    secondary: '#94a3b8',
  },
  
  // Gradient colors
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    info: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    cool: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
};

export type ColorPalette = typeof colors;
