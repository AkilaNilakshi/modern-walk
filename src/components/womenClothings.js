import React,{useEffect,useState} from 'react';
import CategoryPage from './common/categoryPage';

const WomenClothings = () => {
    const[products,setProducts]= useState([]);
    const category = "women's clothing";
    const encodedCategory = encodeURI(category);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${encodedCategory}`)
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <CategoryPage categoryData={products} title="Women's Clothing"/>
    )
}

export default WomenClothings;