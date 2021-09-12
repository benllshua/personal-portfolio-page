import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#58BFBF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3F5C77',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F3FFFF',
    },
  },
});

export default theme;
