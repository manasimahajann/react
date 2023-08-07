import {Navigate, createBrowserRouter} from "react-router-dom"
import HomePage from "../../features/home/homePage"
import Catalog from "../../features/catalog/catalog"
import AboutPage from "../../features/about/aboutPage"
import App from "../layout/App" 
import ContactPage from "../../features/contact/contactPage"
import ProductDetails from "../../features/catalog/ProductDetails"
import BasketPage from "../../features/basket/basketPage"
import ServerError from "../errors/ServerError"
import NotFound from "../errors/NotFound"
import CheckoutPage from "../../features/checkout/checkoutPage"

export const router = createBrowserRouter([
    {

        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},

            
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},


            {path: 'basket', element: <BasketPage />},
            {path: 'checkout', element: <CheckoutPage />},

            {path: '*', element: <Navigate replace to='/not-found' />}

            

        ]
    }
])