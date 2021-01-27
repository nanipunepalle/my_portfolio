import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
          main: '#1B202B',
          dark: '#1B202B',
          light: '#000000'
        },
        secondary: {
          main: '#141822',
        },
        background:{
          default: "#000000"
        }
      },
      
  });
  
  
  export {theme};