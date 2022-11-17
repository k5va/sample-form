import { createTheme } from '@mui/material';

const INPUT_HEIGHT = '52px';
const INPUT_PADDING_HORIZONTAL = '0.75rem';
const ERROR_COLOR = '#d32f2f';
const FOCUSED_COLOR = '#4765F6';
const RULE_FULFILLED_COLOR = '#AFAEBE';
const RULE_BROKEN_COLOR = '#4765F6';

const textStyles = {
  fontSize: '1.0625rem',
  fontWeight: '400',
  lineHeight: '1.25rem',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: FOCUSED_COLOR,
    }
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      }
    },
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
          ...textStyles,
          color: '#000',
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
          height: INPUT_HEIGHT,
          transition: 'color 0.3s, border-color 0.3s',
          border: '1px solid #AFAEBE',

          '&.Mui-focused': {
            borderColor: FOCUSED_COLOR,
            color: FOCUSED_COLOR,
          },
          '&.Mui-error': {
            borderColor: ERROR_COLOR,
            color: ERROR_COLOR,
          },
        },
        input: {
          ...textStyles,
          boxSizing: 'border-box',
          height: '100%',
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
          padding: '0 ' + INPUT_PADDING_HORIZONTAL,
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
          ...textStyles,
          borderRadius: '30px',
          textTransform: 'none',
          padding: '1rem 2.5rem',
        },
      }
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      }
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
      styleOverrides: {
        root: {
          color: RULE_BROKEN_COLOR,
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            color: RULE_FULFILLED_COLOR,
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: '0',
          fontSize: '13px',
        }
      }
    },
  },
});
