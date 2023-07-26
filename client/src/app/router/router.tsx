import {createBrowserRouter} from "react-router-dom"
import HomePage from "../../features/home/homePage"
import Catalog from "../../features/catalog/catalog"
import AboutPage from "../../features/about/aboutPage"
import App from "../layout/App" 
import ContactPage from "../../features/contact/contactPage"
import ProductDetails from "../../features/catalog/ProductDetails"

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

        ]
    }
])