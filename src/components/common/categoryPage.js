import { Col, Row } from 'antd';
import React from 'react';
import Header from './header';
import ProductCard from './productCard';

const CategoryPage = ({categoryData,title}) => {
  return (
    <div className='main-wrapper'>
            <Header />
            <div className='main-container'>
                <div className='sub-title'>{title}</div>
                <Row>
                    {categoryData.map((prod, index) => {
                        return (
                            <Col span={4} key={index} className="product-card">
                                <ProductCard data={prod} isWomen={prod.category == "women's clothing"}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
  )
}

export default CategoryPage