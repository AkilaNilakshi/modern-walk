import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const naviagate = useNavigate();
  return (
    <div className='page-title' onClick={()=>naviagate('/')}>Modern Walk</div>
  )
}

export default Header