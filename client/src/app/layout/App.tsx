import './styles.css'; 
import Header from './Header';
import { Container, CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useStoreContext } from '../context/StoreContext';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { getCookie } from '../util/util';



function App() {
  const {setBasket} = useStoreContext()

  const[loading, setLoading] = useState(false)


  useEffect(() => {
    const buyerId = getCookie('buyerId')
    if(buyerId){
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [setBasket])
  
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

   if(loading) return <LoadingComponent message="initializing app..." />
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
