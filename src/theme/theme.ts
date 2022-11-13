import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4765F6',
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '17px',
          fontStyle: 'normal',
          fontWeight: '400',
          color: '#000',
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        hiddenLabel: true,
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none'
        },
      }
    }
  }
});