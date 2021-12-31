import { createTheme } from '@mui/material';

export const materialTheme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: ['PT Sans Narrow', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiTooltip: {
      // defaultProps: {
      //
      // }
      // styleOverrides: {
      //   backgroundColor: 'red'
      // }
    },
  },
  palette: {
    mode: 'dark',
    common: {
      black: '#0D0E13',
      white: '#FDFFFC',
    },
    primary: {
      main: '#0D0E13',
    },
    secondary: {
      main: '#FDFFFC',
    },
    warning: {
      main: '#FF9F1C',
    },
    text: {
      primary: '#FDFFFC',
      disabled: '#8D8D8D',
    },
    action: {
      active: '#FDFFFC',
    },
  },
});
