import React,{useState,useEffect} from 'react';
import CategoryPage from './common/categoryPage';

const MensClothing = () => {
    const[products,setProducts]= useState([]);
    const category = "men's clothing";
    const encodedCategory = encodeURI(category);
  
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${encodedCategory}`)
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <CategoryPage categoryData={products} title="Men's Clothing"/>
    )
}

export default MensClothing;