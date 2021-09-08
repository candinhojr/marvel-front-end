export default {
  palette: {
    // https://material-ui.com/customization/themes/#palette
    primary: {
      light: '#BBF3FF',
      main: '#00aaff',
      dark: '#009CEA',
      contrastText: '#fff'
    },
    secondary: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    success: {
      light: '#4DB848',
      main: '#4DB848',
      dark: '#4DB848',
      contrastText: '#fff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Lato',
      'Muli',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.75
    },
    h2: {
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.75
    },
    h3: {
      fontWeight: 400,
      fontSize: 18,
      color: 'rgba(56, 68, 89, 0.6)',
      lineHeight: 1.75
    },
    h4: {
      fontWeight: 400,
      fontSize: 16,
      color: 'rgba(56, 68, 89, 0.6)',
      lineHeight: 1.75
    },
    h5: {
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(56, 68, 89, 0.6)',
      lineHeight: 1.75
    },
    h6: {
      fontWeight: 400,
      fontSize: 12,
      color: 'rgba(56, 68, 89, 0.6)',
      lineHeight: 1.75
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(56, 68, 89, 0.6)',
      lineHeight: 1.75
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 14,
      color: 'rgba(56, 68, 89, 0.87)',
      lineHeight: 1.75
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(56, 68, 89, 0.87)',
      lineHeight: 1.75
    },
    body2: {
      fontWeight: 700,
      fontSize: 14,
      color: 'rgba(56, 68, 89, 0.87)',
      lineHeight: 1.75
    },
    button: {
      fontWeight: 700
    }
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        borderRadius: 4,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 16,
        marginBottom: 16,
        '&:before': {
          display: 'none'
        },
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          borderLeft: '4px solid rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          borderLeft: '4px solid rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          borderLeft: '4px solid rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          borderLeft: '4px solid rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiTypography: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiSvgIcon: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiIcon: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiButton: {
      root: {
        '&.green-info': {
          color: 'white',
          backgroundColor: 'rgba(77, 184, 72, 0.87)'
        }
      }
    }
  }
}
