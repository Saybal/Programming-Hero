import React from 'react';
import { Link } from 'react-router';
import Navlogo from '../../assets/images/logo.png'

const Navbar = () => {

    const link = 
        <>
            <Link to="/"><li className='font-semibold mx-4 text-[#0F0F0FB3] text-lg'>Home</li></Link>
            <Link to="/booking"><li className='font-semibold mx-4 text-[#0F0F0FB3] text-lg'>My Booking</li></Link>
            <Link to="/blog"><li className='font-semibold mx-4 text-[#0F0F0FB3] text-lg'>Blogs</li></Link>
            <Link to="/contact"><li className='font-semibold mx-4 text-[#0F0F0FB3] text-lg'>Contact Us</li></Link>
        </>
    return (
        <div className="navbar bg-base-100 border-1 border-white max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className='flex gap-2 items-center'>
        <img src={Navlogo} alt="" />            
        <a className='web-font font-extrabold text-3xl'>Law.BD</a>            
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-success rounded-full text-white font-bold"><Link to="/contact">Contact Now</Link></button>
  </div>
</div>
    );
};

export default Navbar;