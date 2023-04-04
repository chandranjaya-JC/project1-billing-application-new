import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar_container'>
      <h3 className='navbar_heading'>
        <Link to='/' className='navbar_listlink'>
          <img
            src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/Brand-Logo-Design-1024x614.jpg'
            alt="Smiley face"
            style={{ verticalalign: "middle" ,height: "50",width:"50px"}}
          />
        </Link>
      </h3>
      <ol className='menu_icons'>
        <li className='underline--magical'>
          <Link to='/' className='navbar_listlink'>Home</Link>
        </li>
        <li className='underline--magical'>
          <Link to='/B' className='navbar_listlink'>Form</Link>
        </li>
        <li className='underline--magical'>
          <Link to='/C' className='navbar_listlink'>List</Link>
        </li>
        <li className='underline--magical'>
          <Link to='/D' className='navbar_listlink'>Stocks</Link>
        </li>
        <li className='underline--magical'>
          <Link to='/E' className='navbar_listlink'>Contact</Link>
        </li>

      </ol>
      <div className='navbar_button'>
        <button className='btn'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar