import React from 'react'
import { useSelector } from 'react-redux';
import './Sidebar.css'

function Sidebar() {
    const {email} = useSelector(state => state.user.userData)
  return (
    <div className='sidebar'>
        <ul>
            <li> <a href='#'>Home</a> </li>
            <li> <a href='#'>About</a> </li>
            <li> <a href='#'>Contact</a> </li>
            <li> <a href='#'>Protofolio</a> </li>
            <li> <a href='#'>Services</a> </li>
            <li> <a href='#'>Hello {email}</a> </li>
        </ul>
    </div>
  )
}

export default Sidebar