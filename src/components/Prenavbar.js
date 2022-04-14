import React from 'react'
import "../Styles/Prenavbar.css";



const Prenavbar = () => {
  return (
    <div className='preNav'>
      <div>

        <a href="https://www.mi.com/in/" > MI INDIA</a> <span>| </span>
      <a href="https://in.event.mi.com/in/install-mi-store" >GET MI STORE APP </a> <span>| </span>
      <a href="https://www.mi.com/in/service/mihome/" a> ONLINE HELP </a> <span>| </span>
     
      <a href="https://www.mi.com/in/service/authorized_stores/" >RETAIL STORES </a>
      </div>
     
     <div>
         <a href='#'> SIGN IN</a> <span>| </span>
         <a href='#'>SIGN UP</a> <span>| </span>
         <a href='#'>CART(0)</a>

     </div>
      </div>
  )
}

export default Prenavbar
