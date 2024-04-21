import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './common/header';
import ProductCard from './common/productCard';

const Home = () => { 
  const navigate = useNavigate();
  const[flashSaleProducts,setFlashSaleProducts]= useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(json => setFlashSaleProducts(json))
    .catch(error => console.error('Error fetching products:', error));
}, []);

const filteredFlashSaleProducts = flashSaleProducts.filter((prod)=> (prod.category !== "jewelery" && prod.category !== "electronics" && prod.rating.rate > 3));
    
  return (
    <div className='main-wrapper'>
        <Header/>
        <div className='main-container'>
          <div className='sub-title'>Flash Sale</div>
          <div className='flash-sale-wrapper'>
            {filteredFlashSaleProducts.map((prod, index) => {
                        return (
                            <div key={index} className="product-card">
                                <ProductCard data={prod} isWomen={prod.category == "women's clothing"}/>
                            </div>
                        )
                    })}
          </div>
          <div className='sub-title'>Categories</div>
          <div className='flex-group'>
            <div className='category-card men' onClick={()=> navigate('/mensClothing')}>Men's Clothing</div>
            <div className='category-card women' onClick={()=> navigate('/womenClothing')}>Women's Clothing</div>
          </div>
        </div>
    </div>
  )
}

export default Home;