import './styles.css'; 
import Header from './Header';
import { Container, CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'
   const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea': '#121212'
    }
  }
   })

   const toggle = () => {
    setDarkMode(!darkMode)
   }

  return (
    <ThemeProvider theme={theme}>  
  <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode = {darkMode} toggle = {toggle} />
      <Container>
       <Outlet />
      </Container>

    </ThemeProvider>
  );
}

export default App;
