import { createTheme } from '@mui/material';

const inputHeight = '52px';
const inputPaddingHorizontal = '0.75rem';

const labelInputText = {
  fontSize: '1.0625rem',
  lineHeight: '1.25rem',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4765F6',
    }
  },
  components: {
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...labelInputText,
          position: 'static',
          transform: 'none',
          marginBottom: '0.625rem',
          transition: 'color 0.3s',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: inputHeight,
          transition: 'color 0.3s, border-color 0.3s',
          border: '1px solid black',

          '&.Mui-focused': {
            borderColor: '#4765F6',
            color: '#4765F6',
          },
        },
        input: {
          ...labelInputText,
          boxSizing: 'border-box',
          height: '100%',
        },
        adornedEnd: {
          paddingRight: '0 !important',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
        input: {
          padding: '0 ' + inputPaddingHorizontal,
        },
        notchedOutline: {
          display: 'none',
        },
      },
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
