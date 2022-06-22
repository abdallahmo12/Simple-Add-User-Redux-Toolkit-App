import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
    const {name} = useSelector(state => state.user.userData)
  return (
    <div className='header'>
        <nav>
            <h1>User Api</h1>
            <p>Hello {name}</p>
        </nav>
    </div>
  )
}

export default Header