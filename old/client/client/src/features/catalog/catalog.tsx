import { Product } from '../../app/models/product';
import { List, ListItem, Avatar, ListItemAvatar, ListItemText, Button } from '@mui/material';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';



export default function Catalog(){
    
const [products, setProducts] = useState<Product[]>([]);
useEffect(()=>{
  fetch('http://localhost:5000/api/Products')
  .then(response => response.json())
  .then(data => setProducts(data))
}, [])

 
    return(
        <>
        <ProductList products={products}></ProductList> 
        </>
    )
}