import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Joblisting from './components/Joblisting';
import { appStore } from './utils/appStore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Lexend, Arial, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: `
      body {
        font-family: 'Lexend', Arial, sans-serif;
      }
    `,
    },
    MuiButtonBase: {
      styleOverrides: `
      body {
        font-family: 'Lexend', Arial, sans-serif;
      }
    `,
    },
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: 'Lexend', Arial, sans-serif;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

  <Provider store ={appStore}>
    <div className='grid-container'>

  <Header/>
  <Joblisting />
  </div>

  </Provider>
  </ThemeProvider>
)
}

export default App;
