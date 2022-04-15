import React from 'react';
import "./Styles/Navbar.css";

const searchicon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>


export default function navbar() {
  return (
    <div className='nav'>
     
        <div className='logo'>
          <a href='#'>
                 <img id='logoImage' src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" /> 
                 </a>
          </div>
            <a href='#' className='navlinks' > Mi Phones</a>
            <a href='#' className='navlinks' > Redmi Phones</a>
            <a href='#' className='navlinks' > TV</a>
            <a href='#' className='navlinks' > Laptops</a>
            <a href='#' className='navlinks' > Fitness  Lifestyle</a>
            <a href='#' className='navlinks' > Home</a>
            <a href='#' className='navlinks' > Radio</a>
            <a href='#' className='navlinks' > Accessories</a>
         
            <div className='searchbox'>
            <input type='text' name='search' placeholder='Search Products'  />
           {searchicon}
         </div>
        </div>
  )
}
