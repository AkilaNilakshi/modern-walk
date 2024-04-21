import { Card } from 'antd'
import React from 'react'

const ProductCard = ({data,isWomen}) => {
  return (
    <div>
      <div className='prod-title'>{data.title}</div>
      <div className='prod-image'>
        <div style={{backgroundImage:`url('${data.image}')`,width:'100px',height:'120px',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
      </div>
      <div className={isWomen ? 'flex-group column desc-wrapper women': 'flex-group column desc-wrapper men'}>
          <div className='prod-price'>{data.price}</div>
          <div className='prod-description'>{data.description}</div>
        </div>      
    </div>
    
  )
}

export default ProductCard;