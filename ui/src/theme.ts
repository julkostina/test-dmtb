import { createTheme } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    ocean: Palette['primary'];
  }
  interface PaletteOptions {
    ocean?: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    ocean: {
      main: '#181602ff',
      light: '#8bd4f5ff',
      dark: '#043351ff',
      contrastText: '#d8ecffff',
    },
  },
});

export default theme;