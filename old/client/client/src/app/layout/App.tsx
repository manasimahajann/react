 
import Catalog from '../../features/catalog/catalog';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Header from '../../features/Header';
import { Container } from '@mui/system'; 
import { useState } from 'react';
 
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/homePage'; 
import ContactPage from '../../features/contact/contactPage';
import AboutPage from '../../features/about/aboutPage';
import ProductDetails from '../../features/catalog/productDetails';
function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode : paletteType 
  }
    })
  
    function handleThemeChange(){
      setDarkMode(!darkMode);
    }

  return ( 
    <>
    <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Header darkMode = {darkMode} handleThemeChange = {handleThemeChange} /> 
       <Container>
       
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/catalog' component={Catalog}/>
      <Route path='/catalog/:id' component={ProductDetails}/>
      <Route path='/contact' component={ContactPage} />
      <Route path='/about' component={AboutPage}/>
       </Container>
       </ThemeProvider>
    </>
  );

} 
export default App;
